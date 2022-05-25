import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import HowWeWork from "../components/howWeWork";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import MailChimp from "../components/mailChimp";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
    },
  };
}
export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
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
        <div className="wrapper" id="team">
          <ShowMembers members={allBoardMembersData} title="BOARD" />
          <ShowMembers
            members={allAdvisoryMembersData}
            title="ADVISORY GROUP"
          />
        </div>
        <MailChimp />
      </div>
    </Layout>
  );
}
