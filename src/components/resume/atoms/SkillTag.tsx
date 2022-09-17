import styled from '@emotion/styled';

const SSkillTag = styled.h2(({ theme }) => {
  return {
    ...theme.typography.caption,
    padding: '6px 9px',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '50px',
    color: theme.palette.secondary.main,
  };
});

interface SkillTagProps {
  text: string;
}

export function SkillTag({ text }: SkillTagProps) {
  return <SSkillTag>{text}</SSkillTag>;
}
