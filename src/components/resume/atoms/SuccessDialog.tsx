import styled from '@emotion/styled';

import { Icon } from '@/baseComponents';

const SContainer = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    padding: `4px 14px 4px 6px`,
    background: theme.palette.success.main,
    borderRadius: 40,
    gap: 4,
  };
});
const SText = styled.p(({ theme }) => {
  return {
    color: '#ffffff',
    ...theme.typography.body2,

    whiteSpace: 'nowrap',
  };
});

interface SuccessDialogProps {
  text: string | number;
}

export function SuccessDialog({ text }: SuccessDialogProps) {
  return (
    <SContainer>
      <Icon icon="Check" size={20} color={'#ffffff'} />
      <SText>{text}</SText>
    </SContainer>
  );
}
