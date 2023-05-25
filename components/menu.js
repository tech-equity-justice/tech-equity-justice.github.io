import Link from "next/link";
//import { useState } from "react";
import { useRouter } from "next/router";
import { FirstCohort } from "../pages/first-cohort";

export default function Menu() {
  //const [visibility, setVisibiliy] = useState(false);
  const router = useRouter();

  // const handleBatchOptionToggle = () => {
  //   setVisibiliy(!visibility);
  // };

  const handleBatchClick = (batch) => {
    if (batch === "first-cohort") {
      router.push("/first-cohort");
    } else if (batch === "fellows-2022") {
      router.push("/#fellows-2022");
    } else if (batch === "about") {
      router.push("/#about");
    } else if (batch === "team") {
      router.push("/#team");
    }
    // router.push(`/${FirstCohort}`);
  };

  return (
    /* Navbar */
    <nav className="region-sm flex-start-md">
      <div className="split-pair wrapper flex-center">
        <div className="logo">
          <Link href="/">
            <img
              src="/images/logos/TEJ-main-lg.png"
              alt="TEJ Fellowship logo"
              className="nav-logo"
            />
          </Link>
        </div>
        <div className="flex flex-start-md flex-center">
          <a
            // href="#about"
            className="body2-bold"
            onClick={() => handleBatchClick("about")}
          >
            About us
          </a>
          <a
            // href="#team"
            className="body2-bold"
            onClick={() => handleBatchClick("team")}
          >
            Our team
          </a>

          <div className="navbar-fellow">
            <button className="body2-bold">
              Our fellows<i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="cohort-container">
                <a
                  onClick={() => handleBatchClick("fellows-2022")}
                  // href="#fellows-2022"
                  className="body2-bold"
                >
                  2023 First Cohort
                </a>

                <a
                  onClick={() => handleBatchClick("first-cohort")}
                  className="body2-bold"
                >
                  2022 First Cohort
                </a>
              </div>
            </div>
          </div>

          <a href="#contact" className="body2-bold fire-button">
            Contact us
          </a>
        </div>
      </div>
    </nav>
    /* Navbar ends */
  );
}
