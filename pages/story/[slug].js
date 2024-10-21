import StoryDetail from "../../components/storyDetail";
import { getSortedMembersData } from "../../lib/getMembers";
import Layout from "../../components/layout";

export default function Page({ storyData }) {
  return (
    <div>
      <Layout>
        <StoryDetail member={storyData} />
      </Layout>
    </div>
  );
}

export function getStaticPaths() {
  const successStories = getSortedMembersData("success-story");

  const allStories = [...successStories];

  const id = allStories.map((story) => ({
    params: { slug: `${story.id}` },
  }));

  return {
    paths: id,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  let successStories = getSortedMembersData("case-studies");
  let storyData = successStories.find((story) => story.id == params.slug);

  if (!storyData) {
    successStories = getSortedMembersData("success-story");
    storyData = successStories.find((story) => story.id == params.slug);
  }

  return {
    props: {
      storyData,
    },
  };
}
