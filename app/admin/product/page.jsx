"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import ProductsManager from "../components/ProductsManager";
import { Fraunces, Inter } from "next/font/google";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const initialProducts = [
  { id: "P-01", name: "1121 Extra Long Basmati Rice", category: "Rice", stock: "In Stock", price: "$980 / MT" },
  { id: "P-02", name: "Natural Hulled Sesame Seeds 99.95%", category: "Oil Seeds", stock: "In Stock", price: "$1,450 / MT" },
  { id: "P-03", name: "Teja S17 Stemless Red Chilli", category: "Spices", stock: "In Stock", price: "$2,100 / MT" },
  { id: "P-04", name: "Durum Wheat Semolina (Suji)", category: "Flour", stock: "Processing", price: "$420 / MT" },
  { id: "P-05", name: "Yellow Maize / Corn (Animal Feed)", category: "Cattle Feed", stock: "In Stock", price: "$290 / MT" },
];

export default function AdminProductPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [newProdName, setNewProdName] = useState("");
  const [newProdCat, setNewProdCat] = useState("Spices");
  const [newProdPrice, setNewProdPrice] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;
    const newEntry = {
      id: `P-0${products.length + 1}`,
      name: newProdName,
      category: newProdCat,
      stock: "In Stock",
      price: newProdPrice,
    };
    setProducts([...products, newEntry]);
    setNewProdName("");
    setNewProdPrice("");
  };

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="product"
          homeSubNav="product"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <ProductsManager
            products={products}
            newProdName={newProdName}
            setNewProdName={setNewProdName}
            newProdCat={newProdCat}
            setNewProdCat={setNewProdCat}
            newProdPrice={newProdPrice}
            setNewProdPrice={setNewProdPrice}
            handleAddProduct={handleAddProduct}
          />
        </main>
      </div>
    </div>
  );
}
