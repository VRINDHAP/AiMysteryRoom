import { z } from 'zod';

export const generateSchema = z.object({
  scenario: z.string().trim().min(20).max(3000),
  title: z.string().trim().max(100).optional().default(''),
  category: z.enum(['murder', 'theft', 'missing-person', 'corporate-espionage', 'cybercrime', 'kidnapping', 'general']),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  suspectCount: z.coerce.number().int().min(3).max(6),
  instructions: z.string().trim().max(1000).optional().default('')
});
export const sessionPatchSchema = z.object({
  mysteryId: z.string().min(1),
  viewedEvidenceIds: z.array(z.string()).optional(),
  bookmarkedEvidenceIds: z.array(z.string()).optional(),
  detectiveNotes: z.string().max(10000).optional()
});
export const accusationSchema = z.object({ sessionId: z.string().min(1), selectedSuspectId: z.string().min(1), reason: z.string().max(2000).optional().default('') });

const suspectSchema = z.object({ id: z.string(), name: z.string(), age: z.number(), occupation: z.string(), relationship: z.string(), personality: z.string(), motive: z.string(), alibi: z.string(), suspicion: z.enum(['low','medium','high']), portrait: z.string().optional().default('') });
const evidenceSchema = z.object({ id: z.string(), title: z.string(), category: z.enum(['digital','visual','surveillance','physical','witness']), type: z.string(), description: z.string(), relevance: z.string(), associatedSuspectIds: z.array(z.string()).default([]), timestamp: z.string().optional().default(''), hiddenClue: z.boolean().default(false), metadata: z.record(z.any()).optional().default({}) });
export const caseSchema = z.object({
  case: z.object({ title: z.string(), description: z.string(), category: z.string(), difficulty: z.string() }),
  crime: z.object({ victim: z.object({ name: z.string(), details: z.string() }).optional().default({name:'Unknown',details:''}), location: z.string(), method: z.string() }),
  suspects: z.array(suspectSchema).min(3),
  culprit: z.object({ suspectId: z.string(), motive: z.string(), method: z.string() }),
  timeline: z.array(z.object({ time: z.string(), event: z.string(), suspectId: z.string().optional().default('') })).min(2),
  evidence: z.array(evidenceSchema).min(5),
  solution: z.object({ explanation: z.string(), importantClues: z.array(z.string()), contradictions: z.array(z.string()), reconstruction: z.string().optional().default('') })
});
