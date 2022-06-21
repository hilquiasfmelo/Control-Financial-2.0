import React from 'react';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';
import { ResumeItem } from '../ResumeItem';
import * as Styled from './styles';

const Resume: React.FC = () => {
  return (
    <Styled.Container>
      <ResumeItem title="Entradas" value="1450" Icon={FaRegArrowAltCircleUp} />
      <ResumeItem title="Sáidas" value="412" Icon={FaRegArrowAltCircleDown} />
      <ResumeItem title="Total" value="1002" Icon={FaDollarSign} />
    </Styled.Container>
  );
};

export { Resume };
