import React from "react";
import useFirestore from "../../hooks/useFirestore";

import { Container, ImageWrapper, Image } from "./styles";

function ImageGrid() {
  const { docs } = useFirestore("images");

  return (
    <Container>
      {docs &&
        docs.map((doc) => (
          <ImageWrapper key={doc.id}>
            <Image src={doc.url} alt="uploaded pic" />
          </ImageWrapper>
        ))}
    </Container>
  );
}

export default ImageGrid;
