import { useState } from 'react';
import styled from '@emotion/styled';
import { utility } from '@/lib/utils';
import { Icon } from '@/baseComponents';

import { CSSWithBreakpoints } from '@/lib/theme';

import { SuccessDialog } from './SuccessDialog';
import { motion } from 'framer-motion';

const SContainer = styled.div<CSSWithBreakpoints>(({ theme, sx }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    ...theme.breakpoints.createStyle(sx),
  };
});
const SLink = styled.a(({ theme }) => {
  return {
    marginRight: 8,
    wordBreak: 'break-all',
    textDecoration: 'underline',
    ...theme.typography.body1,
    fontWeight: theme.typography.fontWeight.Light,
    transition: 'color 0.23s ease-in-out',
    color: theme.palette.text.light,
    '&:hover': {
      color: theme.palette.text.secondary,
    },
    '&:visited': {
      color: theme.palette.primary.main,
    },
  };
});
const SDisabledLink = styled.p(({ theme }) => {
  return {
    marginRight: 8,
    wordBreak: 'break-all',
    textDecoration: 'underline',
    ...theme.typography.body1,
    fontWeight: theme.typography.fontWeight.Light,
    color: theme.palette.text.light,
  };
});
const SCopyButtonWrapper = styled.div(() => {
  return {
    position: 'relative',
  };
});
const SCopyButton = styled.button(({ theme }) => {
  return {
    padding: 2,
    borderRadius: 4,
    transition: 'background 0.23s ease-in-out, border 0.13s ease',
    border: '1px solid transparent',
    '&:hover': {
      background: theme.palette.actions.hover,
    },
    '&:focus, &:active': {
      borderColor: theme.palette.divider.secondary,
    },
  };
});

interface CopyLinkProps extends CSSWithBreakpoints {
  href: string;
  disabled?: boolean;
}

export function CopyLink({ href, disabled = false, ...rest }: CopyLinkProps) {
  const [copyState, setCopyState] = useState(false);

  const handleCopyLinkToClipboard = () => {
    try {
      utility.clipboard.copy(href);
      setCopyState(true);
    } catch (e) {
      alert('복사를 실패했습니다.');
    } finally {
      setTimeout(() => {
        setCopyState(false);
      }, 600);
    }
  };

  return (
    <SContainer {...rest}>
      {!disabled ? (
        <SLink href={href} target={'_blank'}>
          {href}
        </SLink>
      ) : (
        <SDisabledLink>{href}</SDisabledLink>
      )}
      <SCopyButtonWrapper>
        <SCopyButton onClick={handleCopyLinkToClipboard}>
          <Icon icon="Copy" color="secondary" />
        </SCopyButton>
        <motion.div
          animate={{
            opacity: copyState ? 1 : 0,
            transform: copyState
              ? 'translate(-50%, -100%)'
              : 'translate(-50%, -80%)',
            position: 'absolute',
            left: '50%',
            top: -10,
            pointerEvents: 'none',
          }}
        >
          {copyState && <SuccessDialog text="복사 완료" />}
        </motion.div>
      </SCopyButtonWrapper>
    </SContainer>
  );
}
