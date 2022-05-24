import Head from "next/head";

export default function HeadMatter() {
  return (
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
  );
}
