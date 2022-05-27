// Creating a higher order function that
// takes a component and returns with it
// wrapped around by additional functionality
export default function ShowMembers(Component) {
  return function ShowMembersComponent({ members, title }) {
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
  };
}
