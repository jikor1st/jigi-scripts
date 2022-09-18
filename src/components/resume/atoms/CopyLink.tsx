import { useRef } from 'react';
import styled from '@emotion/styled';
import { utility } from '@/lib/utils';
import { Icon } from '@/baseComponents';
interface MarginBottom {
  mb?: number;
}

const SContainer = styled.div<MarginBottom>(({ theme, mb }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
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

interface CopyLinkProps extends MarginBottom {
  href: string;
}

export function CopyLink({ href, mb }: CopyLinkProps) {
  const handleCopyLinkToClipboard = () => {
    try {
      utility.clipboard.copy(href);
    } catch (e) {}
  };
  return (
    <SContainer mb={mb}>
      <SLink href={href} target={'_blank'}>
        {href}
      </SLink>
      <SCopyButton onClick={handleCopyLinkToClipboard}>
        <Icon icon="Copy" color="secondary" />
      </SCopyButton>
    </SContainer>
  );
}
