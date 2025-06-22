import React from 'react'
import { Metadata } from 'next'

export const metadata : Metadata= {
  title: {
    absolute: 'Blog Page',
  },
  description: 'Blog about various topics',
}
const Blog = () => {
  return (
    <div>Blog Page</div>
  )
}

export default Blog