import Footer from "./footer";
import HeadMatter from "./head";
import Menu from "./menu";
import Modal from "./modal";

export default function Layout({ children }) {
  return (
    <>
      <HeadMatter />
      <Menu />
      {children}
      <Footer />
      <Modal />
    </>
  );
}
