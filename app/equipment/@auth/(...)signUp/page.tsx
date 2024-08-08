import { SignUp } from "@/widgets/sign-up";
import { Modal } from "@/shared/ui//modal";
import React from "react";

type Props = {};

export default function SignUpModal({}: Props) {
  return (
    <Modal>
      <SignUp />
    </Modal>
  );
}
