import { useState } from "react";

export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    fullName: "",
    password: "",
    passwordConfirmation: "",
  });
  return <h1>signUp</h1>;
}
