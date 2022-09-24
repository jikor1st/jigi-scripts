// components
import Head from 'next/head';

// types
interface SeoProps {
  title?: string;
  siteName: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

const Seo = ({ title, siteName, description, ogImage, ogUrl }: SeoProps) => {
  const webTitle = title ? title : 'jigi-scripts';
  const webHeader = `${webTitle} | ${siteName}`;
  return (
    <Head>
      <title>{webHeader}</title>
      {/* <link rel="canonical" href="중복 url 입력 : 보류" /> */}
      <meta name="description" content={description} />
      {/* <meta name="keywords" content='키워드 입력 보류 : 나열예정' /> */}
      <meta property="og:title" content={webHeader} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="twitter:title" content={webHeader} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
      {ogUrl && <meta property="twitter:url" content={ogUrl} />}
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={config.social.twitter} /> // 임시 보류 */}
    </Head>
  );
};

export { Seo };
