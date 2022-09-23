import { useRef } from 'react';
import styled from '@emotion/styled';
import { utility } from '@/lib/utils';
import { Icon } from '@/baseComponents';

import { CSSWithBreakpoints } from '@/lib/theme';

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
  const handleCopyLinkToClipboard = () => {
    try {
      utility.clipboard.copy(href);
    } catch (e) {}
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
      <SCopyButton onClick={handleCopyLinkToClipboard}>
        <Icon icon="Copy" color="secondary" />
      </SCopyButton>
    </SContainer>
  );
}
