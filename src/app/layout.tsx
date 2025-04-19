import './globals.css'
import Navbar from '../components/layout/nav-bar'

export const metadata = {
  title: 'HAICK 2025',
  description: 'Event landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
