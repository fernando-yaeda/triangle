import styled from "styled-components";
import { generateDate } from "../../utils/generate-date";

export default function Home() {
  const date = generateDate();

  return (
    <Container>
      <LateralMenu>
        <LateralMenuItem>Home</LateralMenuItem>
        <LateralMenuItem>My Tasks</LateralMenuItem>
        <LateralMenuItem>Projects</LateralMenuItem>
      </LateralMenu>

      <HomeContainer>
        <Header>
          <Date>{date}</Date>
          <br />
          <Greeting>good evening, fernando</Greeting>
        </Header>

        <CardsContainer>
          <CardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>CardTitle</CardTitle>
                <CardNav>CardNav</CardNav>
              </CardHeader>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>CardTitle</CardTitle>
                <CardNav>CardNav</CardNav>
              </CardHeader>
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
  justify-content: space-evenly;
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
`;

const CardHeader = styled.div`
  height: 80px;
  width: 100%;

  padding: 12px 24px;
`;

const CardTitle = styled.div`
  height: 60%;
  width: 100%;

  font-family: "DM Sans";
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`;

const CardNav = styled.div`
  height: 40%;
  width: 100%;

  font-family: "DM Sans";
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;

  border-bottom: 1px solid #ffff;
`;
