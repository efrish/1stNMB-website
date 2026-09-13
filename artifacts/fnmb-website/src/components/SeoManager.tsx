import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://www.1stnmb.com";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

type SeoConfig = {
  title: string;
  description: string;
  robots?: string;
  type?: "website" | "article";
};

const routes: Record<string, SeoConfig> = {
  "/": {
    title: "1stNMB | Mortgage and Real Estate Financing",
    description:
      "Explore residential mortgage and real estate investment financing with 1stNMB. Speak with an experienced California mortgage broker about your options.",
  },
  "/about": {
    title: "About 1stNMB | Experienced Mortgage Guidance",
    description:
      "Learn about 1stNMB and our approach to responsive, case-by-case mortgage and real estate investment financing guidance.",
  },
  "/services": {
    title: "Loan Programs | 1stNMB Mortgage Solutions",
    description:
      "Review conventional, FHA, VA, refinancing, bridge, hard-money and investment-property financing options available through 1stNMB.",
  },
  "/blog": {
    title: "Mortgage and Real Estate Insights | 1stNMB",
    description:
      "Read mortgage, real estate financing and investment-property insights from 1stNMB.",
  },
  "/blog/navigating-interest-rates-2025": {
    title: "Navigating Interest Rates in 2025 | 1stNMB",
    description:
      "Learn how interest-rate conditions can affect mortgage planning, affordability and refinancing decisions.",
    type: "article",
  },
  "/contact": {
    title: "Contact 1stNMB | Discuss Your Financing Needs",
    description:
      "Contact 1stNMB in Woodland Hills, California to discuss mortgage or real estate investment financing needs.",
  },
  "/long-term-application": {
    title: "Residential Mortgage Application | 1stNMB",
    description:
      "Submit your initial residential mortgage information for review by a 1stNMB loan specialist.",
    robots: "noindex,follow",
  },
  "/short-term-application": {
    title: "Bridge and Hard-Money Loan Request | 1stNMB",
    description:
      "Submit basic information about a business-purpose bridge or hard-money loan request for case-by-case review.",
    robots: "noindex,follow",
  },
  "/admin": {
    title: "Staff Administration | 1stNMB",
    description: "Authorized staff access for 1stNMB.",
    robots: "noindex,nofollow",
  },
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element?.setAttribute(name, value);
  });
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
}

export function SeoManager() {
  const [location] = useLocation();

  useEffect(() => {
    const normalizedPath = location === "/" ? "/" : location.replace(/\/$/, "");
    const config = routes[normalizedPath] ?? {
      title: "Page Not Found | 1stNMB",
      description: "The requested page could not be found.",
      robots: "noindex,nofollow",
    };
    const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;

    document.title = config.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: config.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: config.robots ?? "index,follow",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: config.type ?? "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: DEFAULT_IMAGE,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: config.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: config.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: DEFAULT_IMAGE,
    });
    upsertCanonical(canonicalUrl);
  }, [location]);

  return null;
}
