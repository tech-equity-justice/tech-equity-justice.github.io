import Image from "next/image";

export default function StoryCardDetails({ member }) {
  return (
    <div>
      <div>
        <div>
          <Image src={member.photo} alt="" width={50} height={50} />
        </div>
        <div>
          <div>{member.name}</div>
          <div>{member.title}</div>
          <div>{member.company}</div>
          <div>
            <Image src={member.logo} alt="" width={90} height={40} />
          </div>
        </div>
        <div>
          <Image
            src="/images/logos/TEJ-main-lg.png"
            alt="TEJ Fellowship logo"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div>{member.content}</div>
      <div>Read more</div>
    </div>
  );
}
