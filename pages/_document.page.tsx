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
