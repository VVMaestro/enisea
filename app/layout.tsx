import React, {ReactNode} from 'react';
import type {Metadata} from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'Enisea',
  description: 'Eniseas app',
  
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html data-theme="business" lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
    </head>
      <body>
        {children}
      </body>
    </html>
  )
}
