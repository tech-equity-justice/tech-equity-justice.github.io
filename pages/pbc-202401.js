import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const firstPBC = getSortedMembersData("pbc-202401");
  return {
    props: {
      firstPBC,
    },
  };
}

export default function firstCohort(props) {
  let firstPBC = props.firstPBC;
  return (
    <Layout>
      <div className="wrapper">
        <div className="hero region-top-md">
          <ShowMembers
            members={firstPBC}
            title="PBC 202401 TEJ Fellows"
            tagID="PBC-202401"
            Component={MemberCardDetails}
          />
        </div>
      </div>
    </Layout>
  );
}
