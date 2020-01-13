import React from "react";
import quartersData from "../quartersContent";
import StepQuarter from "../StepQuarter";
import styles from "./Quarters.module.css";
import Header from "../../../components/Header/HeaderContainer";
import YearEndContainer from "../../news/YearEndContainer";

const Quarters = props => {
  const { id: roundNumber } = props;
  const [currentQuarter, _] = React.useState(quartersData[roundNumber - 1]);
  return (
    <>
      <Header rightHeader={roundNumber} />
      <div className={styles.container}>
        {roundNumber > 4 ? (
          <YearEndContainer />
        ) : (
          <StepQuarter
            image={currentQuarter.image}
            text={currentQuarter.text}
            stepQuarter={0}
            roundNumber={roundNumber}
          />
        )}
      </div>
    </>
  );
};

export default Quarters;
