import Layout from "../components/layout";
import Hero from "../components/hero";
import Eligibility from "../components/eligibility";
import AboutUs from "../components/aboutUs";
import ShowMembers from "../components/showMembers";
import { getSortedMembersData } from "../lib/getMembers";
import ContactUs from "../components/contactUs";
import MemberCardDetails from "../components/memberCardDetails";
import OurTeamDetails from "../components/ourTeamDetails";
import ShowStories from "../components/showStories";
import OurPrograms from "../components/ourPrograms";
import Testimonials from "../components/testimonials";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const fourthPBC = getSortedMembersData("pbc-202502");
  const successStories = getSortedMembersData("success-story");
  const caseStudies = getSortedMembersData("case-studies");
  const testimonial = getSortedMembersData("testimonials");
  const ourTeam = getSortedMembersData("our-team");

  successStories.map((story) =>
    caseStudies.find((caseStudy) => caseStudy.id === story.id)
      ? (story.caseStudy = true)
      : (story.caseStudy = false)
  );
  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      fourthPBC,
      successStories,
      testimonial,
      ourTeam,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let fourthPBC = props.fourthPBC;
  let successStories = props.successStories;
  let testmony = props.testimonial;
  let ourTeam = props.ourTeam;
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
            members={fourthPBC}
            title="FEB-2025 PRE-B00TCAMP FELLOWS"
            tagID="pbc-202502"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={allBoardMembersData}
            title="BOARD"
            tagID="team"
            gridStyle="grid-4up"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={ourTeam}
            title="TEAM"
            tagID="our-team"
            gridStyle="grid-3up"
            Component={OurTeamDetails}
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
        <Testimonials
          members={testmony}
          title="TESTIMONIALS"
          tagID="testimonials"
        />
        <ContactUs />
      </div>
    </Layout>
  );
}
