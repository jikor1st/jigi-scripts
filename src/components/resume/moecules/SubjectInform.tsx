import styled from '@emotion/styled';

const SContainer = styled.div(({ theme }) => {
  return {
    [theme.breakpoints.up('lg')]: {
      position: 'sticky',
      top: 80,
      left: 0,
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.typography.pxToRem(20),
    },
  };
});
const STitle = styled.h4(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeight.Bold,
    [theme.breakpoints.down('lg')]: {
      ...theme.typography.h5,
      fontWeight: theme.typography.fontWeight.Bold,
    },
  };
});
const SSubTitle = styled.h5(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    marginTop: theme.typography.pxToRem(18),
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
