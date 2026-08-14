"use client";

import { Plus } from "lucide-react";
import styles from "../admin.module.css";

export default function ProductsManager({
  products,
  newProdName,
  setNewProdName,
  newProdCat,
  setNewProdCat,
  newProdPrice,
  setNewProdPrice,
  handleAddProduct,
}) {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeaderFlex}>
        <div>
          <h3>Agro Commodity Catalog</h3>
          <p>Manage product listings, categories, and FOB price quotes.</p>
        </div>
      </div>

      <form onSubmit={handleAddProduct} className={styles.addProductBox}>
        <h4>+ Add New Product to Catalog</h4>
        <div className={styles.formRow}>
          <input
            type="text"
            required
            placeholder="Product Title (e.g. Organic Cumin Seeds)"
            value={newProdName}
            onChange={(e) => setNewProdName(e.target.value)}
          />
          <select value={newProdCat} onChange={(e) => setNewProdCat(e.target.value)}>
            <option value="Spices">Spices & Seasonings</option>
            <option value="Rice">Rice Varieties</option>
            <option value="Grains & Cereals">Grains & Cereals</option>
            <option value="Flour">Flour & Meals</option>
            <option value="Oil Seeds">Oil Seeds</option>
            <option value="Cattle Feed">Animal & Cattle Feed</option>
          </select>
          <input
            type="text"
            required
            placeholder="FOB Price (e.g. $1,200 / MT)"
            value={newProdPrice}
            onChange={(e) => setNewProdPrice(e.target.value)}
          />
          <button type="submit" className={styles.submitBtn}>
            <Plus size={16} style={{ marginRight: 4, display: "inline" }} />
            Add Product
          </button>
        </div>
      </form>

      <div className={styles.tableWrapper}>
        <table className={styles.proTable}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock Availability</th>
              <th>FOB Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <strong>{p.id}</strong>
                </td>
                <td>
                  <strong>{p.name}</strong>
                </td>
                <td>
                  <span className={styles.catPill}>{p.category}</span>
                </td>
                <td>
                  <span className={styles.stockPill}>{p.stock}</span>
                </td>
                <td>
                  <strong>{p.price}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
