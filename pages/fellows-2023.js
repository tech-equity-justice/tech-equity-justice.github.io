import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const allAlumni2023 = getSortedMembersData("alumni-2023");
  const teachingAlumni = getSortedMembersData("teaching-fellow-2023");
  return {
    props: {
      allAlumni2023,
      teachingAlumni,
    },
  };
}

export default function SecondCohort(props) {
  let allAlumni2023 = props.allAlumni2023;
  let teachingAlumni = props.teachingAlumni;
  return (
    <Layout>
      <div className="wrapper">
        <div className="hero region-top-md">
          <ShowMembers
            members={allAlumni2023}
            title="2023 TEJ Fellows"
            tagID="alumni-2023"
            Component={MemberCardDetails}
          />
          <ShowMembers
            members={teachingAlumni}
            title="Teaching Fellow"
            tagID="teaching-fellow-2023"
            Component={MemberCardDetails}
          />
        </div>
      </div>
    </Layout>
  );
}
