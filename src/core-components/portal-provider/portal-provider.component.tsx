import { INITIAL_PORTAL_ID } from '@/core/constants';

interface PortalProviderProps {
  portalKey?: string;
}
const PortalProvider = ({
  portalKey = INITIAL_PORTAL_ID,
}: PortalProviderProps) => {
  return <div id={portalKey} />;
};

export { PortalProvider };
