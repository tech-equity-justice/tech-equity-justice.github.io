import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FirstCohort } from "../pages/first-cohort";

export default function Menu() {
  const [visibility, setVisibiliy] = useState(false);
  const router = useRouter();

  const handleBatchOptionToggle = () => {
    setVisibiliy(!visibility);
  };

  const handleBatchClick = (FirstCohort) => {
    router.push(`/${FirstCohort}`);
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
          <a href="#about" className="body2-bold">
            About us
          </a>
          <a href="#team" className="body2-bold">
            Our team
          </a>
          <a href="#fellows-2022" className="body2-bold">
            Our Fellows
          </a>
          <div
            className="hover-container"
            onMouseEnter={handleBatchOptionToggle}
            onMouseLeave={handleBatchOptionToggle}
          >
            <a>Alumni</a>
            {visibility && (
              <div className="cohorts">
                <div
                  onClick={() => handleBatchClick("first-cohort")}
                  //className="body2-bold"
                >
                  2023-5-Batch
                </div>
              </div>
            )}
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
