import { GoogleGenAI } from '@google/genai';
import { caseSchema } from '../validators/schemas.js';

export async function generateMystery(input) {
  if (!process.env.GEMINI_API_KEY) throw Object.assign(new Error('Mystery generation is not configured yet. Add GEMINI_API_KEY to your .env file.'), { status: 503 });
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = `You design solvable fictional detective game cases. All people, events and evidence are fictional. Create exactly ${input.suspectCount} suspects. Difficulty: ${input.difficulty}. Category: ${input.category}. Scenario: ${input.scenario}. Extra direction: ${input.instructions || 'none'}. ${input.title ? `Title: ${input.title}.` : ''}
Return ONLY JSON with this schema: {"case":{"title":"","description":"","category":"","difficulty":""},"crime":{"victim":{"name":"","details":""},"location":"","method":""},"suspects":[{"id":"S01","name":"","age":30,"occupation":"","relationship":"","personality":"","motive":"","alibi":"","suspicion":"low|medium|high","portrait":""}],"culprit":{"suspectId":"S01","motive":"","method":""},"timeline":[{"time":"","event":"","suspectId":"S01"}],"evidence":[{"id":"E01","title":"","category":"digital|visual|surveillance|physical|witness","type":"whatsapp|document|photo|cctv|object|statement","description":"","relevance":"","associatedSuspectIds":["S01"],"timestamp":"","hiddenClue":false,"metadata":{}}],"solution":{"explanation":"","importantClues":[""],"contradictions":[""],"reconstruction":""}}. Exactly one culprit. Include ${input.difficulty === 'easy' ? '5 to 7' : input.difficulty === 'medium' ? '8 to 12' : '13 to 18'} distinct evidence items, including a WhatsApp-style conversation, a CCTV observation, a physical clue and a witness statement. For WhatsApp evidence, metadata must contain messages: [{sender, text, time}] with 3 or more fictional messages. CCTV metadata should include cameraId and location. Provide enough independent clues to identify the culprit; make misleading clues explainable. Every timeline event and clue must fit the final explanation. Use fictional portrait URLs from images.unsplash.com only when appropriate, otherwise empty strings. JSON only.`;
  let lastError;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await ai.models.generateContent({ model: process.env.GEMINI_MODEL || 'gemini-2.5-flash', contents: `${prompt}${attempt ? '\nPrevious response did not pass schema or consistency checks. Recreate it carefully and return valid JSON.' : ''}`, config: { responseMimeType: 'application/json', temperature: 0.8 } });
      const raw = response.text?.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
      if (!raw) throw new Error('The case generator returned an empty response.');
      let parsed;
      try { parsed = JSON.parse(raw); } catch { throw new Error('The case generator returned invalid case data.'); }
      const checked = caseSchema.safeParse(parsed);
      if (!checked.success) throw new Error(`Generated case did not pass validation: ${checked.error.issues[0]?.message || 'invalid case data'}`);
      const data = checked.data;
      const evidenceCount = data.evidence.length;
      const validCount = input.difficulty === 'easy' ? evidenceCount >= 5 && evidenceCount <= 7 : input.difficulty === 'medium' ? evidenceCount >= 8 && evidenceCount <= 12 : evidenceCount >= 13 && evidenceCount <= 18;
      const suspectIds = new Set(data.suspects.map(s => s.id));
      const validReferences = data.evidence.every(e => e.associatedSuspectIds.every(id => suspectIds.has(id))) && data.timeline.every(t => !t.suspectId || suspectIds.has(t.suspectId));
      const requiredTypes = ['digital','surveillance','physical','witness'];
      const hasEvidenceTypes = requiredTypes.every(category => data.evidence.some(e => e.category === category));
      if (data.suspects.length !== input.suspectCount || !suspectIds.has(data.culprit.suspectId) || suspectIds.size !== data.suspects.length || new Set(data.evidence.map(e => e.id)).size !== evidenceCount || !validCount || !validReferences || !hasEvidenceTypes) throw new Error('Generated case failed consistency checks.');
      return data;
    } catch (error) { lastError = error; }
  }
  throw new Error(`${lastError?.message || 'Case generation failed'} Please try again.`);
}
