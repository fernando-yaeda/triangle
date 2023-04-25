import styled from "styled-components";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  width?: string;
}

export default function Button({ children = "", onClick, width }: ButtonProps) {
  return (
    <StyledButton style={{ width }} onClick={onClick}>
      <Text>{children}</Text>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.style?.width || "auto"};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.mediumGray};
    color: ${(props) => props.theme.darkGray};
  }
`;

const Text = styled.span`
  font-size: ${(props) => props.theme.textMd.fontSize};
  line-height: ${(props) => props.theme.textMd.lineHeight};
  font-weight: 500;
`;
