export default function MemberCard({ member }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card_img">
          <img src={member.photo} />
        </div>
        <div className="card_title">
          <a
            target="_blank"
            rel="noreferrer"
            href={member.linkedIn}
            className="body1"
          >
            <h3>{member.name}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
