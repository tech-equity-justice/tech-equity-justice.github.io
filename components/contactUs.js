import Image from "next/image";
import MailChimp from "./mailChimp";

export default function ContactUs() {
  return (
    <div className="dark-block margin-top-0" id="contact">
      <div className="wrapper">
        <div className="grid grid-2up">
          <div>
            <p className="h2">CONTACT US</p>
            <div className="region-sm">
              <p className="h4 padding-bottom-1" data-variant="no-padding">
                If you are interested in TEJ Fellowship, please tell us about
                yourself and we will get in touch with you.
              </p>
              <p className="padding-bottom-1" data-variant="no-padding">
                For any other communications, please contact us by email at{" "}
                <a href="mailto:tej.fellowship@gmail.com">
                  tej.fellowship@gmail.com
                </a>
              </p>
              <div className="flex gap-small">
                <p>Follow us: </p>
                <a
                  href="https://www.linkedin.com/company/tej-fellowship/"
                  target="_blank"
                >
                  <Image
                    src={"/images/social/linkedin.svg"}
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </a>
                <a
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
              </div>
            </div>
          </div>
          <MailChimp />
        </div>
      </div>
    </div>
  );
}
