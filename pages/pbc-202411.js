import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const thirdPBC = getSortedMembersData("pbc-202411");
  return {
    props: {
      thirdPBC,
    },
  };
}

export default function firstCohort(props) {
  let thirdPBC = props.thirdPBC;
  return (
    <Layout>
      <div className="wrapper">
        <div className="hero region-top-md">
          <ShowMembers
            members={thirdPBC}
            title="Nov-2024 Pre-Bootcamp Fellows"
            tagID="PBC-202411"
            Component={MemberCardDetails}
          />
        </div>
      </div>
    </Layout>
  );
}
