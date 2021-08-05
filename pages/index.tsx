import Router from "next/router";
import React, { useEffect } from "react";
import StartPageContainer from "../container/StartPageContainer";

const HomeKeeper: React.FC = () => {
  useEffect(() => {
    Router.push("/main");
  });
  return (
    <>
      <StartPageContainer />
    </>
  );
};

export default HomeKeeper;
