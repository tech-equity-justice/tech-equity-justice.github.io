export default function MemberCard({ member }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card_img">
          <img src={member.photo} />
        </div>
        <div className="card_title">
          <a target="_blank" href={member.linkedIn} className="body1">
            {member.name}
          </a>
        </div>
      </div>
    </div>
  );
}
