import { Portal } from '@/test-components';
const PortalPage = () => {
  return (
    <div>
      <div>
        <div>test</div>
        <Portal>
          <div>portal----</div>
        </Portal>
      </div>
    </div>
  );
};

export default PortalPage;
