# AI MYSTERY ROOM
## Product Requirements Document & Technical Specification

**Document Type:** Product Requirements Document (PRD) + Software Development Specification (SDS)  
**Project Name:** AI Mystery Room  
**Version:** 1.0  
**Status:** Initial Development Specification  
**Technology Stack:** MERN + Google Gemini AI

---

# 1. PROJECT OVERVIEW

## 1.1 Project Description

AI Mystery Room is an interactive, AI-powered mystery investigation platform where users become detectives and solve fictional crime mysteries generated dynamically using Artificial Intelligence.

Users provide a short scenario, story idea, or mystery theme. Based on the input, the AI generates a complete fictional investigation containing:

- A mystery storyline.
- A list of suspects.
- A fictional culprit.
- Motives and possible alibis.
- Investigation evidence.
- WhatsApp conversations.
- Photographs and visual clues.
- CCTV footage or CCTV-style recordings.
- Witness statements.
- Other supporting evidence.

The user investigates the case by exploring the available evidence, connecting clues, identifying contradictions, and ultimately selecting the person they believe is responsible.

The system evaluates the user's final answer against the AI-generated investigation and reveals whether the deduction was correct.

## 1.2 Core Concept

**User Story → AI Mystery Generation → Investigation → Evidence Analysis → Culprit Selection → Case Resolution**

The main objective is to create an immersive detective experience rather than a conventional question-and-answer quiz.

## 1.3 Product Vision

To create an AI-powered mystery investigation experience where every investigation is dynamically generated, unique, interactive, and logically solvable.

---

# 2. PRODUCT OBJECTIVES

The platform should:

1. Allow users to generate mysteries from their own story ideas.
2. Generate unique fictional investigations using Gemini AI.
3. Create multiple suspects with distinct personalities, motives, and alibis.
4. Generate believable but fictional evidence.
5. Provide an interactive investigation environment.
6. Require users to analyze evidence before identifying the culprit.
7. Evaluate the user's deduction.
8. Reveal the complete explanation after the investigation.
9. Support multiple mystery categories and difficulty levels.
10. Provide a responsive and immersive user experience.

---

# 3. TARGET USERS

- Mystery and detective story enthusiasts.
- Users interested in crime investigation games.
- Puzzle and logical reasoning enthusiasts.
- Casual gamers looking for interactive experiences.
- Users who enjoy solving fictional criminal cases.

---

# 4. CORE USER JOURNEY

The complete user journey should follow this sequence.

### Step 1: Landing Page

The user visits the AI Mystery Room homepage.

The landing page introduces the concept and provides a prominent CTA:

**"Enter the Mystery Room"**

Other sections:
- How It Works.
- Features.
- Example investigations.
- About the platform.

### Step 2: Create a Mystery

The user enters the mystery creation interface.

Input fields:

- Mystery title (optional).
- Scenario/story description (required).
- Mystery category.
- Difficulty level.
- Number of suspects.
- Optional additional instructions.

Example user input:

"A wealthy businessman is found dead inside his locked mansion during a family gathering. There are four family members, and everyone claims to have been in a different room at the time of death."

The user clicks **Generate Mystery**.

### Step 3: AI Investigation Generation

The backend sends the user's scenario and configuration to Gemini.

Gemini generates a structured investigation containing:

1. Case background.
2. Crime details.
3. Suspects.
4. Culprit identity.
5. Motives.
6. Timelines.
7. Alibis.
8. Evidence.
9. Hidden clues.
10. Final solution and reasoning.

The generated investigation must follow a consistent logical structure.

The culprit and the correct solution must be determined before the user starts investigating.

### Step 4: Investigation Dashboard

After generation, the user enters the investigation room.

The interface should contain:

- Case overview.
- Crime scene information.
- Suspect profiles.
- Evidence collection.
- Investigation timeline.
- Investigation notes.
- Final accusation section.

The user should be able to navigate between evidence categories.

### Step 5: Evidence Investigation

The user can explore different types of evidence.

**Evidence Category A: Digital Evidence**
- WhatsApp conversations.
- SMS conversations.
- Emails.
- Call logs.
- Social media messages.

