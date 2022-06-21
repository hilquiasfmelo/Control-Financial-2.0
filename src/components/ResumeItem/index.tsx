import React, { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import * as Styled from './styles';

type IResumeItemProps = {
  title: string;
  value: string;
  Icon: ComponentType<IconBaseProps>;
};

const ResumeItem: React.FC<IResumeItemProps> = ({ title, value, Icon }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderTitle>{title}</Styled.HeaderTitle>
        <Icon />
      </Styled.Header>

      <Styled.Total>{value}</Styled.Total>
    </Styled.Container>
  );
};

export { ResumeItem };
