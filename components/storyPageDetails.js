import Image from "next/image";
export default function StoryPageDetails({ member }) {
  return (
    <div>
      <div className="page-grid">
        <div className="page-img">
          <Image
            src={member.photo}
            alt={member.name}
            height={400}
            width={400}
          />
        </div>
        <div className="page_info">
          {member.linkedIn !== "" ? (
            <a target="_blank" rel="noreferrer" href={member.linkedIn}>
              <h2>{member.name}</h2>
            </a>
          ) : (
            <a>
              <h2>{member.name}</h2>
            </a>
          )}
          <p>{member.title}</p>
          <div className="company_logo">
            <a target="_blank" href={member.company_logo}>
              <Image
                src={member.logo}
                alt={member.logo}
                width={150}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
      {member.content !== "" && (
        <>
          <p className="page_content">
            <span dangerouslySetInnerHTML={{ __html: member.content }} />
          </p>
        </>
      )}
    </div>
  );
}
