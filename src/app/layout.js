import './globals.css'

export const metadata = {
  title: 'Ahnaf Keenan Ardhito',
  description: 'Portfolio of Ahnaf Keenan Ardhito — Computer Science Specialist at the University of Toronto',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
