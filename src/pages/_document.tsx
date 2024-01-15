import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Código do GTM com JavaScript */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXT6T4N');
          `}
        </Script>
        {/* Fim do código do GTM com JavaScript */}
        <meta
          name="description"
          content="Domus Araçoiaba da Serra - uma marca para você chamar de lar"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Código do GTM sem JavaScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXT6T4N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Fim do código do GTM sem JavaScript */}
      </body>
    </Html>
  );
};

export default Document;
