import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />

        {/* facebook open graph tag */}
        <meta property="og:url" content="https://www.tejcenter.org/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Technology for Equity and Justice Fellowship"
        />
        <meta
          property="og:description"
          content="At TEJ Fellowship, we recruit and invest in candidates from marginalized and underrepresented communities in technology."
        />
        <meta
          property="og:image"
          content="/images/logos/TEJ-main-lg-w-fullform+tagline_1.png"
        />
        {/* facebook open graph tag */}

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tej" />
        <meta
          name="twitter:title"
          content="Technology for Equity and Justice Fellowship"
        />
        <meta
          name="twitter:description"
          content="At TEJ Fellowship, we recruit and invest in candidates from marginalized and underrepresented communities in technology."
        />
        <meta
          name="twitter:image:src"
          content="https://tejcenter.org/images/logos/TEJ-main-lg-w-fullform+tagline_1_short.png"
        />
        {/* twitter card */}

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TEJ</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/logos/fav-icon_1.png"
        />
      </Head>

      {/* <!-- Navbar --> */}
      <nav className="region-sm flex-start-md">
        <div className="split-pair wrapper flex-center">
          <div className="logo">
            <a href="index.html">
              <img
                src="/images/logos/TEJ-main-lg.png"
                alt="TEJ Fellowship logo"
                className="nav-logo"
              />
            </a>
          </div>
          <div className="flex flex-start-md flex-center">
            <a href="#about" className="body2-bold">
              About us
            </a>
            <a href="#team" className="body2-bold">
              Our team
            </a>
            <a href="#contact" className="body2-bold fire-button">
              Contact us
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar ends --> */}
      {/* <!-- Blob --> */}
      <div className="blob"></div>
      {/* <!-- Blob ends --> */}
      <div className="flow-xlg">
        <div className="wrapper">
          {/* <!-- Hero --> */}
          <div className="region-top-md grid grid-hero hero">
            <div>
              <p className="hero-title">
                <span className="primary-color">T</span>
                <span className="graphite-color">echnology for</span>
                <br />
                <span className="primary-color">E</span>
                <span className="graphite-color">quity and</span>
                <br />
                <span className="primary-color">J</span>
                <span className="graphite-color">ustice</span>
                <br />
                <span className="primary-color">Fellowship</span>
              </p>
              <div className="region-tn">
                <p className="region-sm body1">
                  TEJ trains individuals from underrepresented communities to
                  become software engineers through its in-house 10-month full
                  time fellowship.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/browser.svg" alt="Image of a browser" />
            </div>
          </div>
          {/* <!-- Hero ends --> */}
        </div>

        {/* <!-- Block one --> */}
        <div className="dark-block">
          <div className="wrapper flow-xlg">
            <div className="grid grid-2up">
              <div>
                <p className="h2 h2-margin-top--20">ELIGIBILITY</p>
              </div>
              <div className="flow-lg">
                <p className="body2">
                  At TEJ Fellowship, we recruit and invest in candidates from
                  marginalized and underrepresented communities in technology.
                  We are looking for candidates including but not limited to the
                  following qualifications:
                </p>
                <div className="bullet">
                  <ul>
                    <li>
                      Communities underrepresented in the technology sector in
                      Nepal (caste, gender, and other identities)
                    </li>
                    <li>
                      Completed at least one year in Bachelors in Engineering /
                      Sciences or other related fields
                    </li>
                    <li>Interest in pursuing a career in technology</li>
                    <li>
                      Demonstrated ability to work hard and collaborate in
                      diverse teams
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Block ends --> */}

        {/* <!-- Dark block one --> */}
        <div className="light-block">
          <div className="wrapper">
            <p className="h2" id="about">
              ABOUT US
            </p>
            <div className="region-md grid grid-2up">
              <div>
                <p className="h5">WHAT IS TEJ?</p>
                <p className="region-tn body2">
                  Technology for Equity and Justice (TEJ), a US based
                  organization, has developed a 10 month coding fellowship for
                  students from marginalized and underrepresented communities.
                  The fellows will be trained from little or no coding knowledge
                  to fully capable software engineers earning competitive
                  salaries. Fellows will be paid a stipend of Rs. 15,000.00 a
                  month throughout the program.
                </p>
                <p className="region-tn body2">
                  The TEJ Fellows are selected following a rigorous selection
                  process. The 10 month fellowship is conducted in two phases:
                  I) The Software Engineering Bootcamp phase is an in-house
                  6-month full time bootcamp training program teaching
                  javascript language frontend and backend skills. The training
                  is facilitated by highly experienced IT Engineers with work
                  experience in the United States and Nepal. II) The internship
                  phase is focused on putting technical training to practical
                  use. It includes soft skills training in communications and
                  job search skills to find and grow in good jobs in Nepal and
                  international companies.
                </p>
              </div>
              <div>
                <p className="h5">WHY TEJ?</p>
                <p className="region-tn body2">
                  The technology industry has constantly faced a shortage of
                  good software engineers. As the supply of computer engineering
                  graduates has not been able to meet the demand, the last 10
                  years has seen the emergence of coding bootcamps in North
                  America and Europe that are conducted in terms of six months
                  or less. The bootcamp has proven to be a successful model, and
                  employers now recruit from them just as they do from
                  universities. These coding bootcamps provide unmatched return
                  on investment as they prepare students for jobs in a short
                  period.
                </p>
                <p className="region-tn body2">
                  In Nepal, the representation of historically marginalized
                  communities in the technology sector has been dramatically
                  lower than those from privileged class and caste groups due to
                  structural barriers, including a lack of access to information
                  and resources. To address this issue and close the gap, TEJ
                  has created a 10 month coding fellowship designed to ensure
                  the success of students from underrepresented groups and
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Dark block ends --> */}

        {/* <!-- Block --> */}
        <div className="dark-block">
          <div className="wrapper flow-xlg">
            <div className="grid grid-2up">
              <div>
                <p className="h2 h2-margin-top--20">HOW DOES TEJ WORK?</p>
              </div>
              <div className="flow-lg">
                <p className="body2">
                  Globally, the tech industry is acknowledging the lack of
                  diversity within the sector and companies are creating
                  resource groups to increase their diversity. TEJ is focusing
                  on the supply side to train highly competent software
                  engineers from underrepresented communities by:
                </p>
                <div className="bullet">
                  <ul>
                    <li>Prioritizing equity in caste, class and gender</li>
                    <li>
                      Providing high quality fullstack javascript coding
                      training
                    </li>
                    <li>Augmenting technical skills with soft skills</li>
                    <li>
                      Removing barriers to entry by providing stipends,
                      afternoon classes, and other supportive resources
                    </li>
                    <li>Mentoring by experienced industry professionals</li>
                    <li>Ongoing engagement after graduation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Block ends --> */}
      </div>
    </div>
  );
}
