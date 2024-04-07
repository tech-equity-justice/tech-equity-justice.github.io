import Image from "next/image";

export default function StoryCardDetails({ member }) {
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
      <div>{member.content}</div>
      <div>Read more</div>
    </div>
  );
}
