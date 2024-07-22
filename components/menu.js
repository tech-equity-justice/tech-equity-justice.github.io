import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu() {
  const router = useRouter();
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleBatchClick = (menuItem) => {
    router.push(`/${menuItem}`);

    setOpenHamburger(false);
  };

  const toggleMenu = () => {
    setOpenHamburger(!openHamburger);
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
        <div className={`menu-container ${openHamburger ? "active" : ""}`}>
          <div className="flex flex-start-md flex-center menu-items">
            <a
              className="body2-bold"
              onClick={() => handleBatchClick("#about")}
            >
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
                      onClick={() => handleBatchClick("#pbc-202404")}
                    >
                      Current
                    </a>
                    <a
                      className="body2-bold"
                      onClick={() => handleBatchClick("pbc-202401")}
                    >
                      Jan-2024
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
                      May-2023
                    </a>
                    <a
                      onClick={() => handleBatchClick("fellows-2022")}
                      className="body2-bold"
                    >
                      May-2022
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="body2-bold display-none display-block-md"
              onClick={() => handleBatchClick("#alumni-story")}
            >
              Success stories
            </a>
            <a href="#contact" className="body2-bold fire-button">
              Contact us
            </a>
          </div>
        </div>
        <div
          className={`hamburger-menu ${openHamburger ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar-line"></div>
          <div className="bar-line"></div>
          <div className="bar-line"></div>
        </div>
      </div>
    </nav>
    /* Navbar ends */
  );
}
