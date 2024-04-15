import StoryCardDetails from "./storyCardDetails";

// Component takes another component as argument
// in the 'Component' parameter
// We are using this almost like an interface in Java
// Where any 'Component' takes the same props
// to render in customized way
export default function ShowStories({
  members,
  title,
  tagID,
  Component = StoryCardDetails,
}) {
  return (
    <>
      <div id={tagID && tagID}>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container">
        <div className="card-wrapper">
          {members.map((member) => (
            <Component member={member} key={member.id} />
          ))}
        </div>
      </div>
    </>
  );
}
