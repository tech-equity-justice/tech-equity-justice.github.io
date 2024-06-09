import Image from "next/image";

export default function TestimonyModal({ member, onClose }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="flex flex-center testimony-modal" onClick={handleClick}>
      <div
        className="testimony-modal-card success_card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="testimony-modal_close" onClick={onClose}>
          &times;
        </button>
        <div className="alumni_card grid-template-testimony">
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
            <p className="alumni_content">
              <span dangerouslySetInnerHTML={{ __html: member.content }} />
            </p>
          </>
        )}
        <div className="content_detail margin-top-testimony"></div>
      </div>
    </div>
  );
}
