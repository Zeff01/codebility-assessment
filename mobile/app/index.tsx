// app/index.tsx
import { Redirect } from 'expo-router';

export default function Index() {
  // Always start on /login
  return <Redirect href="/login" />;
}
