import styled from "styled-components";

export const CheckboxContainer = styled.div`
  height: 100%;
  margin-top: 10px;
  margin-right: 16px;
`;

export const Details = styled.div`
  width: 100%;
`;

export const Container = styled.div<{ checked?: boolean }>`
  display: flex;
  width: 100%;
  height: 72px;

  display: ${(props) => props.checked && "none"};
`;

export const Title = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 12px;

  > svg {
    margin-top: 2px;
  }
`;
