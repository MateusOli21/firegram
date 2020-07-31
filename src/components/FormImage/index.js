import React, { useState } from "react";

import ProgressBar from "../ProgressBar";

import { Form, Output, Error } from "./styles";

function UploadImage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const extensions = ["image/png", "image/jpeg"];

  function changeHandler(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile && extensions.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Selecione um arquivo de imagem (png ou jpeg)");
    }
  }

  return (
    <Form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <Output>
        {error && <Error>{error}</Error>}

        {file && <div>{file.name}</div>}

        {file && <ProgressBar file={file} setFile={setFile} />}
      </Output>
    </Form>
  );
}

export default UploadImage;
