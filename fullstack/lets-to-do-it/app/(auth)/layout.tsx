export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-12">
      {children}
    </div>
  )
}