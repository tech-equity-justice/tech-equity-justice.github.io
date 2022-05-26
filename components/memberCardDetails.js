import { useState } from "react";

export default function MemberCardDetails({ member }) {
  const startHeight = "7.2em";
  const [height, setHeight] = useState(startHeight);
  const [buttonDisplay, setButtonDisplay] = useState("Read more");

  const toggleDisplay = () => {
    setHeight(height === startHeight ? "auto" : startHeight);
    setButtonDisplay(buttonDisplay === "Read more" ? "Read less" : "Read more");
  };

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
          <p className="content" style={{ height: height }}>
            {member.content}
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
