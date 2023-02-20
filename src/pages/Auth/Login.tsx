import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Header/Button";
import Header from "../../components/Header/Header";
import Logo from "../../components/Header/Logo";
import {
  Container,
  Form,
  HorizontalLine,
  Input,
  Link,
  Title,
} from "../../components/Auth/index";
import { login } from "../../services/Login";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function submit(event: FormEvent) {
    event.preventDefault();
    try {
      await login(loginInfo.email, loginInfo.password);
      toast.success("You have successfully logged in. Enjoy your experience!");
      navigate("/home");
    } catch (error) {
      toast.error("Incorrect username or password. Please try again.");
    }
  }

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={submit}>
          <Input
            placeholder="email"
            type="email"
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <Input
            placeholder="password"
            type="password"
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <Button type="submit" width="100%">
            Login
          </Button>
          <HorizontalLine />
        </Form>
        <Link to="/sign-up">Don't have an account? Sign up here!</Link>
      </Container>
    </>
  );
}
