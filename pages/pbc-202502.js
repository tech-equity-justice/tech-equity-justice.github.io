import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const fourthPBC = getSortedMembersData("pbc-202502");
  return {
    props: {
      fourthPBC,
    },
  };
}

export default function firstCohort(props) {
  let fourthPBC = props.fourthPBC;
  return (
    <Layout>
      <div className="wrapper">
        <div className="hero region-top-md">
          <ShowMembers
            members={fourthPBC}
            title="Feb-2025 Pre-Bootcamp Fellows"
            tagID="PBC-202502"
            Component={MemberCardDetails}
          />
        </div>
      </div>
    </Layout>
  );
}
