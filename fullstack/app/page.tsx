import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Lock,
  Database,
  Code2,
  Wind,
  Layout,
  Server,
  FileCode,
  Package,
  Shield,
  LucideIcon,
} from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'CRUD Operations',
    description: 'Create, read, update, and delete todos with a clean interface',
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'Credential-based authentication with protected routes',
  },
  {
    icon: Database,
    title: 'Persistent Storage',
    description: 'Data persists across sessions using json-server backend',
  },
] as const;

interface TechItem {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  color: string;
}

const techStack: TechItem[] = [
  {
    icon: Code2,
    name: 'Next.js 16',
    subtitle: 'React 19',
    color: 'text-blue-500',
  },
  { icon: Wind, name: 'Tailwind', subtitle: 'CSS v4', color: 'text-cyan-500' },
  {
    icon: Layout,
    name: 'shadcn/ui',
    subtitle: 'Components',
    color: 'text-orange-500',
  },
  {
    icon: Shield,
    name: 'NextAuth.js',
    subtitle: 'Authentication',
    color: 'text-green-500',
  },
  {
    icon: Server,
    name: 'json-server',
    subtitle: 'Backend',
    color: 'text-purple-500',
  },
  {
    icon: FileCode,
    name: 'TypeScript',
    subtitle: 'Language',
    color: 'text-blue-600',
  },
  {
    icon: Package,
    name: 'pnpm',
    subtitle: 'Package Manager',
    color: 'text-red-500',
  },
  {
    icon: Lock,
    name: 'bcryptjs',
    subtitle: 'Security',
    color: 'text-amber-500',
  },
];

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <main className="w-full max-w-4xl space-y-8 py-8 sm:space-y-12 sm:py-12">
        {/* Hero Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl sm:text-5xl">Todo App</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
            A full-stack todo application with authentication, protected routes, and persistent data
            storage.
          </p>
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto" variant="default">
              <Link href="/sign-in">Get Started</Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto" variant="outline">
              <Link href="/sign-up">Create User</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <CardHeader>
                <feature.icon className="text-primary mb-2 h-8 w-8" />
                <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Tech Stack Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Tech Stack</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Built with modern technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-card hover:bg-accent/50 group flex cursor-default flex-col items-center justify-center rounded-lg border p-4 transition-colors"
                >
                  <tech.icon
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${tech.color} mb-2 transition-transform group-hover:scale-110`}
                  />
                  <span className="text-center text-xs font-semibold sm:text-sm">{tech.name}</span>
                  <span className="text-muted-foreground text-center text-[10px] sm:text-xs">
                    {tech.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
