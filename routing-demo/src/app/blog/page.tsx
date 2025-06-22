import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata= {
  title: {
    absolute: 'Blog Page',
  },
  description: 'Blog about various topics',
}
export default async function Blog(){

  await new Promise(resolve => {
    setTimeout(() => {
      resolve("intentionally delayed");
    }, 2000);
  })
  return (
    <div>Blog</div>
  )
}

