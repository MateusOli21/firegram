import styled from "styled-components";

export const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;

  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  label {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    line-height: 28px;
    font-weight: 700;
    font-size: 24px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    color: var(--primary);
  }

  label:hover {
    background: var(--primary);
    color: white;
    cursor: pointer;
  }
`;

export const Output = styled.div`
  height: 60px;
  font-size: 0.85rem;
`;

export const Error = styled.div`
  color: var(--error);
  font-weight: 700;
  margin-top: 1rem;
`;