**Evidence Category B: Visual Evidence**
- Crime scene photographs.
- Object photographs.
- Suspect photographs.
- Location photographs.
- Photographs containing hidden clues.

**Evidence Category C: Surveillance Evidence**
- CCTV recordings.
- CCTV screenshots.
- Timestamped surveillance observations.
- Suspicious movements.

**Evidence Category D: Physical Evidence**
- Fingerprints.
- Objects found at the crime scene.
- Documents.
- Weapons or relevant objects.
- Other physical clues.

**Evidence Category E: Witness Statements**
- Statements from suspects.
- Statements from witnesses.
- Contradictory testimonies.

Each evidence item should be individually accessible.

The user should be able to open, inspect, and revisit evidence.

### Step 6: Identify the Culprit

After examining the evidence, the user enters the accusation interface.

The user selects one suspect from the generated suspect list.

Optional functionality:
- Provide a reason for the accusation.
- Select the most important evidence supporting the accusation.

The user clicks **Submit Final Accusation**.

### Step 7: Case Resolution

The system compares the selected suspect with the actual culprit stored in the investigation.

The result screen displays:

- Correct or incorrect verdict.
- Actual culprit.
- Culprit's motive.
- How the crime was committed.
- The complete timeline.
- Important evidence.
- Explanation of hidden clues.
- Why other suspects were innocent.
- Final investigation summary.

The user should not see the culprit information before submitting their accusation.

---

# 5. FUNCTIONAL REQUIREMENTS

## 5.1 Landing Page

Requirements:

- Modern mystery/detective-themed interface.
- Strong visual identity.
- Clear navigation.
- Hero section with CTA.
- Features section.
- How It Works section.
- Responsive layout.
- Smooth transitions and animations.

Primary CTA: Enter the Mystery Room.

## 5.2 Mystery Creation Module

The user must be able to configure an investigation.

| Field | Type | Requirement |
|---|---|---|
| Story description | Textarea | Required |
| Mystery title | Text | Optional |
| Category | Dropdown | Required |
| Difficulty | Dropdown | Required |
| Number of suspects | Select | Required |
| Additional instructions | Textarea | Optional |

Suggested mystery categories:

- Murder Mystery.
- Theft.
- Missing Person.
- Corporate Espionage.
- Cybercrime.
- Kidnapping.
- General Mystery.

Difficulty levels:

**Easy**
- 3 suspects.
- 5–7 evidence items.
- Direct clues.
- Minimal contradictions.

**Medium**
- 4–5 suspects.
- 8–12 evidence items.
- Multiple interconnected clues.
- Some misleading evidence.

**Hard**
- 5–6 suspects.
- 13–18 evidence items.
- Complex timelines.
- Multiple contradictions.
- Subtle clues and misleading information.

These are default generation targets and should be configurable.

## 5.3 AI Mystery Generation Engine

Gemini is responsible for generating the investigation.

The generated investigation must include:

- Unique case ID.
- Case title.
- Case description.
- Crime scene.
- Victim information, when relevant.
- Suspect information.
- Actual culprit.
- Motive.
- Method of committing the crime.
- Timeline.
- Alibis.
- Evidence items.
- Evidence descriptions.
- Hidden clues.
- Contradictions.
- Final explanation.

**Critical requirement:**

All generated evidence must be logically consistent with the actual culprit and final solution.

The AI must not generate evidence that makes the mystery impossible to solve.

The backend must validate the generated JSON before saving it.

## 5.4 Suspect Management

Every suspect must have:

- Suspect ID.
- Name.
- Age.
- Profile photograph.
- Occupation.
- Relationship with the victim or case.
- Personality description.
- Possible motive.
- Alibi.
- Suspicion level.
- Relevant evidence connections.

Important: The suspicion level is a gameplay attribute and must not directly reveal the culprit.

## 5.5 Evidence Management

Every evidence item must contain:

- Evidence ID.
- Evidence title.
- Evidence category.
- Evidence description.
- Evidence type.
- Associated suspect, if applicable.
- Timestamp, if applicable.
- Media URL, if applicable.
- Investigation relevance.
- Hidden clue indicator.

