import styled from '@emotion/styled';

import Link from 'next/link';

interface MarginBottom {
  mb?: number;
}

const SContainer = styled.div<MarginBottom>(({ theme, mb }) => {
  return {
    ...(mb && { marginBottom: theme.typography.pxToRem(mb) }),
  };
});

const SCopyLink = styled(Link)(({ theme }) => {
  return {
    wordBreak: 'break-all',
    color: theme.palette.text.light,
    ...theme.typography.body1,
    fontWeight: theme.typography.fontWeight.Light,
  };
});

interface CopyLinkProps extends MarginBottom {
  href: string;
}

export function CopyLink({ href, mb }: CopyLinkProps) {
  return (
    <SContainer mb={mb}>
      <SCopyLink href={href} passHref target={'_blank'}>
        {href}
      </SCopyLink>
    </SContainer>
  );
}
