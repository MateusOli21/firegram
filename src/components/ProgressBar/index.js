import React, { useEffect } from "react";

import useStorage from "../../hooks/useStorage";

import { Progress } from "./styles";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return <Progress progress={progress} />;
}

export default ProgressBar;
