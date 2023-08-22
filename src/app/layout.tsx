import './globals.css'
import SessionProvider from './SessionProvider';
import Header from '../app/components/header'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
        <SessionProvider>
          <Header />
          <main className='pt-10  flex w-fullitems-center justify-center shadow-lg'>
            <div className='container flex justify-between'>
              {children}
            </div>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}