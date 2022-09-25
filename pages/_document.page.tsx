import Document, { Html, Head, Main, NextScript } from 'next/document';
import { PortalRoot } from '@/extendsComponents';

export default class DocumentPage extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="stylesheet" href="/assets/fonts/fonts.css" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* <link rel="stylesheet" href="/assets/style/reset.css" />
           */}
          {/* 폰트 */}
          <meta
            name="google-site-verification"
            content="zFm4zq7bfKIFVMRavwKLUq6R6Ki2Mp5agFGguBWY-qk"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <div id="root">
            <Main />
            <PortalRoot />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
