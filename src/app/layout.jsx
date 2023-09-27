import './globals.css'

export const metadata = {
  title: 'Lead Manager',
  description: 'Manages Leads for My Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