Evidence examples:

**WhatsApp Evidence**

A simulated WhatsApp conversation between two fictional characters.

Must display:
- Sender.
- Receiver.
- Message content.
- Message timestamp.
- Conversation layout.

**Image Evidence**

An AI-generated image or fictional visual asset.

Must display:
- Image.
- Description.
- Evidence title.
- Relevant metadata.

**CCTV Evidence**

For the initial version, CCTV evidence can be represented using:
- CCTV-style generated images.
- Timestamp overlays.
- Camera identifiers.
- Location labels.
- Event descriptions.

Actual AI-generated video should be treated as an optional future capability rather than a requirement for the initial MVP.

**Physical Evidence**

Display:
- Object photograph or illustration.
- Discovery location.
- Description.
- Relevant forensic observations.

## 5.6 Investigation Dashboard

The investigation dashboard should contain the following sections:

1. Case Overview.
2. Suspects.
3. Evidence Locker.
4. Timeline.
5. Detective Notes.
6. Final Accusation.

The user should be able to switch between sections without losing investigation progress.

The evidence locker should support category filtering.

Users should be able to mark evidence as important.

## 5.7 Final Accusation Module

Requirements:

- Display all suspects.
- Allow only one final culprit selection.
- Allow optional reasoning.
- Require confirmation before submission.
- Prevent duplicate final submissions.
- Store the user's accusation.
- Compare the selected suspect with the actual culprit on the backend.

The actual culprit must never be exposed through frontend API responses before the accusation.

## 5.8 Result Module

The result screen must display:

- Verdict.
- Selected suspect.
- Actual culprit.
- Explanation.
- Crime reconstruction.
- Evidence supporting the solution.
- Important contradictions.
- Final case summary.

The result must be generated from the stored investigation solution, not from a new independent AI guess.

---

# 6. AI INTEGRATION – GOOGLE GEMINI

## 6.1 AI Provider

Google Gemini API.

All Gemini API requests must be made through the backend.

The API key must be stored in environment variables and must never be exposed in frontend code.

## 6.2 AI Responsibilities

Gemini will handle:

1. Story interpretation.
2. Mystery creation.
3. Suspect generation.
4. Motive generation.
5. Alibi generation.
6. Evidence generation.
7. Hidden clue generation.
8. Timeline generation.
9. Logical consistency analysis.
10. Optional evidence descriptions and media prompts.

## 6.3 Mystery Generation Pipeline

The backend should implement the following pipeline:

**Stage 1 – Input Processing**

Receive the user's story and configuration.

Validate:
- Story length.
- Category.
- Difficulty.
- Number of suspects.
- Required fields.

**Stage 2 – Investigation Planning**

Send the scenario to Gemini.

Generate:
- Crime structure.
- Culprit.
- Motive.
- Method.
- Timeline.
- Suspects.

**Stage 3 – Evidence Generation**

Generate evidence based on the established investigation.

Every evidence item must be linked to the underlying case logic.

**Stage 4 – Consistency Validation**

Validate:
- Whether the timeline is possible.
- Whether alibis are consistent.
- Whether the evidence supports the final solution.
- Whether the culprit can logically be identified.
- Whether there are enough clues to distinguish the culprit from other suspects.

If validation fails, request a correction from Gemini or retry generation within a controlled retry limit.

**Stage 5 – Final Case Creation**

Store the validated investigation in MongoDB.

Return only the public investigation data to the frontend.

## 6.4 AI Prompt Design

Use structured prompts and require JSON output.

The system prompt should establish the following role:

"You are an expert fictional mystery designer and detective game architect. Your responsibility is to generate immersive, logically consistent, solvable fictional investigations. Every investigation must contain one predetermined culprit, believable suspects, interconnected evidence, realistic timelines, and a complete solution. All people, messages, photographs, and events must be fictional. Do not create contradictory evidence that makes the case unsolvable."

The generation prompt must instruct Gemini to:

- Follow the user's scenario.
- Respect the selected difficulty.
- Generate the requested number of suspects.
- Create one actual culprit.
- Give every suspect a believable motive or reason for suspicion.
- Generate evidence that supports deduction.
- Include misleading but explainable clues.
- Make sure at least one combination of evidence points toward the actual culprit.
- Ensure the final explanation accounts for every important clue.
- Return structured JSON matching the backend schema.

