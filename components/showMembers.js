import MemberCard from "./memberCard";
import MemberCardDetails from "./memberCardDetails";

export default function ShowMembers({ members, title }) {
  return (
    <>
      <div>
        <p className="h2">{title}</p>
      </div>
      <div className="card-container grid grid-4up">
        {members.map((member) => (
          // <MemberCard member={member} key={member.id} />
          <MemberCardDetails member={member} key={member.id} />
        ))}
      </div>
    </>
  );
}
