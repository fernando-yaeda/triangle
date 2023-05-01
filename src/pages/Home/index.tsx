import styled from "styled-components";
import Header from "../../components/Main/Header";
import Navbar from "../../components/Main/Navbar";

export default function Home() {
  // const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Container>
      <Navbar />
      <Main>
        <Header />
        <ContentWrapper></ContentWrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;

  background-color: ${(props) => props.theme.colors.white};
`;

const Main = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 76px;
`;