## 6.5 Structured AI Output

The backend should expect a response conceptually following this structure:

{
  "case": {
    "title": "The Midnight Mystery",
    "description": "Case introduction",
    "category": "murder",
    "difficulty": "medium"
  },
  "crime": {
    "victim": {},
    "location": "Mansion",
    "method": "Fictional crime method"
  },
  "suspects": [],
  "culprit": {
    "suspectId": "S03",
    "motive": "Personal motive",
    "method": "Explanation"
  },
  "timeline": [],
  "evidence": [],
  "solution": {
    "explanation": "Complete solution",
    "importantClues": [],
    "contradictions": []
  }
}

This is an illustrative structure. The final implementation must define and enforce a complete schema using a JSON validation library such as Zod.

---

# 7. TECHNICAL ARCHITECTURE

## 7.1 Technology Stack

**Frontend**
- React.js.
- Vite.
- JavaScript or TypeScript.
- Tailwind CSS.
- React Router.
- Axios.
- Lucide React icons.

**Backend**
- Node.js.
- Express.js.
- Gemini API SDK.
- Zod for request and AI response validation.
- Multer if file uploads are introduced.

**Database**
- MongoDB.
- Mongoose ODM.

**AI**
- Google Gemini API.

**Media Storage**
- Cloudinary or another compatible media storage provider.

**Deployment**
- Frontend: Vercel.
- Backend: Render or another Node.js-compatible hosting provider.
- Database: MongoDB Atlas.

## 7.2 High-Level Architecture

User
↓
React Frontend
↓
Express REST API
↓
Request Validation
↓
Mystery Generation Service
↓
Gemini API
↓
JSON Parsing and Validation
↓
Investigation Consistency Validation
↓
MongoDB
↓
Public Case Data Returned to React

The frontend must never communicate directly with Gemini.

## 7.3 Suggested Project Structure

ai-mystery-room/

frontend/
- public/
- src/
  - assets/
  - components/
    - common/
    - layout/
    - mystery/
    - evidence/
    - suspects/
  - pages/
    - Home.jsx
    - CreateMystery.jsx
    - Investigation.jsx
    - Results.jsx
  - services/
    - api.js
  - hooks/
  - context/
  - utils/
  - App.jsx
  - main.jsx

backend/
- src/
  - config/
    - db.js
    - gemini.js
  - controllers/
    - mysteryController.js
    - evidenceController.js
    - accusationController.js
  - models/
    - Mystery.js
    - InvestigationSession.js
  - routes/
    - mysteryRoutes.js
    - accusationRoutes.js
  - services/
    - geminiService.js
    - mysteryGenerator.js
    - evidenceGenerator.js
    - validationService.js
  - middleware/
    - errorHandler.js
    - validateRequest.js
    - rateLimiter.js
  - validators/
    - mysterySchema.js
  - utils/
  - app.js
  - server.js

.env
package.json
README.md

---

# 8. DATABASE DESIGN

MongoDB should store generated investigations and user progress.

## 8.1 Mystery Collection

Suggested fields:

- _id
- title
- originalScenario
- category
- difficulty
- caseDescription
- crimeDetails
- suspects
- evidence
- timeline
- solution
- status
- createdAt
- updatedAt

The `solution` field must remain private to the backend until the user submits their final accusation.

## 8.2 Investigation Session Collection

Suggested fields:

- _id
- mysteryId
- sessionId
- viewedEvidenceIds
- bookmarkedEvidenceIds
- detectiveNotes
- selectedSuspectId
- accusationReason
- isSubmitted
- isCompleted
- result
- startedAt
- completedAt

For the MVP, guest sessions can use anonymous session IDs. Authentication can be added later.

## 8.3 Evidence Object

Each evidence object should contain:

- evidenceId
- title
- category
- type
- description
- mediaUrl
- timestamp
- associatedSuspectIds
- relevance
- hiddenClue
- metadata

---

# 9. API SPECIFICATION

