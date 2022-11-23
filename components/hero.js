export default function Hero() {
  return (
    /* Hero */
    <div className="wrapper">
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
              TEJ trains individuals from underrepresented communities to become
              software engineers through its in-house nine-month full time
              fellowship.
            </p>
          </div>
        </div>
        <div>
          <img src="/images/browser.svg" alt="Image of a browser" />
        </div>
      </div>
    </div>
    /* Hero ends */
  );
}
