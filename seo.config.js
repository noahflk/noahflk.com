import { WEBSITE_URL, HANDLE_TWITTER, AUTHOR } from "utils/configuration";

const title = AUTHOR;
const description = "Personal website and blog";

const SEO_CONFIG = {
  title,
  description,
  canonical: WEBSITE_URL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    title,
    description,
    images: [
      {
        url: `${WEBSITE_URL}/static/images/social-card.png`,
        alt: title,
        width: 1918,
        height: 1166,
      },
    ],
  },
  twitter: {
    handle: "@" + HANDLE_TWITTER,
    site: "@" + HANDLE_TWITTER,
    cardType: "summary_large_image",
  },
};

export default SEO_CONFIG;
