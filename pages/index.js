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
import Testimonials from "../components/testimonials";

export async function getStaticProps() {
  const allBoardMembersData = getSortedMembersData("board");
  const allAdvisoryMembersData = getSortedMembersData("advisory");
  const firstPBC = getSortedMembersData("pbc-202401");
  const successStories = getSortedMembersData("success-story");
  const testimonial = getSortedMembersData("testimonials");

  return {
    props: {
      allBoardMembersData,
      allAdvisoryMembersData,
      firstPBC,
      successStories,
      testimonial,
    },
  };
}

export default function Home(props) {
  let allBoardMembersData = props.allBoardMembersData;
  let allAdvisoryMembersData = props.allAdvisoryMembersData;
  let firstPBC = props.firstPBC;
  let successStories = props.successStories;
  let testmony = props.testimonial;
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
            members={firstPBC}
            title="PRE-B00TCAMP FELLOWS (202401)"
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
