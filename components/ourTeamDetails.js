import Image from "next/image";

export default function OurTeamDetails({ member }) {
  return (
    <div className="team_member">
      <div className="member_img">
        <Image src={member.photo} alt="our_team" width={300} height={300} />
      </div>
      <a className="no-hover-effect">
        <h3>{member.name}</h3>
      </a>
      <p>{member.role}</p>
      <a
        style={{ width: "25px", height: "25px" }}
        href={member.linkedIn}
        target="_blank"
      >
        <Image
          src={"/images/social/linkedin.svg"}
          width={25}
          height={25}
          alt="linkedin"
        />
      </a>
    </div>
  );
}
