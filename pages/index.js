import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import HowWeWork from "../components/howWeWork";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import ContactUs from "../components/contactUs";
import MemberCardDetails from "../components/memberCardDetails";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const allFellows2023 = getSortedMembersData("fellows-2023");
  const teachingFellow = getSortedMembersData("teaching-fellow-2023");

  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      allFellows2023,
      teachingFellow,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let allFellows2023 = props.allFellows2023;
  let teachingFellow = props.teachingFellow;
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
        <div className="wrapper">
          <ShowMembers
            members={allFellows2023}
            title="2023 TEJ Fellows"
            tagID="fellows-current"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={teachingFellow}
            title="Teaching Fellows"
            tagID="teaching-fellow-2023"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={allBoardMembersData}
            title="BOARD"
            tagID="team"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={allAdvisoryMembersData}
            title="ADVISORY GROUP"
            Component={MemberCardDetails}
          />
        </div>
        <ContactUs />
      </div>
    </Layout>
  );
}