All APIs should use the `/api/v1` prefix.

## 9.1 Generate Mystery

POST `/api/v1/mysteries/generate`

Request:

{
  "scenario": "A businessman disappears from his mansion...",
  "title": "Optional title",
  "category": "missing-person",
  "difficulty": "medium",
  "suspectCount": 4
}

Response:

{
  "success": true,
  "mysteryId": "CASE123",
  "message": "Mystery generated successfully",
  "case": {}
}

The returned case must contain only public information.

## 9.2 Get Mystery

GET `/api/v1/mysteries/:id`

Returns:
- Case overview.
- Suspects.
- Public evidence.
- Timeline.
- Investigation metadata.

Must not return the culprit or solution.

## 9.3 Get Evidence

GET `/api/v1/mysteries/:id/evidence`

Returns the evidence available for the specified mystery.

Optional filters:
- category.
- evidence type.
- suspect ID.

## 9.4 Update Investigation Progress

PATCH `/api/v1/sessions/:sessionId`

Updates:
- Viewed evidence.
- Bookmarked evidence.
- Detective notes.

## 9.5 Submit Accusation

POST `/api/v1/mysteries/:id/accusation`

Request:

{
  "sessionId": "SESSION123",
  "selectedSuspectId": "S03",
  "reason": "Optional reasoning"
}

Response:

{
  "success": true,
  "correct": true,
  "result": {}
}

Only after this request should the backend return the actual culprit and solution.

## 9.6 Get Final Result

GET `/api/v1/mysteries/:id/result/:sessionId`

Returns the completed investigation result.

The API must verify that the session has submitted an accusation before returning the solution.

---

# 10. UI/UX DESIGN SPECIFICATION

## 10.1 Design Direction

The website should have a premium detective investigation atmosphere.

Visual references:
- Dark detective investigation rooms.
- Crime investigation boards.
- Confidential case files.
- Surveillance interfaces.
- Digital forensic dashboards.

## 10.2 Theme

Primary theme: Dark.

Suggested colors:

- Background: #0B0D12
- Secondary Background: #151922
- Card Background: #1B202B
- Primary Accent: #C83D4D
- Secondary Accent: #D6A85F
- Primary Text: #F5F5F5
- Secondary Text: #9CA3AF
- Border: #303744

Use colors consistently.

## 10.3 Typography

Suggested fonts:
- Headings: Space Grotesk.
- Body: Inter.
- Evidence metadata: JetBrains Mono.

## 10.4 Homepage Layout

Sections:

1. Navigation bar.
2. Hero section.
3. How it works.
4. Features.
5. Example investigation.
6. Call to action.
7. Footer.

Hero heading suggestion:

"Every Mystery Has a Secret. Can You Find It?"

Supporting text:

"Create your own mystery. Investigate the evidence. Uncover the truth. Enter a world where AI creates the crime, but you solve it."

CTA: Start Investigating.

## 10.5 Investigation Dashboard Layout

Desktop:

- Left sidebar: Case navigation.
- Main area: Selected investigation content.
- Optional right panel: Investigation details and notes.

Mobile:

- Responsive navigation.
- Collapsible evidence categories.
- Stacked suspect and evidence cards.
- Full-screen evidence viewer.

## 10.6 Evidence Viewer

Each evidence type should have a distinct presentation.

WhatsApp:
- Chat-style interface.
- Message bubbles.
- Sender names.
- Timestamps.

Images:
- Image viewer.
- Zoom capability.
- Description and metadata.

CCTV:
- Surveillance-style frame.
- Camera ID.
- Timestamp overlay.
- Playback interface only when an actual clip exists.

Documents:
- Document viewer.
- Highlighted relevant information.

All evidence must feel like part of a unified investigation environment.

---

# 11. SECURITY AND DATA PROTECTION

1. Gemini API keys must only exist on the backend.
2. Never expose the actual culprit through public endpoints.
3. Validate all user input.
4. Validate all AI-generated JSON.
5. Use rate limiting on mystery generation endpoints.
6. Set reasonable input length limits.
7. Prevent duplicate accusation submissions.
8. Sanitize user-generated content before rendering.
9. Avoid executing or trusting arbitrary AI-generated HTML or scripts.
10. Restrict access to private case solutions.
11. Apply appropriate CORS configuration.
12. Keep database credentials in environment variables.

