import StoryPageDetails from "./storyPageDetails";
import { useRouter } from "next/router";

// Component takes another component as argument
// in the 'Component' parameter
// We are using this almost like an interface in Java
// Where any 'Component' takes the same props
// to render in customized way
export default function StoryPage({
  members,
  title,
  tagID,
  Component = StoryPageDetails,
}) {
  const router = useRouter();
  const { id } = router.query;
  const selectedMember = members.filter(
    (member) => Number(member.id) === Number(id)
  );
  return (
    <>
      <div id={tagID && tagID}>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container">
        {selectedMember.map((member) => (
          <Component member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
