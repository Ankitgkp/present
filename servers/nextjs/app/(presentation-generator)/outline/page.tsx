import React from 'react'
import Header from '@/app/(presentation-generator)/(dashboard)/dashboard/components/Header'
import { Metadata } from 'next'
import OutlinePage from './components/OutlinePage'
export const metadata: Metadata = {
  title: "Outline Presentation",
  description: "Customize and organize your presentation outline. Drag and drop slides, add charts, and generate your presentation with ease.",
  alternates: {
    canonical: "https://presenton.ai/create"
  },
  keywords: [
    "presentation generator",
    "AI presentations",
    "data visualization",
    "automatic presentation maker",
    "professional slides",
    "data-driven presentations",
    "document to presentation",
    "presentation automation",
    "smart presentation tool",
    "business presentations"
  ]
}
const page = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-b from-[#edf4ff] via-[#f5f9ff] to-[#fbfdff]'>
      <Header />
      <div
        className='pointer-events-none fixed z-0 -top-24 left-1/2 -translate-x-1/2 w-[92%] h-[420px]'
        style={{
          borderRadius: '999px',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.00) 100%)',
        }}
      />
      <OutlinePage />
    </div>
  )
}

export default page
