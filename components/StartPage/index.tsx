import React from "react";

import * as S from "./style";

import { Logo } from "../../assets";

const StartPage: React.FC = () => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.TitleText>우리집의 작은 경제 지킴이</S.TitleText>
        <Logo />
      </S.Wrapper>
    </S.Positioner>
  );
};

export default StartPage;
