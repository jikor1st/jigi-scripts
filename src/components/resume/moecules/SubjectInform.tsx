import styled from '@emotion/styled';

const SContainer = styled.div(({ theme }) => {
  return {
    position: 'sticky',
    top: 80,
    left: 0,
  };
});
const STitle = styled.h4(({ theme }) => {
  return {
    ...theme.typography.h4,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h5,
    },
    [theme.breakpoints.down('sm')]: {
      ...theme.typography.h6,
    },
  };
});
const SSubTitle = styled.h5(({ theme }) => {
  return {
    marginTop: theme.typography.pxToRem(24),
    ...theme.typography.subtitle1,
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.typography.pxToRem(12),
      ...theme.typography.subtitle2,
    },
  };
});
const SDate = styled.p(({ theme }) => {
  return {
    color: theme.palette.text.light,
    ...theme.typography.subtitle2,
    marginTop: theme.typography.pxToRem(4),
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.body1,
      marginTop: theme.typography.pxToRem(2),
    },
  };
});

interface SubjectInformProps {
  title: string;
  subTitle?: string;
  date?: string[];
}

export function SubjectInform({ title, subTitle, date }: SubjectInformProps) {
  return (
    <SContainer>
      <STitle>{title}</STitle>
      {subTitle && <SSubTitle>{subTitle}</SSubTitle>}
      {date && (
        <SDate>
          {date.map((dateItem, index, arr) =>
            index === arr.length - 1 ? dateItem : `${dateItem} - `,
          )}
        </SDate>
      )}
    </SContainer>
  );
}
