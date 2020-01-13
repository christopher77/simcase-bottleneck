import React from "react";
import newsContent from "../newsContent";

import Header from "../../../components/Header/HeaderContainer";
import StepNews from "../StepNews";
import Footer from "../../../components/Footer/Footer";

const NewsContainer = ({ id }) => {
  const [newsNumber, setNewsNumber] = React.useState(id - 1);

  const newsShowed = id => {
    let currentNew = newsContent[id];

    return (
      <StepNews
        image={currentNew.image}
        title={currentNew.title}
        report={currentNew.report}
        announce={currentNew.announce}
        finishMessage={currentNew.finishMessage}
      />
    );
  };

  return (
    <>
      <Header rightHeader={newsNumber + 1} />
      {newsShowed(newsNumber)}
      {newsNumber === 4 ? null : (
        <Footer
          stepNumber={newsNumber}
          setStepNumber={setNewsNumber}
          dots={false}
          animation={true}
        />
      )}
    </>
  );
};

export default NewsContainer;
