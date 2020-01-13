import React, { useState } from "react";

const ToggleContent = ({ toggle, content, setFeedbackTrue }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);
  const handleFeedback = () => {
    setFeedbackTrue();
    setIsShown(false);
  };

  return (
    <>
      {toggle(show)}
      {isShown && content(handleFeedback, hide)}
    </>
  );
};

export default ToggleContent;
