import React from 'react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

function ModelSection({ modelName, overlayNode, children, ...props }: Props) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
