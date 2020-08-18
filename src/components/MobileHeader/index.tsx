import React from 'react';

import { Container } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
        <ProfileCircle src="https://github.com/ItaloLR.png" />
    </Container>
  );
};

export default MobileHeader;