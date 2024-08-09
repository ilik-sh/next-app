
import { Modal } from "@/shared/ui/modal";
import { AddEquipment } from "@/widgets/add-equipment";

type Props = {};

export default function Page({}: Props) {
  return (
    <Modal>
      <AddEquipment />
    </Modal>
  );
}
