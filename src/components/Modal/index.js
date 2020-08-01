import React from "react";

import { Backdrop, Image } from "./styles";

function Modal({ selectedImage, setSelectedImage }) {
  function handleClick(event) {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  }

  return (
    <Backdrop
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        src={selectedImage}
        alt="selected pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </Backdrop>
  );
}

export default Modal;
