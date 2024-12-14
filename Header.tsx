import { Frame } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex items-center">
        <Frame className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Share Tracking Program</h1>
      </div>
    </header>
  )
}

