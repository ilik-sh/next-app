import React from 'react';

import { SignUp } from '@/widgets/sign-up';

import { Modal } from '@/shared/ui//modal';

type Props = {};

export default function SignUpModal({}: Props) {
  return (
    <Modal>
      <SignUp />
    </Modal>
  );
}