All cases, people, messages, images, and recordings must be clearly fictional. Do not present generated evidence as authentic real-world forensic material.

---

# 12. ERROR HANDLING

The system must handle:

| Error | Expected Behavior |
|---|---|
| Empty scenario | Display validation error |
| Invalid configuration | Reject request |
| Gemini API failure | Show retry option |
| Invalid Gemini JSON | Attempt controlled repair/retry |
| Database failure | Display server error |
| Missing mystery ID | Return 404 |
| Invalid suspect selection | Reject accusation |
| Duplicate accusation | Prevent resubmission |
| Network failure | Show retry option |
| Media generation failure | Use fallback evidence presentation |

The application must not silently fail or create partially generated investigations that cannot be solved.

---

# 13. NON-FUNCTIONAL REQUIREMENTS

**Performance**
- Fast initial page load.
- Lazy-load evidence images.
- Avoid unnecessary API requests.
- Display generation progress.
- Handle long-running Gemini requests appropriately.

**Scalability**
- Keep AI generation logic separate from controllers.
- Use reusable services.
- Keep database models modular.
- Make media storage independent of local server storage.

**Maintainability**
- Use reusable React components.
- Maintain clear frontend/backend separation.
- Use consistent API response structures.
- Keep AI prompts in dedicated files.
- Validate data using shared schemas where practical.

**Responsiveness**
- Desktop, tablet, and mobile support.

**Reliability**
- Preserve investigation progress.
- Prevent accidental loss of user notes.
- Handle failed generation and retry operations safely.

---

# 14. MVP SCOPE

The first version should focus on completing one fully functional investigation experience.

## Must Have – Version 1

1. Landing page.
2. Mystery creation form.
3. Gemini-powered story generation.
4. Structured suspect generation.
5. One predetermined culprit.
6. AI-generated investigation evidence.
7. WhatsApp conversation evidence.
8. AI-generated image evidence where supported.
9. CCTV-style evidence using generated frames and descriptions.
10. Interactive evidence locker.
11. Suspect profiles.
12. Investigation timeline.
13. Final culprit selection.
14. Answer validation.
15. Complete solution reveal.
16. MongoDB persistence.
17. Responsive UI.

## Future Enhancements – Version 2

1. User authentication.
2. User profiles.
3. Investigation history.
4. Leaderboard.
5. Investigation scoring system.
6. Timer-based challenges.
7. Real AI-generated video evidence.
8. Voice-based interrogation.
9. Interactive AI suspect interrogation.
10. Multiplayer investigations.
11. User-created public mystery challenges.
12. Difficulty progression and achievements.

Do not prioritize Version 2 features during the initial development.

---

# 15. GAMEPLAY AND SCORING

The first version should have a simple scoring system.

Suggested scoring:

- Correct culprit identification: 100 points.
- Correct accusation with strong evidence reasoning: Optional bonus.
- Incorrect culprit identification: 0 points.

The result screen should prioritize explaining the investigation rather than only displaying a score.

A timer and detailed scoring system can be added later.

---

# 16. IMPORTANT BUSINESS LOGIC AND DEVELOPMENT RULES

These rules are mandatory.

### Rule 1: One predetermined culprit

Every mystery must have exactly one actual culprit.

### Rule 2: Evidence must support the solution

The generated evidence must be sufficient to logically identify the culprit.

### Rule 3: No premature solution exposure

The frontend must never receive the actual culprit or solution before final accusation.

### Rule 4: No independent answer generation

The final answer must be checked against the original stored investigation, not a fresh Gemini response.

### Rule 5: Consistent investigation

All messages, photographs, CCTV events, suspect alibis, and timelines must belong to the same fictional story.

### Rule 6: Evidence must be explorable

Users should be able to open and inspect every evidence item.

### Rule 7: Persistent progress

Users should not lose their progress when refreshing the page.

### Rule 8: Controlled AI generation

The application must validate and sanitize AI output before using it.

