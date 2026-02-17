"use client"
import { useRouter } from "next/navigation";

export function ButtonToHome() {
  const router = useRouter();
  const backButtonClick = (e) => {
    e.preventDefault()
    router.push('/')
  }
  
  return (
    <button
      className='py-2 px-4 mx-auto block cursor-pointer'
      style={{
        border: '1px solid gray'
      }}
      onClick={backButtonClick}
    >Return to Homepage</button>
  )
}
