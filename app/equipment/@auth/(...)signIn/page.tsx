import { SignIn } from "@/widgets/sign-in";
import { Modal } from "@/shared/ui/modal";

type Props = {};

export default function SignInModal({}: Props) {
  return (
    <Modal>
      <SignIn />
    </Modal>
  );
}
