import HeadMatter from "./head";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <>
      <HeadMatter />
      <Menu />
      {children}
    </>
  );
}
