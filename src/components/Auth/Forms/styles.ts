// import * as S from "./styles"

import styled from "styled-components";

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  margin-bottom: -8px;

  color: ${(props) => props.theme.colors.darkGrey};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 0 16px;

  border: none;
  border-radius: 6px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;

  background-color: ${(props) => props.theme.colors.lightGrey};

  font-size: ${(props) => props.theme.fontVariants.textMd.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textMd.lineHeight};

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.mediumGrey};

    transition: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const MultipleInputsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const MultipleInputsErrors = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const ErrorText = styled.span`
  color: ${(props) => props.theme.colors.purple};
  font-size: ${(props) => props.theme.fontVariants.textSm.fontSize};
  line-height: ${(props) => props.theme.fontVariants.textSm.lineHeight};

  align-self: flex-start;
`;

export const CheckboxContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding-left: 20px;

  position: relative;

  label {
    font-size: ${(props) => props.theme.fontVariants.textSm.fontSize};
    line-height: ${(props) => props.theme.fontVariants.textSm.lineHeight};
  }

  span {
    margin-left: -20px;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  background-color: red;

  position: absolute;
  top: 4px;
  left: 0;
`;
