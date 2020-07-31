import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imageUrl = await storageRef.getDownloadURL();
        setUrl(imageUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
}

export default useStorage;