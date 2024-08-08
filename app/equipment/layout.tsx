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
      <Link href="/signIn">SignIn</Link>
      <Link href="/signUp">SignUp</Link>
      <div>{children}</div>
      <div>{auth}</div>
    </>
  );
}
