import Image from "next/image";

export default function TestimonyModal({ member, onClose }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="testimony-modal flex flex-center" onClick={handleClick}>
      <div
        className="testimony-modal-card success_card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-direction-sm space-between">
          <div className="flex flex-column-testimony flex-start-sm  margin-top-testimony">
            <div className="modal-image">
              <Image
                src={member.photo}
                alt={member.name}
                width={100}
                height={100}
              />
            </div>
            <div className="testimony-info">
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
          <div className="testimony-modal_close">
            <span className="flex close-button" onClick={onClose}>
              &times;
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="quote-width">
            <Image
              src={"/images/quote/quote.svg"}
              width={25}
              height={25}
              alt="quote"
            />
          </div>
          {member.content !== "" && (
            <>
              <p className="testimony-content">
                <span dangerouslySetInnerHTML={{ __html: member.content }} />
              </p>
            </>
          )}
        </div>
        <div className="content_detail margin-top-testimony"></div>
      </div>
    </div>
  );
}
