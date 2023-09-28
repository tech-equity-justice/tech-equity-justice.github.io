import Footer from "./footer";
import HeadMatter from "./head";
import GTag from "./gTag";
import Menu from "./menu";
import Modal from "./modal";

export default function Layout({ children }) {
  return (
    <>
      <HeadMatter />
      <GTag />
      <Menu />
      {children}
      <Footer />
      <Modal />
    </>
  );
}
