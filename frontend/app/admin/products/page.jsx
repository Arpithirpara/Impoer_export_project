"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, Search, Filter } from "lucide-react";
import styles from "../admin.module.css";

const productsList = [
  { id: "p1", name: "Indian Spices & Seasonings", category: "Spices", price: "₹180", stock: 150, weight: "1 kg", origin: "Gujarat / Rajasthan", image: "/categories_img/Spices_img.png", status: "Active" },
  { id: "p2", name: "Assam Black Tea", category: "Tea", price: "₹240", stock: 80, weight: "500 g", origin: "Assam, India", image: "/product_img/asam_black-tea.png", status: "Active" },
  { id: "p3", name: "Basmati Rice 1121", category: "Rice", price: "₹110", stock: 500, weight: "25 kg", origin: "Punjab, India", image: "/product_img/Basmat_rice.png", status: "Active" },
  { id: "p4", name: "Milling Wheat", category: "Grains & Cereals", price: "₹35", stock: 1200, weight: "50 kg", origin: "Madhya Pradesh", image: "/product_img/wheat.jpg", status: "Active" },
  { id: "p5", name: "Red Lentils (Masoor Dal)", category: "Pulses & Lentils", price: "₹95", stock: 350, weight: "1 kg", origin: "India", image: "/product_img/musoor_dal.jpg", status: "Active" },
  { id: "p6", name: "Chickpeas (Kabuli Chana)", category: "Pulses & Lentils", price: "₹125", stock: 420, weight: "1 kg", origin: "Madhya Pradesh", image: "/product_img/kabuli_chana.jpg", status: "Active" },
];

export default function AdminProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Spices", "Tea", "Rice", "Grains & Cereals", "Pulses & Lentils"];

  const filtered = productsList.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className={styles.mainContent}>
          {/* Header Action Section */}
          <div className={styles.moduleHeader}>
            <div>
              <h1>Export Products Catalog</h1>
              <p>Manage product items, specifications, origin locations, and imagery for export buyers.</p>
            </div>
            <Link href="/admin/products/add" className={styles.primaryActionBtn} style={{ textDecoration: "none" }}>
              <Plus size={18} />
              <span>Add New Product</span>
            </Link>
          </div>

          {/* Table Container Box */}
          <div className={styles.cardBox}>
            {/* Table Search & Category Filter Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
              {/* Search Bar */}
              <div style={{ position: "relative", flex: 1, minWidth: 240, maxWidth: 380 }}>
                <Search size={18} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#64748B" }} />
                <input
                  type="text"
                  placeholder="Search products by name, category, origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "9px 14px 9px 38px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#F8FAFC",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0B192C",
                    outline: "none",
                  }}
                />
              </div>

              {/* Category Dropdown Filter */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Filter size={16} style={{ color: "#64748B" }} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: "9px 14px",
                    borderRadius: "10px",
                    border: "1.5px solid #CBD5E1",
                    background: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0B192C",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Weight</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <div style={{ position: "relative", width: 48, height: 44, borderRadius: 8, overflow: "hidden", background: "#ffffff", border: "1px solid #cbd5e1" }}>
                            <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                          </div>
                        </td>
                        <td style={{ fontWeight: 800, color: "#0B192C" }}>{p.name}</td>
                        <td>{p.category}</td>
                        <td style={{ fontWeight: 700, color: "#16A34A" }}>{p.price}</td>
                        <td>{p.stock}</td>
                        <td>{p.weight}</td>
                        <td>
                          <div className={styles.actionRow}>
                            <Link href={`/admin/products/edit/${p.id}`} className={styles.editBtn} style={{ textDecoration: "none" }}>
                              <Edit size={14} /> Edit
                            </Link>
                            <button className={styles.deleteBtn}>
                              <Trash2 size={14} /> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} style={{ textAlign: "center", padding: "24px", color: "#64748B", fontWeight: 600 }}>
                        No products match your search/filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
