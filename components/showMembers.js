import MemberCard from "./memberCard";

export default function ShowMembers({ members, title }) {
  return (
    <>
      <div>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container grid grid-4up">
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
