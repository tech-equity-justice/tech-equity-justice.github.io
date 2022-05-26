export default function MemberCardDetails({ member }) {
  return (
    <div className="team_member">
      <div className="member_img">
        <img src={member.photo} alt="our_team" />
      </div>
      <a target="_blank" rel="noreferrer" href={member.linkedIn}>
        <h3>{member.name}</h3>
      </a>
      {member.content !== "" && (
        <>
          <p className="content" id="content-1">
            {member.content}
          </p>
          <button className="read-more-team" id="read-more-team-1">
            Read more
          </button>
          <button className="read-less-team" id="read-less-team-1">
            Read less
          </button>
        </>
      )}
    </div>
  );
}
