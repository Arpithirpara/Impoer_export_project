export default function sitemap() {
  const baseUrl = "https://www.ecoexport.in";

  const routes = [
    "",
    "/about",
    "/product",
    "/categorys",
    "/exhibitions",
    "/contry",
    "/inquiry",
    "/blog",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
