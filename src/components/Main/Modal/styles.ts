import styled from "styled-components";

export const Modal = styled.div`
  min-height: 380px;
  width: 420px;

  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1000;

  background-color: white;
  border-radius: 8px;
  padding: 16px 24px 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1000;
`;
