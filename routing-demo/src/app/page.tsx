import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Link href='/blog'>Blog?</Link>
        <Link href='/about'>About?</Link>
        <Link href='/products'>Products</Link>
        <Link href='/articles/breaking-news-123?lang=en'>Read in English</Link>
        <Link href='/articles/breaking-news-123?lang=fr'>Lire en français</Link>
        <Link href='/articles/breaking-news-123?lang=es'>Leer en español</Link>
    </div>
  )
}

export default Home;