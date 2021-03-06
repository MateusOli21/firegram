import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Image = styled(motion.img)`
  max-width: 60%;
  max-height: 80%;
  display: block;
  margin: 80px auto;
  border: 2px solid white;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.4);
`;
