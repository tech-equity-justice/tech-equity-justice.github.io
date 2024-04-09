import { useState } from "react";
import Image from "next/image";

export default function StoryCardDetails({ member }) {
  // const startHeight = "7.2em";
  // const [height, setHeight] = useState(startHeight);
  const [buttonDisplay, setButtonDisplay] = useState("Read more");
  const [designationDisplay, setDesignationDisplay] = useState(false);

  const toggleDisplay = () => {
    // setHeight(height === startHeight ? "" : startHeight);
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
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
          <div className="company_logo">
            <Image src={member.logo} alt={member.logo} width={90} height={50} />
          </div>
        </div>
      </div>
      {member.content !== "" && (
        <>
          <p className="alumni_content" style={{ height: "8em" }}>
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
