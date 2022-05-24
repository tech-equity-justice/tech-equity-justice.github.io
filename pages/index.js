import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import HowWeWork from "../components/howWeWork";
import BoardMembers from "../components/boardMembers";

export default function Home(props) {
  return (
    <Layout>
      {/* <!-- Blob --> */}
      <div className="blob"></div>
      {/* <!-- Blob ends --> */}

      <div className="flow-xlg">
        <Hero />
        <Eligibility />
        <AboutUs />
        <HowWeWork />
        <BoardMembers />
      </div>
    </Layout>
  );
}
