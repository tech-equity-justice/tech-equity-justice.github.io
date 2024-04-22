export default function AboutUs() {
  return (
    /* Dark block one */
    <div className="light-block">
      <div className="wrapper">
        <p className="h2" id="about">
          ABOUT US
        </p>
        <div className="region-md grid grid-2up">
          <div>
            <p className="h5">WHAT IS TEJ?</p>
            <p className="body2">
              Globally, the tech industry is acknowledging the lack of diversity
              within the sector and companies are creating resource groups to
              increase their diversity. TEJ is focusing on the supply side to
              train highly competent software engineers from underrepresented
              communities by:
            </p>
            <div className="bullet">
              <ul>
                <li>Prioritizing equity in caste, class and gender</li>
                <li>
                  Providing high quality fullstack javascript coding training
                </li>
                <li>Augmenting technical skills with soft skills</li>
                <li>
                  Removing barriers to entry by providing stipends, afternoon
                  classes, and other supportive resources
                </li>
                <li>Mentoring by experienced industry professionals</li>
                <li>Ongoing engagement after graduation</li>
              </ul>
            </div>{" "}
          </div>
          <div>
            <p className="h5">WHY TEJ?</p>
            <p className="region-tn body2">
              The technology industry has constantly faced a shortage of good
              software engineers. As the supply of computer engineering
              graduates has not been able to meet the demand, the last 10 years
              has seen the emergence of coding bootcamps in North America and
              Europe that are conducted in terms of six months or less. The
              bootcamp has proven to be a successful model, and employers now
              recruit from them just as they do from universities. These coding
              bootcamps provide unmatched return on investment as they prepare
              students for jobs in a short period.
            </p>
            <p className="region-tn body2">
              In Nepal, the representation of historically marginalized
              communities in the technology sector has been dramatically lower
              than those from privileged class and caste groups due to
              structural barriers, including a lack of access to information and
              resources. To address this issue and close the gap, TEJ has
              created a nine month coding fellowship designed to ensure the
              success of students from underrepresented groups and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
    /* Dark block ends */
  );
}
