# TechQ19
# Tech Quiz App

A simple MERN‐stack quiz application that lets users test their knowledge with 10 random tech questions. Includes both **component tests** (via Cypress + React 18) and **end-to-end tests** (via Cypress).

## 🔗 Live Demo & Walkthrough Video

- **Walkthrough Video:** _((https://app.screencastify.com/v3/watch/WVZGy6HCiMTW6GCGEaIL))_  
  Shows all tests passing and starting both client and server.

---

## 📂 Repository Structure

Develop/
├── client/ # React / Vite front end
├── server/ # Node / Express / Mongoose API
├── cypress/ # Cypress tests & config
│ ├── component/ # Component specs
│ ├── e2e/ # End-to-end specs
│ ├── fixtures/ # JSON fixtures
│ ├── support/ # Cypress support files & templates
│ └── tsconfig.json # Cypress TypeScript config
├── cypress.config.ts # Cypress root config (E2E + component)
├── .env.example # Example environment variables
├── package.json # Root scripts & deps
└── README.md

yaml
Copy
Edit

---

## ⚙️ Prerequisites

- **Node.js** v16+ & **npm**  
- A **MongoDB Atlas** cluster (no local install required)

---

## 🚀 Getting Started

1. **Clone this repo**  
   ```bash
   git clone <your-repo-url>
   cd Develop
Install dependencies


npm install
Configure environment

Copy .env.example to .env (in server/)

Fill in your MongoDB Atlas URI:

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/techquizdb?retryWrites=true&w=majority
PORT=3001
Seed the database


npm run seed
Start the API server


npm run server:dev
# Logs: “Database connected. API server running on port 3001!”
Start the client


npm run client:dev
# Opens at http://127.0.0.1:3000
✅ Running Tests
End-to-End Tests
Headlessly (runs both component & E2E):


npm run test
Interactively (E2E only):


npx cypress open
# Select “E2E Testing” → quiz.cy.ts
Component Tests
Interactively:


npx cypress open --component
# Select “Component Testing” → Quiz.cy.tsx
📝 Test Coverage
Component Tests (cypress/component/Quiz.cy.tsx):

Stubs /api/questions/random

Verifies “Start Quiz” button

Verifies first question shows on click

End-to-End Tests (cypress/e2e/quiz.cy.ts):

Stubs the full quiz fetch (GET /api/questions/random)

Walks through all 10 questions

Asserts “Quiz Completed” and score display

Asserts restart flow via “Take New Quiz”

