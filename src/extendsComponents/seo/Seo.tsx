// components
import Head from 'next/head';

// types
interface SeoProps {
  title?: string;
  siteName: string;
  description: string;
}

const Seo = ({ title, siteName, description }: SeoProps) => {
  return (
    <Head>
      <title>{`${title ? title : 'jigi-scripts'} | ${siteName}`}</title>
      {/* <link rel="canonical" href="중복 url 입력 : 보류" /> */}
      <meta name="description" content={description} />
      {/* <meta name="keywords" content='키워드 입력 보류 : 나열예정' /> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={"og url 입력 보류(웹페이지 url)"} /> */}
      {/* <meta property="og:image" content={'og image 입력 보류'} /> */}
      {/* <meta property="og:image:width" content={'og image 가로 사이즈 입력 보류'} /> */}
      {/* <meta property="og:image:height" content={'og image 세로 사이즈 입력 보류'} /> */}
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
