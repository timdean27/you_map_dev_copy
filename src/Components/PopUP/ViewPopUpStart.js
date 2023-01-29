import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ViewPopUpStart = ({ selectedMarker }) => {
  const [iamgeIndex, setImageIndex] = useState(0);

  const ImagehandleClick = (direction) => {
    let currentImageIndex = iamgeIndex;
    if (direction === "next") {
      setImageIndex(currentImageIndex + 1);
    } else if (direction === "previous") {
      setImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
      ViewPopUpStart
      <h3>{selectedMarker.name}</h3>
      {selectedMarker.images ? (
        <div className="ImageContainer">
          <img
            className="Iamge_POPup"
            src={selectedMarker.images[iamgeIndex]}
            alt={`Gallery Img ${selectedMarker.name}`}
          />
          <div>
            {iamgeIndex > 0 ? (
              <HiChevronLeft
                onClick={() => ImagehandleClick("previous")}
              ></HiChevronLeft>
            ) : (
              <HiChevronLeft className="placeholder" />
            )}
            {iamgeIndex < selectedMarker.images.length - 1 ? (
              <HiChevronRight
                onClick={() => ImagehandleClick("next")}
              ></HiChevronRight>
            ) : (
              <HiChevronRight className="placeholder" />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewPopUpStart;
