import Footer from "../components/footer";
import Menu from "../components/menu";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const allAlumni2022 = getSortedMembersData("alumni-2022");
  const teachingAlumni = getSortedMembersData("teaching-fellow-2022");
  return {
    props: {
      allAlumni2022,
      teachingAlumni,
    },
  };
}

export default function FirstCohort(props) {
  let allAlumni2022 = props.allAlumni2022;
  let teachingAlumni = props.teachingAlumni;
  return (
    <div>
      <Menu />
      <div className="wrapper">
        <ShowMembers
          members={allAlumni2022}
          title="2022 TEJ Fellows"
          tagID="alumni-2022"
          Component={MemberCardDetails}
        />
        <ShowMembers
          members={teachingAlumni}
          title="Teaching Fellow"
          tagID="teaching-fellow-2022"
          Component={MemberCardDetails}
        />
      </div>

      <Footer />
    </div>
  );
}
