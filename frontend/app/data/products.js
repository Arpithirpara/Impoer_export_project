export const products = [
  // Spices
  {
    id: "premium-spices-mix",
    name: "Indian Spices & Seasonings",
    category: "Spices",
    description: "Export-grade whole and ground authentic Indian spices.",
    longDescription:
      "Our authentic Indian spices are sourced directly from premier spice-growing regions across India. From high-curcumin turmeric to fragrant green cardamom and pungent red chillies, we supply whole, crushed, and finely ground spices processed under strict ISO & HACCP quality standards.",
    image: "/categories_img/Spices_img.png",
    origin: "Kerala & Rajasthan, India",
    packaging: "25kg / 50kg PP & Jute bags, Vacuum seal packing available",
    moq: "1 Metric Ton",
    specs: [
      { label: "Purity", value: "99% Min" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Admixture", value: "≤ 1%" },
      { label: "Quality Standard", value: "ASTA / ISO Grade A+" },
    ],
  },

  // Tea
  {
    id: "assam-black-tea",
    name: "Assam Black Tea",
    category: "Tea",
    description: "Bold, malty CTC tea leaves sourced from Assam estates.",
    longDescription:
      "Our Assam Black Tea is grown in the fertile Brahmaputra valley, known for producing some of the world's boldest, maltiest CTC teas. Hand-graded and processed to preserve strength and colour, it's ideal for blenders and retailers looking for a robust breakfast tea base.",
    image: "/product_img/asam_black-tea.png",
    origin: "Assam, India",
    packaging: "25kg / 50kg jute bags, custom retail packs available",
    moq: "1 Metric Ton",
    specs: [
      { label: "Grade", value: "CTC BOP / BOPSM" },
      { label: "Moisture", value: "≤ 7%" },
      { label: "Caffeine", value: "Medium-High" },
      { label: "Shelf Life", value: "24 months" },
    ],
  },
  {
    id: "green-tea-leaves",
    name: "Green Tea Leaves",
    category: "Tea",
    description: "Fresh, minimally processed green tea with a light finish.",
    longDescription:
      "Sourced from high-altitude gardens and processed with minimal oxidation, our Green Tea Leaves retain natural antioxidants and a light, grassy finish. Perfect for wellness brands and specialty tea houses.",
    image: "/product_img/green_tea.jpg",
    origin: "Darjeeling & Nilgiri, India",
    packaging: "20kg cartons, custom private label available",
    moq: "500 kg",
    specs: [
      { label: "Grade", value: "Orthodox / Loose Leaf" },
      { label: "Moisture", value: "≤ 6%" },
      { label: "Caffeine", value: "Low-Medium" },
      { label: "Shelf Life", value: "18 months" },
    ],
  },

  // Coffee
  {
    id: "arabica-coffee-beans",
    name: "Arabica Coffee Beans",
    category: "Coffee",
    description: "Smooth, aromatic beans with balanced acidity.",
    longDescription:
      "Grown in shaded, high-altitude estates, our Arabica beans deliver a smooth cup with balanced acidity and notes of citrus and caramel. Carefully sorted and sun-dried for consistent roast performance.",
    image: "/product_img/coffee.jpg",
    origin: "Karnataka, India",
    packaging: "60kg jute bags, GrainPro liner",
    moq: "1 Metric Ton",
    specs: [
      { label: "Screen Size", value: "16-18" },
      { label: "Moisture", value: "≤ 11%" },
      { label: "Defect Count", value: "Below 12 (Grade AA)" },
      { label: "Processing", value: "Washed / Natural" },
    ],
  },
  {
    id: "robusta-coffee-beans",
    name: "Robusta Coffee Beans",
    category: "Coffee",
    description: "Bold, high-caffeine beans ideal for espresso blends.",
    longDescription:
      "Our Robusta beans are prized for their bold body, higher caffeine content and crema-building qualities — a staple for espresso and instant coffee blends worldwide.",
    image: "/product_img/Robusta Coffee.jpg",
    origin: "Andhra Pradesh, India",
    packaging: "60kg jute bags",
    moq: "1 Metric Ton",
    specs: [
      { label: "Screen Size", value: "14-16" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Defect Count", value: "Below 50" },
      { label: "Processing", value: "Natural" },
    ],
  },
  {
    id: "instant-coffee-powder",
    name: "Instant Coffee Powder",
    category: "Coffee",
    description: "Freeze-dried coffee granules for consistent flavor.",
    longDescription:
      "Freeze-dried using controlled low-temperature processing, our instant coffee powder locks in aroma and flavour for a consistent cup every time — ideal for private label and food service.",
    image: "/product_img/coffee_powder.jpg",
    origin: "India",
    packaging: "25kg drums, sachet packing available",
    moq: "500 kg",
    specs: [
      { label: "Type", value: "Freeze-Dried" },
      { label: "Solubility", value: "Instant, 100%" },
      { label: "Moisture", value: "≤ 3%" },
      { label: "Shelf Life", value: "24 months" },
    ],
  },

  // Rice
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    category: "Rice",
    description: "Long-grain aromatic rice, aged for extra fragrance.",
    longDescription:
      "Our Basmati Rice is aged for a minimum of 12 months to develop its signature aroma and extra-long grain length. Sourced from the foothills of the Himalayas and triple-cleaned before export.",
    image: "/product_img/Basmat_rice.png",
    origin: "Punjab & Haryana, India",
    packaging: "5kg / 25kg / 50kg bags, custom branding available",
    moq: "5 Metric Tons",
    specs: [
      { label: "Grain Length", value: "≥ 8.2mm" },
      { label: "Aging", value: "12+ months" },
      { label: "Broken %", value: "≤ 2%" },
      { label: "Moisture", value: "≤ 12%" },
    ],
  },
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Long Grain",
    category: "Rice",
    description: "Reliable everyday long-grain rice for bulk export.",
    longDescription:
      "A dependable, cost-effective long-grain rice suited for bulk institutional and retail export, cleaned and graded to consistent quality standards.",
    image: "/product_img/non-Basmati_rice.jpg",
    origin: "West Bengal & Andhra Pradesh, India",
    packaging: "25kg / 50kg PP bags",
    moq: "10 Metric Tons",
    specs: [
      { label: "Grain Length", value: "6.5-7mm" },
      { label: "Broken %", value: "≤ 5%" },
      { label: "Moisture", value: "≤ 13%" },
      { label: "Purity", value: "98%" },
    ],
  },
  {
    id: "parboiled-rice",
    name: "Parboiled Rice",
    category: "Rice",
    description: "Steamed and dried rice with higher nutrient retention.",
    longDescription:
      "Processed using traditional parboiling methods, this rice retains more nutrients and holds its shape well during cooking — a preferred choice across African and Middle Eastern markets.",
    image: "/product_img/Basmat_rice.png",
    origin: "Andhra Pradesh, India",
    packaging: "25kg / 50kg PP bags",
    moq: "10 Metric Tons",
    specs: [
      { label: "Grain Type", value: "Long / Medium" },
      { label: "Broken %", value: "≤ 5%" },
      { label: "Moisture", value: "≤ 13%" },
      { label: "Process", value: "Steam Parboiled" },
    ],
  },

  // Pulses & Lentils
  {
    id: "red-lentils",
    name: "Red Lentils (Masoor)",
    category: "Pulses & Lentils",
    description: "Split red lentils, quick-cooking and high in protein.",
    longDescription:
      "Split and polished red lentils (Masoor Dal), known for their quick cooking time and high protein content — a staple pulse for retail and food service globally.",
    image: "/product_img/musoor_dal.jpg",
    origin: "Madhya Pradesh, India",
    packaging: "25kg / 50kg bags",
    moq: "5 Metric Tons",
    specs: [
      { label: "Type", value: "Split, Polished" },
      { label: "Protein", value: "~25%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Purity", value: "99%" },
    ],
  },
  {
    id: "chickpeas",
    name: "Chickpeas (Kabuli Chana)",
    category: "Pulses & Lentils",
    description: "Large, cream-colored chickpeas graded for export.",
    longDescription:
      "Premium large-size Kabuli Chana, machine-cleaned and size-graded for consistent cooking quality — widely used in retail, hummus production, and food processing.",
    image: "/product_img/kabuli_chana.jpg",
    origin: "Madhya Pradesh & Rajasthan, India",
    packaging: "25kg / 50kg bags",
    moq: "5 Metric Tons",
    specs: [
      { label: "Size", value: "40-42 / 42-44 count" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Purity", value: "99%" },
      { label: "Admixture", value: "≤ 1%" },
    ],
  },
  {
    id: "green-moong",
    name: "Green Moong Beans",
    category: "Pulses & Lentils",
    description: "Whole green gram, sourced from trusted growers.",
    longDescription:
      "Whole green gram (Moong), sourced directly from trusted growers and cleaned to export-grade purity — popular for sprouting, dals, and health food products.",
    image: "/product_img/Green gram.jpg",
    origin: "Rajasthan, India",
    packaging: "25kg / 50kg bags",
    moq: "5 Metric Tons",
    specs: [
      { label: "Type", value: "Whole, Unpolished" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Purity", value: "98%" },
      { label: "Foreign Matter", value: "≤ 1%" },
    ],
  },

  // Grains & Cereals
  {
    id: "wheat",
    name: "Milling Wheat",
    category: "Grains & Cereals",
    description: "Milling-grade wheat with consistent protein content.",
    longDescription:
      "Milling-grade wheat sourced from central Indian plains, offering consistent protein content and low moisture for reliable flour yield in industrial milling.",
    image: "/product_img/wheat.jpg",
    origin: "Madhya Pradesh, India",
    packaging: "50kg PP bags, bulk container loading",
    moq: "25 Metric Tons",
    specs: [
      { label: "Protein", value: "10-12%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Test Weight", value: "78-80 kg/hl" },
      { label: "Foreign Matter", value: "≤ 1%" },
    ],
  },
  {
    id: "barley",
    name: "Robust Barley",
    category: "Grains & Cereals",
    description: "Feed and malting grade barley, cleaned and graded.",
    longDescription:
      "Cleaned and graded barley suitable for both malting and animal feed applications, sourced from Rajasthan's grain belt with consistent quality control.",
    image: "/product_img/Robust Barley.jpg",
    origin: "Rajasthan, India",
    packaging: "50kg PP bags, bulk loading",
    moq: "25 Metric Tons",
    specs: [
      { label: "Grade", value: "Malting / Feed" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Purity", value: "98%" },
      { label: "Germination", value: "≥ 95% (malting grade)" },
    ],
  },
  {
    id: "millets",
    name: "Pearl Millets (Bajra)",
    category: "Grains & Cereals",
    description: "Nutrient-dense pearl millet for global cereal markets.",
    longDescription:
      "Nutrient-dense pearl millet (Bajra), naturally gluten-free and rich in iron and fibre — increasingly sought after in health food and gluten-free cereal markets worldwide.",
    image: "/product_img/Bajara.jpg",
    origin: "Gujarat & Rajasthan, India",
    packaging: "50kg PP bags, bulk loading",
    moq: "25 Metric Tons",
    specs: [
      { label: "Type", value: "Whole Grain" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Purity", value: "98%" },
      { label: "Gluten", value: "Free" },
    ],
  },

  // Flour
  {
    id: "wheat-flour-atta",
    name: "Flour & Agro Meals",
    category: "Flour",
    description: "Finely milled high-protein wheat flour for baking & bread.",
    longDescription:
      "Finely milled wheat flour (Atta / Maida) produced from high-protein wheat grains. Processed without artificial bleaches to maintain natural aroma, dough elasticity, and baking quality for export markets.",
    image: "/categories_img/Flour_img.png",
    origin: "Madhya Pradesh, India",
    packaging: "10kg / 25kg / 50kg PP Bags",
    moq: "10 Metric Tons",
    specs: [
      { label: "Protein Content", value: "11.5% - 13%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Ash Content", value: "≤ 0.55%" },
      { label: "Shelf Life", value: "12 months" },
    ],
  },

  // Oil Seeds
  {
    id: "oil-seeds-export",
    name: "Premium Oil Seeds",
    category: "Oil Seeds",
    description: "High oil yield mustard, sesame, and sunflower seeds.",
    longDescription:
      "Export quality oil seeds including natural white sesame seeds, hulled sesame, and high-oil content mustard seeds. Sorted with optical laser sorters to achieve maximum purity for crushing and bakery use.",
    image: "/categories_img/Oil Seeds.png",
    origin: "Gujarat & Rajasthan, India",
    packaging: "25kg / 50kg PP & Paper bags",
    moq: "5 Metric Tons",
    specs: [
      { label: "Oil Content", value: "≥ 48%" },
      { label: "Purity", value: "99.9% Sortex Cleaned" },
      { label: "FFA", value: "≤ 1.5%" },
      { label: "Moisture", value: "≤ 6%" },
    ],
  },

  // Cattle Feed
  {
    id: "animal-cattle-feed",
    name: "Animal & Cattle Feed",
    category: "Cattle Feed",
    description: "High protein meal and nutritious fodder mixes for export.",
    longDescription:
      "Nutritious agro by-products including soybean meal, rapeseed meal, cottonseed cake, and de-oiled rice bran. Sourced directly from modern solvent extraction plants for livestock and dairy farming.",
    image: "/categories_img/Cattle Feed_Animal Feed.png",
    origin: "Gujarat & Madhya Pradesh, India",
    packaging: "50kg HDPE bags, Jumbo tote bags",
    moq: "20 Metric Tons",
    specs: [
      { label: "Crude Protein", value: "44% - 48% Min" },
      { label: "Moisture", value: "≤ 11%" },
      { label: "Crude Fibre", value: "≤ 6%" },
      { label: "Aflatoxin", value: "≤ 20 PPB" },
    ],
  },
];