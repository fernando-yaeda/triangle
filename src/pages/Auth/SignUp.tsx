import { FormEvent, useState } from "react";
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
import { signUp } from "../../services/SignUp";

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const navigate = useNavigate();

  async function submit(event: FormEvent) {
    event.preventDefault();
    try {
      await signUp(signUpInfo.email, signUpInfo.fullName, signUpInfo.password);
      toast.success("Congratulations! You have successfully signed up.");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    }
  }

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Container>
        <Title>Sign Up</Title>
        <Form onSubmit={submit}>
          <Input
            placeholder="full name"
            type="text"
            value={signUpInfo.fullName}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, fullName: e.target.value })
            }
          />
          <Input
            placeholder="email"
            type="email"
            value={signUpInfo.email}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, email: e.target.value })
            }
          />
          <Input
            placeholder="password"
            type="password"
            value={signUpInfo.password}
            onChange={(e) =>
              setSignUpInfo({ ...signUpInfo, password: e.target.value })
            }
          />
          <Button type="submit" width="100%">
            Sign Up
          </Button>
          <HorizontalLine />
        </Form>
        <Link to="/login">Already have an account? Login</Link>
      </Container>
    </>
  );
}
