import styled from "styled-components";
import Navbar from "../../components/Navbar";

export default function Home() {
  // const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <Container>
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;

  background-color: ${(props) => props.theme.colors.white};
`;
