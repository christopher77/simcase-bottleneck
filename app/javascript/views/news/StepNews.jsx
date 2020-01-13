import React from "react";
import styles from "./News/News.module.css";
import ImageSvg from "../../components/ui/ImageSvg";

const StepNews = props => {
  const { image, announce, report, title, finishMessage } = props;

  return (
    <div className={styles.newsContainer}>
      <ImageSvg src={image} />
      <div className={styles.contentContainer}>
        <h5>{title}</h5>
        <h5>{report}</h5>
        <h5>{announce}</h5>
        <h5>{finishMessage}</h5>
      </div>
    </div>
  );
};

export default StepNews;
