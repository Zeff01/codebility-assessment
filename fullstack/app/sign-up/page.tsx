import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';
import { SignUpForm } from '@/components/auth/sign-up-form';
import Link from 'next/link';

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    const { callbackUrl } = await searchParams;
    redirect(callbackUrl || '/todos');
  }

  const { callbackUrl } = await searchParams;

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 sm:space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Create Account</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Sign up to get started with your todo list
          </p>
        </div>
        <div className="bg-card rounded-lg border p-6 shadow-sm sm:p-8">
          <SignUpForm callbackUrl={callbackUrl || '/todos'} />
        </div>
        <p className="text-muted-foreground text-center text-sm">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
