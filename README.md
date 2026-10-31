# AI Mystery Room

An AI-powered fictional detective game. Players provide a case premise, inspect a generated investigation and submit one final accusation. The server keeps the culprit and solution private until that accusation.

## Stack

- React, Vite and React Router
- Express, MongoDB and Mongoose
- Google Gemini API for case generation
- Zod validation for user input and generated cases

## Run locally

1. Install Node.js 20 or newer and MongoDB (local or Atlas).
2. Copy `.env.example` to `.env` and set `MONGODB_URI` and `GEMINI_API_KEY`.
3. Install dependencies with `npm install`.
4. Start the client and API with `npm run dev`.
5. Open `http://localhost:5173`.

The API runs on port 4000 by default. Vite proxies `/api` requests to it. Gemini keys are read only by the backend. Without a Gemini key, case generation returns a setup message; it does not silently substitute a hardcoded case.

## Production build

Run `npm run build` to create the Vite bundle in `dist`. Set `CLIENT_ORIGIN` to the deployed client origin and configure `MONGODB_URI`, `GEMINI_API_KEY`, and optionally `GEMINI_MODEL` on the server. Serve `dist` with a static host and run the API separately.

## API

All application endpoints use `/api/v1`:

- `POST /mysteries/generate` — validate input and generate a case.
- `GET /mysteries/:id` — public case data, without the culprit or solution.
- `GET /mysteries/:id/evidence` — evidence, optionally filtered by category or suspect.
- `PATCH /sessions/:sessionId` — save viewed clues, bookmarks, and notes.
- `POST /mysteries/:id/accusation` — submit the one final accusation and reveal the stored solution.
- `GET /mysteries/:id/result/:sessionId` — retrieve a result after submission.

Cases and progress are stored in MongoDB. Guest session IDs are random UUIDs kept in the browser's local storage.
