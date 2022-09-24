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
    <>
      <title>{webHeader}</title>
      {/* <link rel="canonical" href="중복 url 입력 : 보류" /> */}
      <meta name="description" content={description} />
      {/* <meta name="keywords" content='키워드 입력 보류 : 나열예정' /> */}
      <meta property="og:title" content={webHeader} />
      <meta property="og:description" content={description} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={webHeader} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jigi-scripts.vercel.app" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={webHeader} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export { Seo };
