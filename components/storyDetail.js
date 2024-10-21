import Image from "next/image";
export default function StoryPageDetails({ member }) {
  return (
    <div className="wrapper">
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
                height={60}
              />
            </a>
          </div>
          {member.content_heading !== "" && (
            <>
              <p className="bold2bold region-top-md content-border-top line-height-2rem">
                {member.content_heading}
              </p>
            </>
          )}
          {member.content !== "" && (
            <>
              <p className="page_content">
                <span dangerouslySetInnerHTML={{ __html: member.content }} />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
