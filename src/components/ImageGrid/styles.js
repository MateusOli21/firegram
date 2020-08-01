import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin: 20px auto;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 30px;
`;

export const ImageWrapper = styled(motion.div)`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.9;
`;

export const Image = styled(motion.img)`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    cursor: pointer;
  }
`;
