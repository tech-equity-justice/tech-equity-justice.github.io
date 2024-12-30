import Layout from "../components/layout";
import ShowMembers from "../components/showMembers";
import MemberCardDetails from "../components/memberCardDetails";
import { getSortedMembersData } from "../lib/getMembers";

export async function getStaticProps() {
  const secondPBC = getSortedMembersData("pbc-202404");
  return {
    props: {
      secondPBC,
    },
  };
}

export default function firstCohort(props) {
  let secondPBC = props.secondPBC;
  return (
    <Layout>
      <div className="wrapper">
        <div className="hero region-top-md">
          <ShowMembers
            members={secondPBC}
            title="Apr-2024 Pre-Bootcamp Fellows"
            tagID="PBC-202404"
            Component={MemberCardDetails}
          />
        </div>
      </div>
    </Layout>
  );
}
