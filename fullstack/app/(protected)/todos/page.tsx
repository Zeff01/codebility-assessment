import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib';
import { TodosClient } from './todos-client';

export default async function TodosPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in?callbackUrl=' + encodeURIComponent('/todos'));
  }

  return <TodosClient user={session.user} />;
}
