import Image from "next/image";

export default function OurTeamDetails({ member }) {
  return (
    <div className="team_member">
      <div className="member_img">
        <Image src={member.photo} alt="our_team" width={300} height={300} />
      </div>
      <div className="flex flex-direction-column region-lr region-tn gap-small">
        <div className="flex flex-align-start space-between">
          <a className="no-hover-effect">
            <h3 className="no-padding">{member.name}</h3>
          </a>
          <a href={member.linkedIn} target="_blank">
            <Image
              src={"/images/social/linkedin-color.svg"}
              width={18}
              height={18}
              alt="linkedin"
            />
          </a>
        </div>
        <p className="body2-bold no-padding">{member.role}</p>
      </div>
    </div>
  );
}
