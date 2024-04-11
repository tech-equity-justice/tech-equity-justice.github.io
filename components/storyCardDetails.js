import { useState } from "react";
import Image from "next/image";

export default function StoryCardDetails({ member }) {
  const [buttonDisplay, setButtonDisplay] = useState("Read more");
  const [designationDisplay, setDesignationDisplay] = useState(false);

  const toggleDisplay = () => {
    setButtonDisplay(buttonDisplay === "Read more" ? "" : "Read more");
    setDesignationDisplay(designationDisplay);
  };

  return (
    <div className="success_card">
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
        <>
          <p className="alumni_content" style={{ height: "7.5em" }}>
            <span dangerouslySetInnerHTML={{ __html: member.content }} />
          </p>
          <div className="content_detail" onClick={toggleDisplay}>
            {buttonDisplay}
          </div>
        </>
      )}
    </div>
  );
}
