import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  children: string;
  isProject: boolean;
};

export default function CardItem({ children, isProject }: Props) {
  const navigate = useNavigate();

  function HandleOnClick() {
    if (!isProject) navigate("/projects/new");
  }

  return <Card onClick={() => HandleOnClick()}>{children}</Card>;
}

const Card = styled.button`
  all: unset;

  width: 50%;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;
