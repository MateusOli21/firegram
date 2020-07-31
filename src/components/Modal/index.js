import React from "react";

import { Backdrop, Image } from "./styles";

function Modal({ selectedImage, setSelectedImage }) {
  function handleClick(event) {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  }

  return (
    <Backdrop className="backdrop" onClick={handleClick}>
      <Image src={selectedImage} alt="selected pic" />
    </Backdrop>
  );
}

export default Modal;
