import React from "react";
import styles from "./StepScreen.module.css";
import ImageSvg from "../../components/ui/ImageSvg";

const StepScreen = ({ image, text, stepNumber, key }) => {
  return (
    <div className={styles.container} key={key}>
      <h3 className={styles.text}>{text}</h3>
      {stepNumber === 4 && <h3 className={styles.extraText}>Good luck!</h3>}
      <ImageSvg
        src={image}
        className={styles.svgProduction}
        stepNumber={stepNumber}
      />
    </div>
  );
};

export default StepScreen;
