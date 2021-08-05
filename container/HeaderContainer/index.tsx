import Header from "@components/Header";
import React from "react";

const HeaderContainer: React.FC = () => {
  const today = new Date();
  const dateArr = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

  return <Header date={dateArr.join(".")} />;
};

export default HeaderContainer;
