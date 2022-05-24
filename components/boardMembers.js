import BoardMemberCard from "./boardMemberCard";

export default function BoardMembers({ members }) {
  return (
    <div className="wrapper" id="team">
      <div>
        <p className="h2">BOARD</p>
      </div>
      <div className="card-container grid grid-4up">
        {members.map((member) => (
          <BoardMemberCard member={member} key={member.id} />
        ))}
      </div>
    </div>
  );
}
