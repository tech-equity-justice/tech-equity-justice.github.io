import Image from "next/image";
export default function StoryCardDetails({ member }) {
  return (
    <div
      className="success_card"
      style={{
        display: "flex",
        "flex-flow": "column",
      }}
    >
      <div className="alumni_card">
        <div className="alumni_image">
          <Image
            src={member.photo}
            alt={member.name}
            width={100}
            height={100}
          />
        </div>
        <div className="alumni_info">
          <div className="info_font">
            {member.linkedIn !== "" ? (
              <a target="_blank" rel="noreferrer" href={member.linkedIn}>
                <h3>{member.name}</h3>
              </a>
            ) : (
              <a>
                <h3>{member.name}</h3>
              </a>
            )}
            <p>{member.title}</p>
          </div>
          <div className="company_logo">
            <a target="_blank" href={member.company_logo}>
              <Image
                src={member.logo}
                alt={member.logo}
                width={120}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
      {member.content !== "" && (
        <div
          style={{
            display: "flex",
            "flex-direction": "column",
            "justify-content": "space-between",
            "flex-grow": "1",
          }}
        >
          <p className="alumni_content">
            <span dangerouslySetInnerHTML={{ __html: member.content }} />
          </p>
          {member.caseStudy && (
            <div className="content_detail">
              <a href={`story/${member.id}`}>Read case study</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
