import { CaretRight } from "@phosphor-icons/react";
import { Card } from "../../../components/Main/Card";
import useAuth from "../../../hooks/useAuth/useAuth";

export function SetUpAccountCard() {
  const { user } = useAuth();

  return (
    <Card
      title={`Hi ${user?.firstName}, you are almost done.`}
      subtitle="Please complete few steps to setup your account completely."
      buttonText="Setup Account"
      buttonIcon={<CaretRight size={20} />}
      iconFirst={false}
      hasContent={false}
    ></Card>
  );
}
