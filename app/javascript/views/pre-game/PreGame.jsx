import React from "react";
import stepsData from "./content";

import Header from "../../components/Header/HeaderContainer";
import Footer from "../../components/Footer/Footer";
import StepScreen from "./StepScreen";
import Tabs from "./Tabs/Tabs";
import { Redirect } from "@reach/router";
import Slider from "react-slick";
import styles from "./PreGame.module.css";
import "./style.css";

const TutorialShowed = ({ tutorialNumber, setTutorialNumber }) => {
  const newArray = Object.values(stepsData);
  const slide = React.useRef(null);

  React.useEffect(() => {
    const current = slide.current;
    if (!current) return;
    if (tutorialNumber === 5) return;
    slide.current.slickGoTo(tutorialNumber);
  }, [tutorialNumber]);

  if (tutorialNumber === 5) {
    return <Redirect to="/quarter/1" noThrow />;
  }

  const settings = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => {
      if (current === tutorialNumber) return;
      setTutorialNumber(current);
    }
  };
  return (
    <div>
      <Slider ref={slide} {...settings}>
        {newArray.map((step, index) => (
          <StepScreen
            name={step.name}
            image={step.image}
            text={step.text}
            stepNumber={index}
            key={index}
          />
        ))}
        <Tabs />
      </Slider>
    </div>
  );
};

const PreGame = props => {
  React.useEffect(() => {
    props.fetchCapacities();
  }, []);

  const [tutorialNumber, setTutorialNumber] = React.useState(0);

  return (
    <div className={styles.pageContainer}>
      <Header rightHeader={8} />
      <TutorialShowed
        tutorialNumber={tutorialNumber}
        setTutorialNumber={setTutorialNumber}
      />
      {tutorialNumber !== 5 && (
        <Footer
          stepNumber={tutorialNumber}
          setStepNumber={setTutorialNumber}
          animation={tutorialNumber === 4}
        />
      )}
    </div>
  );
};
export default PreGame;
