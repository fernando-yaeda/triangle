import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;

  font-size: ${(props) => props.theme.fontVariants.headingSm.fontSize};
  line-height: ${(props) => props.theme.fontVariants.headingSm.lineHeight};
  font-weight: ${(props) => props.theme.fontVariants.headingSm.fontWeight};
`;

export const CloseModal = styled.button`
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;
`;
