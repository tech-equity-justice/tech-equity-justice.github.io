import StoryCardDetails from "./storyCardDetails";
export default function ShowStories({ members, title, tagID }) {
  return (
    <>
      <div className="pink-block">
        <div className="wrapper">
          <div id={tagID && tagID}>
            <p className="h2 align-center primary-color region-md">{title}</p>
          </div>
          <div className="card-wrapper">
            {members.map((member) => (
              <StoryCardDetails member={member} key={member.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
