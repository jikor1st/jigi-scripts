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
    marginTop: theme.typography.pxToRem(24),
  };
});

interface SubjectListProps {
  list?: {
    title: string;
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
          ({ title, href, inform, items, detailItems, skillTagList }) => (
            <SContainer key={`wrapper-${v4()}`}>
              {/* 제목 */}
              <ListTitle mb={16}>{title}</ListTitle>
              {/* 링크 */}
              {href && <CopyLink href={href} mb={10} />}
              {/* 정보 */}
              {inform && <InfoText mb={28}>{inform}</InfoText>}
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
                      <ListSubTitle mb={8}>{title}</ListSubTitle>
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
