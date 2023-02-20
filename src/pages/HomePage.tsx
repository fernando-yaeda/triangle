import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo";
import Button from "../components/Header/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Logo />
        <ButtonsContainer>
          <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
          <Button onClick={() => navigate("/login")}>Log In</Button>
        </ButtonsContainer>
      </Header>
      <Container>
        <Card>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusamus
          dicta natus eum aliquid ad labore praesentium error, adipisci
          aspernatur quos minima libero similique unde quae iste vel corrupti
          ipsum iusto explicabo? Debitis minima nostrum facilis quam architecto
          reprehenderit magni vel repellendus ad vero recusandae necessitatibus
          ducimus ea dolores iure enim eligendi, suscipit nesciunt cupiditate
          ullam pariatur doloremque eius adipisci dolorem? Alias vitae cum hic
          repellendus possimus? Excepturi odit vel quo molestias obcaecati atque
          dolorum ut libero mollitia aperiam rerum corporis quos, veniam
          doloremque, officia provident exercitationem esse explicabo? Libero
          aperiam odit natus magni earum. Ratione impedit quis illum beatae?
        </Card>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
        expedita molestiae! Ipsum eum a aliquam possimus doloremque quis
        doloribus id cum voluptatum consequatur inventore quam accusantium,
        laborum repellat tempore maxime quidem voluptatibus dolorem magni, dicta
        reprehenderit quos. Ratione nesciunt hic, mollitia laudantium nulla quos
        dignissimos ipsum facere saepe neque. Quasi facilis mollitia
        voluptatibus laudantium? Voluptates voluptatem obcaecati modi porro
        debitis quis blanditiis ducimus qui sapiente, quia dolor, eaque dolorum
        voluptatum culpa aut similique minima vitae reprehenderit corporis iusto
        sint repellendus et? Vel libero magni velit! Voluptatum doloribus eius
        magnam neque necessitatibus, quasi sapiente repellendus molestiae quidem
        tempore vero quos ratione placeat, voluptates fugiat velit sint nam
        deserunt, quisquam corporis sed nemo doloremque suscipit? Fugit
        necessitatibus animi quasi quae ullam consectetur id voluptas laborum,
        laboriosam neque, aliquid veniam illum adipisci, maiores accusantium.
        Quis nesciunt mollitia doloribus modi quasi laboriosam quisquam illum
        deleniti commodi cupiditate nobis repudiandae repellat accusantium,
        provident eaque consequatur, ab, nihil amet. Sapiente maiores sint ipsam
        laborum culpa deserunt ex nam et, ad est numquam atque nobis id amet
        exercitationem qui, veniam blanditiis voluptatum? Aliquam facilis
        similique, amet modi saepe harum porro, aliquid et dolor vitae quo fugit
        provident ullam. Doloremque tempora facere corrupti laudantium, alias,
        sed quis fugiat quas repellat, recusandae quod perspiciatis suscipit
        explicabo! Quaerat dicta in fugit eaque eligendi, et, quas distinctio
        eius vitae mollitia illo. Aliquam odit ducimus doloremque? Odio
        explicabo rem temporibus recusandae consequatur modi excepturi,
        veritatis distinctio id eveniet, non illo nulla voluptatum, natus sed
        repellendus aperiam exercitationem nostrum eligendi maxime totam! Modi
        explicabo aperiam ullam quidem et doloremque in accusantium ab
        perspiciatis, autem excepturi non. Sit, iure rem? Animi error facere
        suscipit maiores illo nemo, adipisci blanditiis quaerat tempore commodi
        doloribus nulla, dolores quae eligendi placeat obcaecati. Et eos
        temporibus vitae porro, corporis facere perferendis, quidem sed aut
        neque pariatur minima consequatur est dignissimos quasi laboriosam
        sapiente incidunt. Natus ullam itaque soluta debitis magni sunt quae
        amet est sequi repellendus, nobis porro quas, in perspiciatis nesciunt
        totam dicta illum iusto ipsam rerum earum quasi. Doloremque consectetur
        neque eius odit ullam nam accusamus porro dolore ab illo assumenda,
        architecto non ratione blanditiis, eos ad cupiditate nesciunt
        consequuntur aliquid esse eum dignissimos? Vero reprehenderit commodi
        incidunt tempora accusantium amet omnis nesciunt molestias recusandae
        repudiandae voluptatum nulla voluptatibus itaque, corporis enim quos
        labore aliquid reiciendis quia quidem alias dignissimos! Nostrum
        corporis commodi similique alias suscipit rerum repellendus nesciunt non
        vitae pariatur cupiditate nisi earum beatae minima neque, at, cumque
        dignissimos, cum eligendi tempore sint soluta autem? Quae ad dolores,
        iusto iste placeat harum consectetur nulla, voluptatibus qui velit
        similique sint expedita ut obcaecati? Hic aut at architecto perferendis
        harum nemo eius, consequatur, ut voluptatibus rem molestias a
        consequuntur beatae eveniet quae asperiores iste minima maxime amet
        eaque unde quidem repellat itaque suscipit! Consectetur dolores ea ullam
        necessitatibus esse obcaecati quam veritatis labore! Voluptatibus fuga
        et a consequatur necessitatibus voluptatem, quidem quod dolorem totam
        soluta vitae quasi odit repellat accusamus esse tempora blanditiis amet
        inventore voluptas dolores! Ea voluptates nihil numquam commodi sapiente
        iusto. Rerum, totam.
      </Container>
    </>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Container = styled.div`
  width: 88vw;

  display: flex;
  flex-direction: column;

  margin: 60px auto;
`;

const Card = styled.div`
  height: 600px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
