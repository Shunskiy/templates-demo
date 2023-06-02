import './globals.css'
import graphikFont from "next/font/local"
import Header from '@/components/Header/Header'
import Script from 'next/script'

const graphik = graphikFont({
  src: [
    {
      path: "../../public/fonts/Graphik-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Regular.woff2",
      weight: "400",
      style: "normal"
    }
  ]
})

export const metadata = {
  title: 'Piano templates demo',
  description: 'Site that show how templates works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={graphik.className}>
        <Header />
        {children}
      </body>
      <Script id="piano-scripts">
        {`(function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("https://sandbox.tinypass.com/xbuilder/experience/load?aid=mIZ6NfDJsu");`}
      </Script>
    </html>
  )
}
