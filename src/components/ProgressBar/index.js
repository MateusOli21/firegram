import React, { useEffect } from "react";

import useStorage from "../../hooks/useStorage";

import { Progress } from "./styles";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return (
    <Progress initial={{ width: 0 }} animate={{ width: progress + "%" }} />
  );
}

export default ProgressBar;
