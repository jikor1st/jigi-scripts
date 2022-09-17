import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import { PortalRoot } from '@/extendsComponents';

export default class DocumentPage extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* favicon package */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          /> */}
          <meta name="theme-color" content="#ffffff" />
          {/* <link rel="stylesheet" href="/assets/style/reset.css" />
          <link rel="stylesheet" as="font" href="/assets/fonts/fonts.css" /> */}
          {/* 폰트 */}
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

// DocumentPage.getInitialProps = async ctx => {};
