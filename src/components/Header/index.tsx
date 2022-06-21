import React from 'react';
import * as Styled from './styles';

const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Controle Financeiro</Styled.Title>
      </Styled.Header>
    </Styled.Container>
  );
};

export { Header };
