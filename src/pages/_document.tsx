import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5Z945BXL2P" strategy='afterInteractive' />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5Z945BXL2P');
        `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
