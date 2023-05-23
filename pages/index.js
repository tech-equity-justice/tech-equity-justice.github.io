import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import HowWeWork from "../components/howWeWork";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import MailChimp from "../components/mailChimp";
import MemberCard from "../components/memberCard";
import MemberCardDetails from "../components/memberCardDetails";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const allFellows2022 = getSortedMembersData("fellows-2022");
  const allAlumni2022 = getSortedMembersData("alumni-2022");
  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      allFellows2022,
      allAlumni2022,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let allFellows2022 = props.allFellows2022;
  let allAlumni2022 = props.allAlumni2022;
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
            members={allFellows2022}
            title="2022 TEJ Fellows"
            tagID="fellows-2022"
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
        <MailChimp />
      </div>
    </Layout>
  );
}
