import Image from "next/image";
import { useState } from "react";
import TestimonyModal from "./testimonyModal";

export default function TestimonialDetails({ member }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const toggleDisplay = () => {
    setVisibleModal(!visibleModal);
  };
  return (
    <>
      <div className="success_card" onClick={toggleDisplay}>
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
              <a target="_blank" href={member.company_link}>
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
            <div className="flex">
              <div className="quote-width">
                <Image
                  src={"/images/quote/quote.svg"}
                  width={25}
                  height={25}
                  alt="quote"
                />
              </div>
              <p
                className="testimony-content cursor-modal-detail"
                style={{ height: "7.5em" }}
              >
                {member.content && member.content.length <= 200 ? (
                  <span dangerouslySetInnerHTML={{ __html: member.content }} />
                ) : (
                  member.content.substring(0, 200) + "...."
                )}
              </p>
            </div>
            <div className="content_detail" style={{ borderTop: "none" }}></div>
            {visibleModal && (
              <TestimonyModal onClose={toggleDisplay} member={member} />
            )}
          </>
        )}
      </div>
    </>
  );
}
