import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import ContactUs from "../components/contactUs";
import MemberCardDetails from "../components/memberCardDetails";
import ShowStories from "../components/showStories";
import OurPrograms from "../components/ourPrograms";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const secondPBC = getSortedMembersData("pbc-202404");
  const successStories = getSortedMembersData("success-story");
  const caseStudies = getSortedMembersData("case-studies");

  successStories.map((story) =>
    caseStudies.find((caseStudy) => caseStudy.id === story.id)
      ? (story.caseStudy = true)
      : (story.caseStudy = false)
  );

  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      secondPBC,
      successStories,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let secondPBC = props.secondPBC;
  let successStories = props.successStories;
  return (
    <Layout>
      {/* <!-- Blob --> */}
      <div className="blob"></div>
      {/* <!-- Blob ends --> */}

      <div className="flow-xlg">
        <Hero />
        <OurPrograms />
        <AboutUs />
        <Eligibility />
        <div className="wrapper">
          <ShowMembers
            members={secondPBC}
            title="APR-2024 PRE-B00TCAMP FELLOWS"
            tagID="pbc-202404"
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
        <ShowStories
          members={successStories}
          title="SUCCESS STORIES"
          tagID="alumni-story"
        />
        <ContactUs />
      </div>
    </Layout>
  );
}
