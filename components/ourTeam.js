import OurTeamDetails from "./ourTeamDetails";
export default function OurTeam({ members, title, tagID }) {
  return (
    <>
      <div id={tagID && tagID}>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container grid grid-4up">
        {members.map((member) => (
          <OurTeamDetails member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
