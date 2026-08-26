import type { MetadataRoute } from "next";
import { getRuntimeEnv } from "@/shared/lib/get-runtime-env";

const domainUrl = getRuntimeEnv("NEXT_PUBLIC_DOMAIN_URL")

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ['/*?*'],
    },
    sitemap: `${domainUrl}/sitemap.xml"`,
  }
}