export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const baseApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // const baseUrl = `https://batteryfixprodubai.com`;
  //   const apiUrl = "https://admin.carotorepairdubai.com";

  // --- Static pages (from your nav) ---
  const staticRoutes = [
    "",
    "about-us",
    "contact-us",
    "services",
    "blogs",
    "brands",
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  // all services

  const res = await fetch(`${baseApiUrl}/api/services`, {
    cache: "no-store", // important for dynamic data
  });

  const data = await res.json();

  const services = data?.data;

  const dynamicRoutes = await services?.map((service) => ({
    url: `${baseUrl}/service-details/${service.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // all blogs

  const blogResult = await fetch(`${baseApiUrl}/api/blogs`, {
    cache: "no-store", // important for dynamic data
  });

  const blogData = await blogResult.json();

  const blogs = blogData?.data;

  const dynamicBlogRoutes = await blogs?.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // --- Combine all ---
  return [...staticRoutes, ...dynamicRoutes, ...dynamicBlogRoutes];
}
