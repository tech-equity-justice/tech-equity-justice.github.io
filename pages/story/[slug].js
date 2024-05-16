import StoryDetail from "../../components/storyDetail";
import { getSortedMembersData } from "../../lib/getMembers";

export default function Page({ storyData }) {
  return (
    <div>
      <StoryDetail member={storyData} />
    </div>
  );
}

export function getStaticPaths() {
  const successStories = getSortedMembersData("success-story");
  const id = successStories.map((story) => ({
    params: { slug: `${story.id}` },
  }));

  return {
    paths: id,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const successStories = getSortedMembersData("success-story");
  const storyData = successStories.find((story) => story.id == params.slug);

  return {
    props: {
      storyData,
    },
  };
}
