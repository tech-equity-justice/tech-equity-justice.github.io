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
          <a href="https://www.instagram.com/tejfellowship/" target="_blank">
            <Image width={22} height={22} src={"/images/social/insta.svg"} />
          </a>
          <a href="https://www.facebook.com/TEJ.fellowship" target="_blank">
            <Image width={24} height={24} src={"/images/social/facebook.svg"} />
          </a>
          <a
            href="https://www.linkedin.com/company/tej-fellowship/"
            target="_blank"
          >
            <Image width={25} height={25} src={"/images/social/linkedin.svg"} />
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
