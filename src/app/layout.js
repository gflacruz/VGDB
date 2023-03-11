import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Video game Database',
  description: "Video game Database to store, rate, and vote on video games you've played",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <Header />
          {children}
        </body>
    </html>
  )
}