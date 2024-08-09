export default function Layout({
    children,
    addEquipment,
  }: {
    children: React.ReactNode;
    addEquipment: React.ReactNode;
  }) {
    return (
      <>
        <div>{children}</div>
        <div>{addEquipment}</div>
      </>
    );
  }
  