import { useContext } from "react";
import styled from "styled-components";
import CardItem from "../../components/Dashboard/CardItem";
import UserDataContext, {
    UserDataContextType,
} from "../../contexts/UserContext";
import { generateDate } from "../../utils/generate-date";

export default function Dashboard() {
  const { userData } = useContext(UserDataContext) as UserDataContextType;

  const date = generateDate();

  return (
    <Container>
      <LateralMenu>
        <LateralMenuItem>home</LateralMenuItem>
        <LateralMenuItem>my tasks</LateralMenuItem>
        <LateralMenuItem>projects</LateralMenuItem>
      </LateralMenu>

      <HomeContainer>
        <Header>
          <Date>{date}</Date>
          <br />
          <Greeting>good evening, {userData.username}</Greeting>
        </Header>

        <CardsContainer>
          <CardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardBody>
                <CardItem isProject={false}>create project</CardItem>
              </CardBody>
            </Card>
          </CardWrapper>
        </CardsContainer>
      </HomeContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #252525;

  display: flex;
`;

const LateralMenu = styled.div`
  height: 100vh;
  width: 218px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 30px 20px;

  background-color: #2f2f2f;
`;

const LateralMenuItem = styled.button`
  height: 40px;
  width: 100%;

  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px 15px;

  border: none;
  border-radius: 8px;

  background-color: transparent;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #067c89;
  }
`;

const HomeContainer = styled.div`
  height: 100%;
  width: calc(100% - 218px);

  display: flex;
  flex-direction: column;

  background-color: #252525;
`;

const Header = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "DM Sans";
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

const Date = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "DM Sans";
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

const Greeting = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "DM Sans";
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
`;

const CardsContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  padding: 0 32px;
`;

const CardWrapper = styled.div`
  height: 50%;
  width: 50%;

  padding: 8px;
`;

const Card = styled.div`
  height: 100%;
  width: 100%;

  padding: 12px;

  border-radius: 12px;

  background-color: #2f2f2f;

  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const CardHeader = styled.div`
  width: 100%;

  padding: 12px 24px;
`;

const CardTitle = styled.div`
  width: 100%;

  font-family: "DM Sans";
  font-weight: 500;
  font-size: 18px;
  color: #e4e4e4;
`;

const CardBody = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  padding: 12px 24px;

  font-family: "DM Sans";
  font-weight: 500;
  font-size: 16px;
  color: #c5c5c5;
`;
