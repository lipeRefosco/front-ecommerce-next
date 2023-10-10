import './reset.css'
import './global.css'
import styles from './page.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

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
      <nav className={styles.menu}>
        <ul>
          <li><a href="#account"><img src="#account" alt="account" /></a></li>
          <li><a href="#favorites"><img src="#favorites" alt="favorites" /></a></li>
          <li><a href="#categories"><img src="#categories" alt="categories" /></a></li>
          <li><a href="#checkout"><img src="#checkout" alt="checkout" /></a></li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  )
}
