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
          {/* <link rel="stylesheet" href="/assets/style/reset.css" />
          <link rel="stylesheet" as="font" href="/assets/fonts/fonts.css" /> */}
          {/* 폰트 */}
          <meta
            name="google-site-verification"
            content="zFm4zq7bfKIFVMRavwKLUq6R6Ki2Mp5agFGguBWY-qk"
          />
        </Head>
        <Head>
          {/* <!-- Facebook Meta Tags --> */}
          <meta
            property="og:url"
            content="https://jigi-scripts.vercel.app/resume"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="지기역 | 이력서" />
          <meta
            property="og:description"
            content="프론트엔드 개발자 지기역 이력서"
          />
          <meta
            property="og:image"
            content="https://jikor1st.github.io/assets/og/resume-og.png"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="jigi-scripts.vercel.app" />
          <meta
            property="twitter:url"
            content="https://jigi-scripts.vercel.app/resume"
          />
          <meta name="twitter:title" content="지기역 | 이력서" />
          <meta
            name="twitter:description"
            content="프론트엔드 개발자 지기역 이력서"
          />
          <meta
            name="twitter:image"
            content="https://jikor1st.github.io/assets/og/resume-og.png"
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
