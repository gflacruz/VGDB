import './globals.css'

export const metadata = {
  title: 'Videogame Database',
  description: "Videogame Databse to store, rate, and vote on video games you've played",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
