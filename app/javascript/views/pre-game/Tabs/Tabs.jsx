import React from "react";
import styles from "./Tabs.module.css";
import onboardingTabs from "../../../assets/Onboarding/onboardingTabs.png";
import onboardingRanking from "../../../assets/Onboarding/onboardingRanking.png";
import addStation1 from "../../../assets/Onboarding/addStation1.png";
import addStation2 from "../../../assets/Onboarding/addStation2.png";
import greenArrow from "../../../assets/Onboarding/greenArrow.svg";
import ImageSvg from "../../../components/ui/ImageSvg";

const Tabs = () => {
  return (
    <div className={styles.tabsView}>
      <ol>
        <li className={styles.firstInstruction}>
          Toggle between views to assess your plant.
          <ImageSvg src={onboardingTabs} className={styles.centerImage} />
        </li>
        <li className={styles.secondInstruction}>
          <span>
            <ImageSvg src={onboardingRanking} />
            Use the Capacity Table to identify the bottleneck.
          </span>
        </li>
        <li className={styles.thirdInstruction}>
          Then click on the square to assign resources.
          <div className={styles.addStations}>
            <ImageSvg src={addStation1} />
            <img src={greenArrow} />
            <ImageSvg src={addStation2} />
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Tabs;
