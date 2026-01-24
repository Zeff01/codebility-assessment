Todo Application (Next.js + NextAuth + JSON Persistence)

A simple, professional Todo application built with Next.js App Router,
NextAuth.js for authentication, and JSON file storage for persistent todos.

This project is designed as a fullstack assessment for 3-5 years developers.

Features:

- User authentication with NextAuth.js (CredentialsProvider)
- Sign in / Sign out functionality
- Protected routes — only authenticated users can access the Todo list
- Create, read, update, delete (CRUD) todos
- Persistent storage using data/todos.json
- Professional, responsive UI using Tailwind CSS
- Loading & empty states

Getting Started:

1. Clone the repository:
   git clone https://github.com/YOUR-USERNAME/codebility-assessment.git
   cd codebility-assessment/fullstack

2. Install dependencies:
   npm install
   (or pnpm install)

3. Set up environment variables:
   Create a .env.local file in the root of the fullstack project:

   NEXTAUTH_SECRET=your-random-secret
   NEXTAUTH_URL=http://localhost:3000

   Generate a strong secret:
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

4. Create the data folder:
   mkdir data
   echo "[]" > data/todos.json

5. Run the development server:
   npm run dev

Open http://localhost:3000 in your browser.

Test User Credentials:

Username: test
Password: 1234

Project Structure:

fullstack/
├─ app/
│ ├─ page.tsx # Home / Todo page (protected)
│ ├─ auth/signin/page.tsx # Sign-in page
│ └─ api/todos/route.ts # API routes for CRUD
│ └─ api/auth/[...nextauth]/route.ts # NextAuth credentials
├─ data/
│ └─ todos.json # JSON storage for todos
├─ .env.local # Environment variables
├─ package.json
└─ tailwind.config.js # Tailwind configuration

How It Works:

1. Authentication
   - NextAuth with CredentialsProvider checks the username/password.
   - Only logged-in users can access /.
   - JWT sessions are stored securely using NEXTAUTH_SECRET.

2. Todo API (/api/todos)
   - GET → fetch all todos
   - POST → add a new todo
   - PUT → update todo completion status
   - DELETE → remove a todo
   - Data is persisted in data/todos.json.

3. UI
   - Modern, professional, responsive interface.
   - Supports adding, completing, and deleting todos.
   - Loading states and empty lists handled gracefully.

Dependencies:

- Next.js
- NextAuth.js
- Tailwind CSS
- Node.js fs for JSON persistence

Next Steps / Improvements:

- Connect to a real database (SQLite / PostgreSQL) instead of JSON.
- Add user registration and multiple users.
- Add todo due dates, priorities, and categories.
- Improve error handling and loading indicators.

This project is ready to run out-of-the-box with the credentials:
Username: test
Password: 1234
