"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import { Plus, Edit, Trash2, CheckCircle } from "lucide-react";
import styles from "../admin.module.css";

const productsList = [
  { id: "p1", name: "Indian Spices & Seasonings", category: "Spices", origin: "Gujarat / Rajasthan", image: "/categories_img/Spices_img.png", status: "Active" },
  { id: "p2", name: "Assam Black Tea", category: "Tea", origin: "Assam, India", image: "/product_img/asam_black-tea.png", status: "Active" },
  { id: "p3", name: "Basmati Rice 1121", category: "Rice", origin: "Punjab, India", image: "/product_img/Basmat_rice.png", status: "Active" },
  { id: "p4", name: "Milling Wheat", category: "Grains & Cereals", origin: "Madhya Pradesh", image: "/product_img/wheat.jpg", status: "Active" },
  { id: "p5", name: "Red Lentils (Masoor Dal)", category: "Pulses & Lentils", origin: "India", image: "/product_img/musoor_dal.jpg", status: "Active" },
  { id: "p6", name: "Chickpeas (Kabuli Chana)", category: "Pulses & Lentils", origin: "Madhya Pradesh", image: "/product_img/kabuli_chana.jpg", status: "Active" },
];

export default function AdminProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");

  const filtered = productsList.filter((p) =>
    p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    p.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className={styles.adminLayout}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`${styles.mainWrapper} ${!sidebarOpen ? styles.mainWrapperFull : ""}`}>
        <TopHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
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

          {/* Table Container */}
          <div className={styles.cardBox}>
            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Cover</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Origin</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div style={{ position: "relative", width: 56, height: 44, borderRadius: 8, overflow: "hidden", background: "#000000", border: "1px solid #cbd5e1" }}>
                          <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                        </div>
                      </td>
                      <td style={{ fontWeight: 800, color: "#000000" }}>{p.name}</td>
                      <td>{p.category}</td>
                      <td>{p.origin}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles.statusActive}`}>
                          <CheckCircle size={12} /> {p.status}
                        </span>
                      </td>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
