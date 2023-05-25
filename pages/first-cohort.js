//import Layout from "../components/layout";
import Footer from "../components/footer";
import HeadMatter from "../components/head";
import Menu from "../components/menu";

import ShowMembers from "../components/showMembers";
//import MailChimp from "../components/mailChimp";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const allAlumni2022 = getSortedMembersData("alumni-2022");
  //console.log(allAlumni2022, "snake");
  return {
    props: {
      allAlumni2022,
    },
  };
}

export default function FirstCohort(props) {
  let allAlumni2022 = props.allAlumni2022;
  return (
    <div>
      <Menu />
      <div>
        <ShowMembers
          members={allAlumni2022}
          title="2022 TEJ Fellows"
          tagID="alumni-2022"
          Component={MemberCardDetails}
        />
      </div>

      <Footer />
    </div>
  );
}
