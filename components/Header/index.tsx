import { Logo } from "assets";
import React from "react";

import * as S from "./style";
interface IHeader {
  date: string;
}

const Header: React.FC<IHeader> = ({ date }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <Logo width={169} height={54} />
        <S.DateText>Today : {date}</S.DateText>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Header;
