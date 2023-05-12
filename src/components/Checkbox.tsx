import styled from "styled-components";

type CheckboxProps = {
  onClick: (args: any) => void;
  checked: boolean;
};

export function Checkbox({ onClick, checked }: CheckboxProps) {
  return (
    <TaskCheckContainer checked={checked} onClick={onClick}>
      <TaskCheck />
    </TaskCheckContainer>
  );
}

export const TaskCheck = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const TaskCheckContainer = styled.div<{ checked: boolean }>`
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  background-color: ${(props) =>
    props.checked ? props.theme.colors.purple : "white"};

  border: ${(props) =>
    props.checked ? "none" : `solid 1px ${props.theme.colors.grey}`};
  border-radius: 6px;

  cursor: pointer;
  transition: all 300ms;
`;
