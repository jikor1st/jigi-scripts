// components
import Head from 'next/head';

// types
interface SeoProps {
  title?: string;
  siteName: string;
  description: string;
  ogUrl?: string;
}

const Seo = ({ title, siteName, description, ogUrl }: SeoProps) => {
  return (
    <Head>
      <title>{`${title ? title : 'jigi-scripts'} | ${siteName}`}</title>
      {/* <link rel="canonical" href="중복 url 입력 : 보류" /> */}
      <meta name="description" content={description} />
      {/* <meta name="keywords" content='키워드 입력 보류 : 나열예정' /> */}
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {/* <meta property="og:image" content={'og image 입력 보류'} /> */}
      <meta property="og:image:width" content={'1200'} />
      <meta property="og:image:height" content={'630'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="twitter:card" content="summary" />
      {/* <meta property="twitter:creator" content={config.social.twitter} /> // 임시 보류 */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export { Seo };
