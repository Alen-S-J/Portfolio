import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alan Sabu John | Data Analyst × AI/ML Engineer',
  description: 'Portfolio of Alan Sabu John - Expert Data Analyst and AI/ML Engineer specializing in RAG systems, LLMs, computer vision, and data analytics. Building intelligent AI solutions and transforming data into actionable insights.',
  keywords: ['Data Analyst', 'AI Engineer', 'ML Engineer', 'RAG Systems', 'LLM', 'Machine Learning', 'Data Science', 'Python', 'TensorFlow', 'PyTorch'],
  authors: [{ name: 'Alan Sabu John' }],
  creator: 'Alan Sabu John',
  openGraph: {
    title: 'Alan Sabu John | Data Analyst × AI/ML Engineer',
    description: 'Expert Data Analyst and AI/ML Engineer specializing in RAG systems, LLMs, and data analytics',
    url: 'https://alansabujohn.com',
    siteName: 'Alan Sabu John Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alan Sabu John | Data Analyst × AI/ML Engineer',
    description: 'Expert Data Analyst and AI/ML Engineer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Alan Sabu John',
              jobTitle: 'Data Analyst & AI/ML Engineer',
              url: 'https://alansabujohn.com',
              sameAs: [
                'https://www.linkedin.com/in/alan-sabu-john/',
                'https://github.com/Alen-S-J',
                'https://medium.com/@alenxsj',
              ],
              knowsAbout: [
                'Data Analytics',
                'Machine Learning',
                'Artificial Intelligence',
                'RAG Systems',
                'LLMs',
                'Python',
                'TensorFlow',
                'PyTorch',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

