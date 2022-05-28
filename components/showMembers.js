import MemberCardDetails from "../components/memberCardDetails";

// Component takes another component as argument
// in the 'Component' parameter
// We are using this almost like an interface in Java
// Where any 'Component' takes the same props
// to render in customized way
export default function ShowMembers({
  members,
  title,
  Component = MemberCardDetails,
}) {
  return (
    <>
      <div>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container grid grid-4up">
        {members.map((member) => (
          <Component member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
