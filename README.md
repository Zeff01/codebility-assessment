# Fullstack Todo Application

A modern, production-ready todo application built with Next.js 16, NextAuth, Prisma (SQLite), and Redux Toolkit.

## 🚀 Features

- **Authentication**: Secure user authentication with NextAuth.js
- **Clean Architecture**: Modular, reusable components and services
- **State Management**: Redux Toolkit with proper type safety
- **Database**: SQLite with Prisma ORM
- **Modern UI**: Tailwind CSS with dark mode support
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Mobile-first design

## 📦 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **React**: 19.2.3
- **Authentication**: NextAuth.js v5 (beta)
- **Database**: SQLite with Prisma 7.3.0
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ralphjenrey/codebility-assessment.git
   cd codebility-assessment/fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your values:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key-change-in-production"
   NEXT_PUBLIC_APP_NAME="Todo App"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
fullstack/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   └── dashboard/      # Protected dashboard
│   ├── components/          # React components
│   │   ├── auth/           # Authentication components
│   │   ├── layout/         # Layout components
│   │   ├── providers/      # Context providers
│   │   ├── todo/           # Todo-specific components
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utility libraries
│   │   ├── auth/           # NextAuth configuration
│   │   └── db/             # Prisma client
│   ├── store/              # Redux store
│   │   └── features/       # Redux slices
│   └── types/              # TypeScript type definitions
├── .env                    # Environment variables
└── package.json
```

## 📝 Features Overview

### Authentication
- Email/password authentication
- Protected routes with middleware
- Session management
- Auto-login after registration

### Todo Management
- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos (All, Active, Completed)
- Real-time statistics
- Optimistic UI updates

### UI/UX
- Clean, modern design
- Dark mode support
- Loading states
- Error handling with toast notifications
- Responsive layout
- Smooth animations

## 🧪 Testing

To test the application:

1. **Sign Up**: Create a new account at `/auth/signup`
2. **Sign In**: Log in with your credentials
3. **Create Todo**: Click "Add Todo" button
4. **Manage Todos**: Edit, complete, or delete todos
5. **Filter**: Use filter buttons to view different todo states

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite database file path | `file:./dev.db` |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret for NextAuth | Required |
| `NEXT_PUBLIC_APP_NAME` | Application name | `Todo App` |
| `NEXT_PUBLIC_APP_URL` | Public application URL | `http://localhost:3000` |

## 🏛️ Clean Architecture

The application follows clean architecture principles:

- **Separation of Concerns**: Components, logic, and data access are separated
- **Reusable Components**: UI components are modular and reusable
- **Type Safety**: Full TypeScript coverage
- **Modular Store**: Redux slices are separated by domain
- **Environment Configuration**: All static values in `.env`

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based sessions
- Protected API routes
- CSRF protection
- SQL injection prevention (Prisma ORM)

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Accessible UI elements

## 🤝 Contributing

This is an assessment project for Codebility. For the original repository, visit:
[https://github.com/Zeff01/codebility-assessment](https://github.com/Zeff01/codebility-assessment)

## 👤 Author

**Ralph Jenrey**
- GitHub: [@ralphjenrey](https://github.com/ralphjenrey)

## 📄 License

This project is created for assessment purposes.

## 🙏 Acknowledgments

- Codebility for the assessment opportunity
- Next.js team for the amazing framework
- Vercel for hosting solutions
- Prisma team for the excellent ORM
