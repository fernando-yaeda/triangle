import styled from "styled-components";

export const Input = styled.input`
  width: 444px;
  height: 40px;

  padding: 0 40px;

  border-radius: 8px;
  border: none;

  background-color: ${(props) => props.theme.colors.mediumGrey};

  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fontVariants.textLg.fontSize};

  &::placeholder {
    color: ${(props) => props.theme.colors.darkGrey};
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.lightGrey};
    outline: 1px solid ${(props) => props.theme.colors.purple};
    box-shadow: rgb(0, 0, 0, 0.2) 0 2px 4px 1px;

    transition: 50ms;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  align-items: center;

  & > :first-child {
    position: absolute;
    left: 12px;

    color: ${(props) => props.theme.colors.darkGrey};
  }
`;
