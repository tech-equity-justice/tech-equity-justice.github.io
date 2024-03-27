import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import HowWeWork from "../components/howWeWork";
import AboutPBC from "../components/aboutPBC";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import ContactUs from "../components/contactUs";
import MemberCardDetails from "../components/memberCardDetails";
import ShowStories from "../components/showStories";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const firstPBC = getSortedMembersData("pbc-202401");
  const successStories = getSortedMembersData("success-stories");

  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      firstPBC,
      successStories,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let firstPBC = props.firstPBC;
  let successStories = props.successStories;
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
        <AboutPBC />
        <div className="wrapper">
          <ShowMembers
            members={firstPBC}
            title="CURRENT TEJ PBC FELLOWS"
            tagID="pbc-202401"
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
          <ShowStories
            members={successStories}
            title="SUCCESS STORIES"
            tagID="alumni-story"
            Component={MemberCardDetails}
          />
        </div>
        <ContactUs />
      </div>
    </Layout>
  );
}
