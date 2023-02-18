import { Link as link } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(link)`
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #6e6e6e;

  text-decoration: none;

  &:hover,
  &:focus {
    color: #2f2f2f;
  }
`;
