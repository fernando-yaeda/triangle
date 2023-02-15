import styled from "styled-components";

interface Props {
  children: string;
  onClick: () => void;
  width?: string;
  type?: string;
}

export default function Button({ children, onClick, width }: Props) {
  return (
    <StyledButton style={{ width }} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 30px;
  width: ${(props) => props.style?.width || "auto"};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 12px;

  font-family: DM Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  background-color: #ff695b;
  color: #f3f4f7;

  border: none;
  border-radius: 30px;

  cursor: pointer;
`;
