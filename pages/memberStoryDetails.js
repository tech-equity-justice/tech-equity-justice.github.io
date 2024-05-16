import { getSortedMembersData } from "../lib/getMembers";
import StoryPage from "../components/storyPage";

export async function getStaticProps() {
  const successStories = getSortedMembersData("success-story");
  return {
    props: {
      successStories,
    },
  };
}

export default function storyDetails(props) {
  let successStories = props.successStories;
  return (
    <>
      <div className="wrapper">
        <StoryPage
          members={successStories}
          title="SUCCESS STORIES"
          tagID="story-page"
        />
      </div>
    </>
  );
}
