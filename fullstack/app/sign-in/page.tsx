import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';
import { SignInForm } from '@/components/auth/sign-in-form';
import Link from 'next/link';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    const { callbackUrl } = await searchParams;
    redirect(callbackUrl || '/todos');
  }

  const { callbackUrl, error } = await searchParams;

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Welcome</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Sign in to access your todo list
          </p>
        </div>
        <div className="bg-card rounded-lg border p-6 shadow-sm sm:p-8">
          <SignInForm callbackUrl={callbackUrl || '/todos'} error={error} />
        </div>
        <p className="text-muted-foreground text-center text-sm">
          Do not have an account?{' '}
          <Link href="/sign-up" className="text-primary font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