### Rule 9: Avoid fake functionality

Do not implement buttons that look functional but have no actual behavior.

### Rule 10: Graceful fallback

If image generation or media storage fails, the investigation must still be playable using text-based evidence and available fallback assets.

---

# 17. ACCEPTANCE CRITERIA

The project is considered MVP-complete when all the following conditions are satisfied.

- [ ] User can open the homepage.
- [ ] User can create a mystery using a custom scenario.
- [ ] User can choose category and difficulty.
- [ ] Gemini generates a structured mystery.
- [ ] Generated mystery contains the requested number of suspects.
- [ ] Exactly one culprit is established.
- [ ] Evidence is logically connected to the investigation.
- [ ] WhatsApp evidence is displayed in a chat interface.
- [ ] Image evidence is viewable.
- [ ] CCTV-style evidence is accessible.
- [ ] User can navigate between suspects and evidence.
- [ ] User can mark evidence as important.
- [ ] User can maintain investigation notes.
- [ ] Investigation progress persists after refresh.
- [ ] User can submit a final accusation.
- [ ] Backend validates the accusation.
- [ ] The actual culprit is not exposed before submission.
- [ ] Result screen displays the correct solution.
- [ ] Error handling works.
- [ ] Website works on desktop and mobile.
- [ ] Gemini API key is never exposed in the frontend.

---

# 18. CODEX DEVELOPMENT INSTRUCTIONS

This document is the single source of truth for implementation.

Codex must follow these instructions throughout development.

## Development Approach

1. Read and understand the complete specification before writing code.
2. Inspect the existing repository before creating or modifying files.
3. Do not unnecessarily overwrite existing working implementations.
4. Establish the frontend and backend architecture.
5. Implement the database models.
6. Implement Gemini integration.
7. Implement mystery generation and validation.
8. Implement the investigation dashboard.
9. Implement evidence presentation.
10. Implement accusation and result modules.
11. Test the complete user journey.
12. Fix errors before declaring a feature complete.

## Coding Standards

- Write modular and reusable code.
- Follow consistent naming conventions.
- Avoid unnecessarily large components.
- Keep business logic out of React components.
- Separate API calls from UI logic.
- Use environment variables.
- Add appropriate error handling.
- Avoid hardcoded mystery data in production functionality.
- Avoid exposing private investigation data.
- Maintain a clean and understandable project structure.

## AI Integration Rules

- Use Gemini through backend services.
- Keep prompts in dedicated files.
- Request structured JSON.
- Validate AI responses before persistence.
- Implement retry and failure handling.
- Keep generated evidence consistent with the case.
- Do not rely on Gemini to determine the final answer again during accusation.

## UI Implementation Rules

- Follow the dark detective-themed design system.
- Maintain consistent spacing and typography.
- Use reusable components.
- Make the interface responsive.
- Add appropriate loading, empty, success, and error states.
- Ensure every interactive control has working functionality.

## Testing Requirements

Test the following complete flow:

Create Mystery
→ Generate Investigation
→ View Case
→ Explore Suspects
→ Open Evidence
→ Analyze Timeline
→ Select Culprit
→ Submit Accusation
→ Reveal Solution.

Do not mark the project complete until this complete flow works.

## Scope Control

Do not introduce unrelated features or unnecessary complexity.

If a technical implementation decision is not explicitly specified, choose the simplest maintainable approach that aligns with the product vision.

If a decision would materially change the product experience, security, or architecture, document it before implementation rather than silently changing the requirements.

---

# 19. FINAL PRODUCT DEFINITION

AI Mystery Room is an AI-powered interactive detective game built using the MERN stack and Google Gemini.

Users bring their own mystery ideas. The AI transforms those ideas into complete fictional investigations with suspects, motives, evidence, hidden clues, and a predetermined culprit.

The user explores the evidence, investigates contradictions, and makes the final accusation.

The platform then reveals the truth and explains how all the clues connect.

**The core product experience is simple:**

"You create the mystery. AI creates the investigation. You uncover the culprit."

---

**END OF SPECIFICATION**

Document Version: 1.0  
Project: AI Mystery Room  
Status: Ready for Development Planning