import React from "react";

import HeaderContainer from "../../../components/Header/HeaderContainer";
import SwitcherOnboarding from "../../../components/SwitcherOnboarding/SwitcherOnboarding";

const IsometricMap = props => {
  const { id } = props; //id=> current round
  return (
    <>
      <HeaderContainer rightHeader={id} />
      <SwitcherOnboarding round={id} />
    </>
  );
};
export default IsometricMap;
