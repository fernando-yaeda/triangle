import styled from "styled-components";
import Header from "../../components/Main/Header";
import Navbar from "../../components/Main/Navbar";

export default function Home() {
  // const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Container>
      <Navbar />
      <Header />
      <ContentWrapper></ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;

  display: flex;

  background-color: ${(props) => props.theme.colors.white};
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
