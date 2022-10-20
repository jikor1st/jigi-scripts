import { ReactElement, ReactNode } from 'react';

import { getMdDoc } from '@/lib/module/md';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { Icon } from '@/baseComponents';
import { ResumePageLayout } from '@/components/resume/templates';

const PageContainer = styled.div(() => {
  return {
    padding: '80px 20px',
  };
});
const PageWrapper = styled.section(({ theme }) => {
  return {
    maxWidth: 720,
    margin: '0 auto',
    color: theme.palette.text.primary,
  };
});
const HeadTitle = styled.h1(({ theme }) => {
  return {
    ...theme.typography.h3,
  };
});
const HighLighter = styled.span(({ theme }) => {
  return {
    color: theme.palette.primary.main,
  };
});
const SmBr = styled.br(({ theme }) => {
  return {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  };
});

const Article = styled.article(({ theme }) => {
  const pxToRem = theme.typography.pxToRem;
  return {
    margin: `${pxToRem(24)} 0`,
  };
});
const STitle = styled.h2(({ theme }) => {
  const pxToRem = theme.typography.pxToRem;
  return {
    position: 'relative',
    ...theme.typography.h5,
    margin: `${pxToRem(36)} 0 ${pxToRem(24)} 0`,
    display: 'inline-block',
  };
});

const SIconWrapper = styled.span(() => {
  return {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translate(80%, -30%)',
  };
});
const Title = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <STitle>
      {children}
      <SIconWrapper>
        <Icon icon="Required" color={theme.palette.primary.main} />
      </SIconWrapper>
    </STitle>
  );
};

const Subtitle = styled.h3(({ theme }) => {
  const pxToRem = theme.typography.pxToRem;
  return {
    '&:before': {
      content: '"-"',
      display: 'inline-block',
      paddingRight: 8,
    },
    ...theme.typography.subtitle1,
    margin: `${pxToRem(32)} 0 ${pxToRem(12)} 0`,
  };
});
const Text = styled.span(({ theme }) => {
  return {
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
  };
});
const Padding = styled.span(({ theme }) => {
  const pxToRem = theme.typography.pxToRem;
  return {
    display: 'block',
    paddingBottom: pxToRem(18),
  };
});

const components = {
  Article,
  Title,
  Subtitle,
  Text,
  Padding,
};

type MdxData = {
  id: string;
  contentHtml: string;
} & {
  id: string;
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

interface IntroducePageProps {
  introduceData: MdxData;
}
export default function IntroducePage({ introduceData }: IntroducePageProps) {
  return (
    <PageContainer>
      <PageWrapper>
        <HeadTitle>
          <HighLighter>지기역</HighLighter> <SmBr />
          자기소개서
        </HeadTitle>
        {introduceData.contentHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: introduceData.contentHtml }}
          />
        )}
        {introduceData.mdxSource && (
          <MDXRemote {...introduceData.mdxSource} components={components} />
        )}
      </PageWrapper>
    </PageContainer>
  );
}

IntroducePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumePageLayout pageTitle="자기소개서" footerNavVisible={false}>
      {page}
    </ResumePageLayout>
  );
};

export async function getStaticProps() {
  const introduceData = await getMdDoc('introduce');
  return {
    props: {
      introduceData,
    },
  };
}
