import Image from "next/image";

export default function Footer() {
  return (
    /* footer  */
    <div className="footer dark-block margin-top-0">
      <div className="wrapper flex space-between">
        <div className="grid grid-4up">
          <p className="body2-bold">
            <a href="#about">About us</a>
          </p>
          <a href="#team" className="body2-bold">
            Our team
          </a>
          <p className="body2-bold">
            <a href="#contact">Contact us</a>
          </p>
        </div>
        <div className="flex gap-small">
          <a
            style={{ width: "25px", height: "25px" }}
            href="https://www.linkedin.com/company/tej-fellowship/"
            target="_blank"
          >
            <Image
              src={"/images/social/linkedin.svg"}
              width={25}
              height={25}
              alt="linkedin"
            />
          </a>
          <a
            style={{ width: "24px", height: "24px" }}
            href="https://www.facebook.com/TEJ.fellowship"
            target="_blank"
          >
            <Image
              src={"/images/social/facebook.svg"}
              width={24}
              height={24}
              alt="facebook"
            />
          </a>
          <p className="body2-bold">
            <a href="mailto:tej.fellowship@gmail.com">
              tej.fellowship@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
    /* footer end */
  );
}
