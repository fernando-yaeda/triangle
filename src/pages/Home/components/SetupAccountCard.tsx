import { CaretRight } from "@phosphor-icons/react";
import { Card } from "../../../components/Main/Card";

interface SetUpAccountCardProps {
  userSetUpAccount?: string;
}

export function SetUpAccountCard({ userSetUpAccount }: SetUpAccountCardProps) {
  return (
    <Card
      title="Hi Johnson, you are almost done."
      subtitle="Please complete few steps to setup your account completely."
      buttonText="Setup Account"
      buttonIcon={<CaretRight size={20} />}
      iconFirst={false}
      hasContent={false}
    ></Card>
  );
}
