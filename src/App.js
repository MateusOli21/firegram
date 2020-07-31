import React from "react";

import Title from "./components/Title";
import FormImage from "./components/FormImage";
import ImageGrid from "./components/ImageGrid";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Title />
      <FormImage />
      <ImageGrid />
      <GlobalStyles />
    </div>
  );
}

export default App;
