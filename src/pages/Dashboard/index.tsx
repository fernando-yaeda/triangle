import styled from "styled-components";
import Header from "../../components/Main/Header";
import Navbar from "../../components/Main/Navbar";

export default function Dashboard() {
  // const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Container>
      <Navbar />
      <Header />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;

  background-color: ${(props) => props.theme.colors.white};
`;
