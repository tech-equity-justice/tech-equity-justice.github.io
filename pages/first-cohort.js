import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MailChimp from "../components/mailChimp";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const allAlumni2022 = getSortedMembersData("alumni-2022");
  return {
    props: {
      allAlumni2022,
    },
  };
}

// export default function Home(props) {
//   let allBoardMembersData = props.allBoardMembersData;
//   let allAdvisoryMembersData = props.allAdvisoryMembersData;
//   let allFellows2022 = props.allFellows2022;

export default function FirstCohort(props) {
  let allAlumni2022 = props.allAlumni2022;
  return (
    <Layout>
      <div>
        <ShowMembers
          members={allAlumni2022}
          title="2022 TEJ Fellows"
          tagID="alumni-2022"
          Component={MemberCardDetails}
        />
      </div>
      <MailChimp />
    </Layout>
  );
}
