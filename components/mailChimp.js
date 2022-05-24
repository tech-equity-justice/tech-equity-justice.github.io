export default function MailChimp() {
  return (
    <div className="dark-block" id="contact">
      <div className="wrapper flow-xlg">
        <div className="grid grid-2up">
          <div>
            <p className="h2">CONTACT US</p>
            <div className="region-sm">
              <p className="h4 padding-bottom-1" data-variant="no-padding">
                If you are interested in TEJ Fellowship, please tell us about
                yourself and we will get in touch with you.
              </p>
              <p className="padding-bottom-1" data-variant="no-padding">
                For any other communications, please contact us by email at
                <a href="mailto:tej.fellowship@gmail.com">
                  tej.fellowship@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="light-block">
            <link
              href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
              rel="stylesheet"
              type="text/css"
            />
            <style jsx>{`
              #mc_embed_signup {
                background: #fff;
                clear: left;
              }
              #mc_embed_signup div#mce-responses {
                padding: 0;
                width: 100%;
                margin: 0;
              }
              #mc_embed_signup div.response {
                margin: 0 0 1em 0;
                padding: 0;
                width: 100%;
              }
              #mc_embed_signup form {
                display: block;
                position: relative;
                text-align: left;
                padding: 50px;
              }
              #mc_embed_signup .indicates-required {
                margin-right: 0%;
              }
              .form-center {
                justify-content: center;
              }
              #mc_embed_signup .mc-field-group {
                width: 100%;
              }
              #mc_embed_signup .button {
                background-color: #f0564e;
                font-size: 24px;
                height: auto;
                margin: 0 5px 10px 0;
                padding: 8px 32px;
              }
              #mc_embed_signup .button:hover {
                background-color: #e43e43;
              }
              #mc_embed_signup .mc-field-group textarea {
                display: block;
                width: 100%;
                padding: 8px;
                border: 1px solid #abb0b2;
                border-radius: 3px;
                resize: none;
              }
              #rchars {
                color: #f0564e;
              }
              .padding-bottom-2-imp {
                padding-bottom: 2rem !important;
              }
            `}</style>
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us20.list-manage.com/subscribe/post?u=da1c8518aa207cc02d097c9ed&amp;id=06956e0e82"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group padding-bottom-2-imp">
                  <label htmlFor="mce-EMAIL">
                    Email address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div
                  id="mc_embed_signup_scroll"
                  className="grid grid-side-by-side padding-bottom-2"
                >
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">
                      First name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="FNAME"
                      className="required"
                      id="mce-FNAME"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-LNAME">
                      Last name <span className="asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      value=""
                      name="LNAME"
                      className="required"
                      id="mce-LNAME"
                    />
                  </div>
                  <div className="mc-field-group input-group">
                    <strong>
                      Current education level{" "}
                      <span className="asterisk">*</span>
                    </strong>
                    <ul>
                      <li>
                        <input
                          type="radio"
                          value="Bachelors 1st year"
                          name="EDUCATION"
                          id="mce-EDUCATION-0"
                        />
                        <label htmlFor="mce-EDUCATION-0">
                          Bachelors 1st year
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Bachelors 2nd year"
                          name="EDUCATION"
                          id="mce-EDUCATION-1"
                        />
                        <label htmlFor="mce-EDUCATION-1">
                          Bachelors 2nd year
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Bachelors 3rd year"
                          name="EDUCATION"
                          id="mce-EDUCATION-2"
                        />
                        <label htmlFor="mce-EDUCATION-2">
                          Bachelors 3rd year
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Bachelors 4th year"
                          name="EDUCATION"
                          id="mce-EDUCATION-3"
                        />
                        <label htmlFor="mce-EDUCATION-3">
                          Bachelors 4th year
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Completed Bachelors"
                          name="EDUCATION"
                          id="mce-EDUCATION-4"
                        />
                        <label htmlFor="mce-EDUCATION-4">
                          Completed Bachelors
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Completed Masters"
                          name="EDUCATION"
                          id="mce-EDUCATION-5"
                        />
                        <label htmlFor="mce-EDUCATION-5">
                          Completed Masters
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          value="Others"
                          name="EDUCATION"
                          id="mce-EDUCATION-6"
                        />
                        <label htmlFor="mce-EDUCATION-6">Others</label>
                      </li>
                    </ul>
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-SUBJECT">Education subject </label>
                    <input
                      type="text"
                      value=""
                      name="SUBJECT"
                      className=""
                      id="mce-SUBJECT"
                    />
                  </div>
                  <div className="mc-field-group size1of2">
                    <label htmlFor="mce-PHONE">Phone number </label>
                    <input
                      type="text"
                      name="PHONE"
                      className=""
                      value=""
                      id="mce-PHONE"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-GENDER">Gender </label>
                    <input
                      type="text"
                      value=""
                      name="GENDER"
                      className=""
                      id="mce-GENDER"
                    />
                  </div>
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_da1c8518aa207cc02d097c9ed_06956e0e82"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      value="Submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button fire-button"
                    />
                  </div>
                </div>
              </form>
            </div>
            <script jsx>{`
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"

            `}</script>
            <script jsx>
              {`
                          (function ($) {
                            window.fnames = new Array();
                            window.ftypes = new Array();
                            fnames[0] = "EMAIL";
                            ftypes[0] = "email";
                            fnames[1] = "FNAME";
                            ftypes[1] = "text";
                            fnames[2] = "LNAME";
                            ftypes[2] = "text";
                            fnames[4] = "PHONE";
                            ftypes[4] = "phone";
                            fnames[3] = "GENDER";
                            ftypes[3] = "text";
                            fnames[5] = "EDUCATION";
                            ftypes[5] = "radio";
                            fnames[6] = "SUBJECT";
                            ftypes[6] = "text";
                          })(jQuery);
                          var $mcj = jQuery.noConflict(true);
            `}
            </script>
          </div>
        </div>
      </div>
    </div>
  );
}
