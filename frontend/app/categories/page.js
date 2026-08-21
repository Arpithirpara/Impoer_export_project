import CategoryGrid from "../../components/categories/categories";

export const metadata = {
  title: "Commodity Categories & Produce Lines | ECO EXPORT",
  description:
    "Browse Eco Export's 10 major agricultural commodity lines including Indian Spices, Basmati Rice, Milling Wheat, Oil Seeds, Pulses, and Cattle Feed.",
  openGraph: {
    title: "Commodity Categories & Produce Lines | ECO EXPORT",
    description:
      "Explore certified Indian Spices, Basmati Rice, Milling Wheat, Oil Seeds & Cattle Feed for international B2B export.",
  },
};

export default function CategoriesPage() {
  return (
    <main style={{ minHeight: "80vh", paddingTop: "20px" }}>
      <CategoryGrid />
    </main>
  );
}
