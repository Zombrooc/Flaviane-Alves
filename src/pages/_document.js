import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

// import "aos/dist/aos.css"; // You can also use <link> for styles

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <meta name="title" content="dōTerra - Flaviane Alves" />
          <meta
            name="description"
            content="Flaviane Rezende Alves Meliato, consultora de óleos essenciais dōTerra."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.flavianealves.tk/" />
          <meta property="og:title" content="dōTerra - Flaviane Alves" />
          <meta
            property="og:description"
            content="Flaviane Rezende Alves Meliato, consultora de óleos essenciais dōTerra."
          />
          <meta
            property="og:image"
            content="https://www.flavianealves.tk/banner.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.flavianealves.tk/"
          />
          <meta property="twitter:title" content="dōTerra - Flaviane Alves" />
          <meta
            property="twitter:description"
            content="Flaviane Rezende Alves Meliato, consultora de óleos essenciais dōTerra."
          />
          <meta
            property="twitter:image"
            content="https://www.flavianealves.tk/banner.png"
          ></meta>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bd8bca" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
          <meta name="theme-color" content="#bd8bca" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
        </Head>
        <body>
          <Main />
          <a href="https://wa.me/5535991067742" className="whatsAppButton">
            <IoLogoWhatsapp />
          </a>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `AOS.init()`,
            }}
          />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
          {/* <script dangerouslySetInnerHTML={{
              __html: `AOS.init()`,
            }}></script> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
