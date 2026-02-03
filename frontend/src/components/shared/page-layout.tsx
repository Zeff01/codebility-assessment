import { ReactNode } from "react"

interface PageLayoutProps {
  title: string
  children: ReactNode
}
export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-10 lg:p-6 space-y-4 lg:space-y-6">
      <h1 className="text-3xl lg:text-4xl font-medium xl:px-6">{title}</h1>
      {children}
    </div>
  )
}
