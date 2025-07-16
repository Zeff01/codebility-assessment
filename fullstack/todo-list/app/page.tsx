import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function Home() {
  const cookieStore = await cookies()
  const authToken = cookieStore.get("auth-token")

  if (authToken) {
    redirect("/todos")
  } else {
    redirect("/auth/signin")
  }
}
