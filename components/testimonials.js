import TestimonialDetails from "./testimonialDetails";

export default function Testimonials({ members, title, tagID }) {
  return (
    <div className="pink-block margin-top-0 region-top-none">
      <div className="wrapper">
        <div id={tagID && tagID}>
          <p className="h2 align-center primary-color">{title}</p>
        </div>
        <div>
          <div className="card-wrapper region-top-md">
            {members.map((member) => (
              <TestimonialDetails member={member} key={member.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
