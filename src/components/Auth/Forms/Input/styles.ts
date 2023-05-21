import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Label = styled.label`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: flex-start;

  margin-bottom: -12px;

  color: ${theme.colors.darkGrey};
  font-size: ${theme.fontVariants.textXsRegular.fontSize};
  line-height: ${theme.fontVariants.textXsRegular.lineHeight};
  font-weight: ${theme.fontVariants.textXsRegular.fontWeight};
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;

  padding: 0 16px;

  border: none;
  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  background-color: ${theme.colors.lightGrey};

  font-size: ${theme.fontVariants.textSm.fontSize};
  line-height: ${theme.fontVariants.textSm.lineHeight};

  &:focus {
    outline: 2px solid ${theme.colors.black};
    background-color: ${theme.colors.mediumGrey};

    transition: none;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const ErrorText = styled.span`
  color: ${theme.colors.purple};
  font-size: ${theme.fontVariants.textSm.fontSize};
  line-height: ${theme.fontVariants.textSm.lineHeight};

  align-self: flex-start;
`;
