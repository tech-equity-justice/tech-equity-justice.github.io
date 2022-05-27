import Link from "next/link";

export default function Menu() {
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
          <a href="#contact" className="body2-bold fire-button">
            Contact us
          </a>
        </div>
      </div>
    </nav>
    /* Navbar ends */
  );
}
