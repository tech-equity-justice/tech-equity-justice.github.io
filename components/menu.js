import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const handleBatchClick = (menuItem) => {
    router.push(`/${menuItem}`);
  };
  return (
    /* Navbar */
    <nav className="region-sm flex-start-md">
      <div className="split-pair wrapper flex-center">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logos/TEJ-main-lg.png"
              alt="TEJ Fellowship logo"
              className="nav-logo"
              width={72}
              height={61.563}
            />
          </Link>
        </div>
        <div className="flex flex-start-md flex-center">
          <a className="body2-bold" onClick={() => handleBatchClick("#about")}>
            About us
          </a>
          <a className="body2-bold" onClick={() => handleBatchClick("#team")}>
            Our team
          </a>
          <div className="navbar-fellow">
            <button className="body2-bold">
              Our fellows<i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="cohort-container">
                <a className="body2-bold pre-bootcamp">
                  Pre Bootcamp <i className="fa fa-caret-right rotate"></i>
                </a>
                <div className="sub-menu">
                  <a
                    className="body2-bold"
                    onClick={() => handleBatchClick("#pbc-202401")}
                  >
                    PBC Fellows
                  </a>
                </div>
                <a className="body2-bold bootcamp">
                  Bootcamp <i className="fa fa-caret-right rotate"></i>
                </a>
                <div className="sub-menu">
                  <a
                    onClick={() => handleBatchClick("fellows-2023")}
                    className="body2-bold"
                  >
                    2023 Fellows
                  </a>
                  <a
                    onClick={() => handleBatchClick("fellows-2022")}
                    className="body2-bold"
                  >
                    2022 Fellows
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="body2-bold"
            onClick={() => handleBatchClick("alumni-story")}
          >
            Success stories
          </a>
          <a href="#contact" className="body2-bold fire-button">
            Contact us
          </a>
        </div>
      </div>
    </nav>
    /* Navbar ends */
  );
}
