import styled from "styled-components";

export const Progress = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 5px;
  background: var(--primary);
  margin-top: 20px;
`;
