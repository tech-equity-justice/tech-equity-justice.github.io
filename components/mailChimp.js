const rawHTML = `
<!-- Mailchimp Form -->
<div class="dark-block" id="contact">
  <div class="wrapper flow-xlg">
    <div class="grid grid-2up">
      <div>
        <p class="h2">CONTACT US</p>
        <div class="region-sm">
          <p class="h4 padding-bottom-1" data-variant="no-padding">
            If you are interested in TEJ Fellowship, please tell us about
            yourself and we will get in touch with you.
          </p>
          <p class="padding-bottom-1" data-variant="no-padding">
            For any other communications, please contact us by email at
            <a href="mailto:tej.fellowship@gmail.com"
              >tej.fellowship@gmail.com</a
            >
          </p>
        </div>
      </div>
      <div class="light-block">
        <!-- Begin Mailchimp Signup Form -->
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
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
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us20.list-manage.com/subscribe/post?u=da1c8518aa207cc02d097c9ed&amp;id=06956e0e82"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group padding-bottom-2-imp">
              <label for="mce-EMAIL"
                >Email address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
              />
            </div>
            <div
              id="mc_embed_signup_scroll"
              class="grid grid-side-by-side padding-bottom-2"
            >
              <div class="mc-field-group">
                <label for="mce-FNAME"
                  >First name <span class="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  class="required"
                  id="mce-FNAME"
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-LNAME"
                  >Last name <span class="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  name="LNAME"
                  class="required"
                  id="mce-LNAME"
                />
              </div>
              <div class="mc-field-group input-group">
                <strong
                  >Current education level <span class="asterisk">*</span>
                </strong>
                <ul>
                  <li>
                    <input
                      type="radio"
                      value="Bachelors 1st year"
                      name="EDUCATION"
                      id="mce-EDUCATION-0"
                    /><label for="mce-EDUCATION-0"
                      >Bachelors 1st year</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Bachelors 2nd year"
                      name="EDUCATION"
                      id="mce-EDUCATION-1"
                    /><label for="mce-EDUCATION-1"
                      >Bachelors 2nd year</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Bachelors 3rd year"
                      name="EDUCATION"
                      id="mce-EDUCATION-2"
                    /><label for="mce-EDUCATION-2"
                      >Bachelors 3rd year</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Bachelors 4th year"
                      name="EDUCATION"
                      id="mce-EDUCATION-3"
                    /><label for="mce-EDUCATION-3"
                      >Bachelors 4th year</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Completed Bachelors"
                      name="EDUCATION"
                      id="mce-EDUCATION-4"
                    /><label for="mce-EDUCATION-4"
                      >Completed Bachelors</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Completed Masters"
                      name="EDUCATION"
                      id="mce-EDUCATION-5"
                    /><label for="mce-EDUCATION-5"
                      >Completed Masters</label
                    >
                  </li>
                  <li>
                    <input
                      type="radio"
                      value="Others"
                      name="EDUCATION"
                      id="mce-EDUCATION-6"
                    /><label for="mce-EDUCATION-6">Others</label>
                  </li>
                </ul>
              </div>
              <div class="mc-field-group">
                <label for="mce-SUBJECT">Education subject </label>
                <input
                  type="text"
                  value=""
                  name="SUBJECT"
                  class=""
                  id="mce-SUBJECT"
                />
              </div>
              <div class="mc-field-group size1of2">
                <label for="mce-PHONE">Phone number </label>
                <input
                  type="text"
                  name="PHONE"
                  class=""
                  value=""
                  id="mce-PHONE"
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-GENDER">Gender </label>
                <input
                  type="text"
                  value=""
                  name="GENDER"
                  class=""
                  id="mce-GENDER"
                />
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_da1c8518aa207cc02d097c9ed_06956e0e82"
                  tabindex="-1"
                  value=""
                />
              </div>
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display: none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display: none"
              ></div>
            </div>
            <div class="optionalParent">
              <div class="clear foot">
                <input
                  type="submit"
                  value="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button fire-button"
                />
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script type="text/javascript">
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
        </script>
        <!--End mc_embed_signup-->
      </div>
    </div>
  </div>
</div>
<!-- Mailchimp Form end -->
`;

export default function MailChimp() {
  return <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>;
}
