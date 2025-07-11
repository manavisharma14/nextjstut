export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  }
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
  
  
          {children}
  
          <footer
          style={{
            backgroundColor: '#f0f0f0',
            padding: '10px',
          }}>
            <p>Footer</p>
          </footer>
        </body>
      </html>
    )
  }
  