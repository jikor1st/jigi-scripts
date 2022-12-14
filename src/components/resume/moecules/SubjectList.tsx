import styled from '@emotion/styled';

import {
  ListItem,
  ListTitle,
  ListSubTitle,
  CopyLink,
  InfoText,
  SkillTag,
} from '../atoms';

import { v4 } from 'uuid';

const SContainer = styled.div(({ theme }) => {
  return {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(80),
    },
    [theme.breakpoints.down('lg')]: {
      padding: `${theme.typography.pxToRem(20)} ${theme.typography.pxToRem(
        20,
      )}`,
      background: theme.palette.background.canvas,
      borderRadius: theme.typography.pxToRem(16),
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(40),
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-child)': {
        marginBottom: theme.typography.pxToRem(30),
      },
    },
  };
});
const SListWrap = styled.ul(() => {
  return {};
});
const SDetailItemsWrap = styled.li(({ theme }) => {
  return {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(28),
    },
  };
});
const SSkillTagListWrap = styled.ul(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px 8px',
    marginTop: theme.typography.pxToRem(20),
  };
});
const SDate = styled.p(({ theme }) => {
  return {
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
  };
});

interface SubjectListProps {
  list?: {
    title: string;
    date?: string[];
    href?: string;
    inform?: string;
    items?: string[];
    detailItems?: { title: string; items: string[] }[];
    skillTagList?: string[];
  }[];
}

export function SubjectList({ list }: SubjectListProps) {
  return (
    <>
      {list &&
        list.map(
          ({ title, date, href, inform, items, detailItems, skillTagList }) => (
            <SContainer key={`wrapper-${v4()}`}>
              {/* 제목 */}
              <ListTitle
                sx={{
                  marginBottom: {
                    sm: 8,
                    lg: 16,
                  },
                }}
              >
                {title}
              </ListTitle>
              {/*  */}
              {date && (
                <SDate>
                  {date.map((dateItem, index, arr) =>
                    index === arr.length - 1 ? dateItem : `${dateItem} - `,
                  )}
                </SDate>
              )}
              {/* 링크 */}
              {href && (
                <CopyLink
                  href={href}
                  sx={{
                    marginBottom: 10,
                    marginTop: {
                      sm: -2,
                    },
                  }}
                />
              )}
              {/* 정보 */}
              {inform && (
                <InfoText sx={{ marginBottom: 28 }}>{inform}</InfoText>
              )}
              {/* 아이템 */}
              {items && (
                <SListWrap>
                  {items.map(item => (
                    <ListItem key={`list-${v4()}`}>{item}</ListItem>
                  ))}
                </SListWrap>
              )}
              {/* 디테일 아이템 */}
              {detailItems && (
                <SListWrap>
                  {detailItems.map(({ title, items }) => (
                    <SDetailItemsWrap key={`detail-items-${v4()}`}>
                      <ListSubTitle sx={{ marginBottom: 8 }}>
                        {title}
                      </ListSubTitle>
                      <SListWrap>
                        {items.map(text => (
                          <ListItem key={`detail-list-${v4()}`}>
                            {text}
                          </ListItem>
                        ))}
                      </SListWrap>
                    </SDetailItemsWrap>
                  ))}
                </SListWrap>
              )}
              {/* 스킬 태그 */}
              {skillTagList && (
                <SSkillTagListWrap>
                  {skillTagList.map(text => (
                    <SkillTag text={text} key={`skill-tag-${v4()}`} />
                  ))}
                </SSkillTagListWrap>
              )}
            </SContainer>
          ),
        )}
    </>
  );
}
