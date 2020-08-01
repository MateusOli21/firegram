import React from "react";
import useFirestore from "../../hooks/useFirestore";

import { Container, ImageWrapper, Image } from "./styles";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore("images");

  return (
    <Container>
      {docs &&
        docs.map((doc) => (
          <ImageWrapper
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
            whileHover={{ opacity: 1 }}
            layout
          >
            <Image
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </ImageWrapper>
        ))}
    </Container>
  );
}

export default ImageGrid;
