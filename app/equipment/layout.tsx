import Link from "next/link";

export default function Layout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>{auth}</div>
    </>
  );
}
