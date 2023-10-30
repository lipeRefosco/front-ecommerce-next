import './reset.css'
import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Menu from './components/Menu'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e-commerce',
  description: 'Self studie about how create a e-commerce with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <SearchBar />
        </Header>
        <Menu />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
