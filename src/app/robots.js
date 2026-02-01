export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard"], // optional
    },
    sitemap: "https://batteryfixprodubai.com/sitemap.xml",
  };
}
