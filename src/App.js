import React, { useState } from "react";

import Title from "./components/Title";
import FormImage from "./components/FormImage";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <FormImage />
      <ImageGrid setSelectedImage={setSelectedImage} />
      <GlobalStyles />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
