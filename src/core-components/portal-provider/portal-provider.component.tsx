import { INITIAL_PORTAL_ID } from '@/lib/constants';

interface PortalProviderProps {
  portalKey?: string;
}
const PortalProvider = ({
  portalKey = INITIAL_PORTAL_ID,
}: PortalProviderProps) => {
  return <div id={portalKey} />;
};

export { PortalProvider };
