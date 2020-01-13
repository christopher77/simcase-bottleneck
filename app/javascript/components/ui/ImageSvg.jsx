import React, { useEffect } from "react";
import LazyImages from "./LazyImages/LazyImages";
import LazySquare from "./LazySquare/LazySquare";

const ImageSvg = ({ src, className, mapSvg = false }) => {
  const [isFinishedImage, setFinishedImage] = React.useState(false);

  useEffect(() => {
    setFinishedImage(false);
  }, [src]);

  return (
    <>
      {!isFinishedImage && (mapSvg === true ? <LazySquare /> : <LazyImages />)}
      <img
        src={src}
        className={className}
        style={{ display: isFinishedImage ? "block" : "none" }}
        ref={el => {
          if (el)
            el.onload = () => {
              setFinishedImage(true);
            };
        }}
      />
    </>
  );
};

export default ImageSvg;
