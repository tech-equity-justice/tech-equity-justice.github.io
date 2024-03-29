import { useState } from "react";
import Image from "next/image";

export default function MemberCardDetails({ member }) {
  const startHeight = "7.2em";
  const [height, setHeight] = useState(startHeight);
  const [buttonDisplay, setButtonDisplay] = useState("Read more");
  const [designationDisplay, setDesignationDisplay] = useState(true);

  const toggleDisplay = () => {
    setHeight(height === startHeight ? "auto" : startHeight);
    setButtonDisplay(buttonDisplay === "Read more" ? "Read less" : "Read more");
    setDesignationDisplay(designationDisplay);
  };

  return (
    <div className="team_member">
      <div className="member_img">
        <Image src={member.photo} alt="our_team" width={300} height={300} />
      </div>
      {member.linkedIn !== "" ? (
        <a target="_blank" rel="noreferrer" href={member.linkedIn}>
          <h3>{member.name}</h3>
        </a>
      ) : (
        <a>
          <h3>{member.name}</h3>
        </a>
      )}
      {member.content !== "" && (
        <>
          <p className="content" style={{ height: height }}>
            <span dangerouslySetInnerHTML={{ __html: member.content }} />
          </p>
          <button
            className="read-more-team fire-button"
            onClick={toggleDisplay}
          >
            {buttonDisplay}
          </button>
        </>
      )}
    </div>
  );
}
