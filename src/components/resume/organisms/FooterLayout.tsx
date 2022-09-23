import styled from 'styled-components';
import { FooterList } from '../moecules';

import { RESUME } from '@/lib/constants';

import { v4 } from 'uuid';

const SContainer = styled.footer(({ theme }) => {
  return {
    background: theme.palette.background.canvas,
    padding: '0 20px',
    paddingTop: 44,
    marginTop: 110,
  };
});

const SPaper = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.background.paper,
    width: '100%',
    maxWidth: theme.breakpoints.values.xxl,
    margin: '0 auto',
    padding: `${theme.typography.pxToRem(40)} ${theme.typography.pxToRem(60)}`,
    boxShadow: theme.palette.shadow.modal,
    border: `1px solid ${theme.palette.divider.secondary}`,
    borderBottom: 0,
    borderRadius: '10px 10px 0 0',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '44px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(
        30,
      )}`,
    },
  };
});

const SPaperTitle = styled.h3(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.subtitle1,
    fontWeight: theme.typography.fontWeight.Bold,
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.subtitle2,
      fontWeight: theme.typography.fontWeight.SemiBold,
    },
  };
});

const SHighlight = styled.span(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeight.Bold,
  };
});

const SFooterListContainer = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: `24px ${theme.typography.pxToRem(140)}`,
    [theme.breakpoints.down('sm')]: {
      gap: `24px ${theme.typography.pxToRem(80)}`,
    },
  };
});

const SFooterNavigator = styled.a(() => {
  return {};
});

const SFooterLink = styled.a(() => {
  return {
    color: 'inherit',
    textDecoration: 'none',
  };
});

export function FooterLayout() {
  const thisYear = new Date().getFullYear();
  return (
    <SContainer>
      <SPaper>
        <SPaperTitle>
          {thisYear}
          <br />
          프론트엔드 개발자 <SHighlight>지기역</SHighlight> 이력서를
          <br />
          끝까지 읽어주셔서 감사합니다.
        </SPaperTitle>
        <SFooterListContainer>
          <FooterList
            title="이력서 지도"
            list={Object.entries(RESUME)
              .filter(([_, item]) => item?.header?.title && item?.header?.id)
              .map(([_, { header }]) => {
                return (
                  <SFooterLink href={`#${header.id}`}>
                    {header.title}
                  </SFooterLink>
                );
              })}
          />
          <FooterList
            title="운영"
            list={RESUME.contact.category
              .filter(item => item.type === 'link')
              .map(({ title, href }) => {
                return (
                  <SFooterLink href={href} target={'_blank'}>
                    {title}
                  </SFooterLink>
                );
              })}
          />
        </SFooterListContainer>
      </SPaper>
    </SContainer>
  );
}
