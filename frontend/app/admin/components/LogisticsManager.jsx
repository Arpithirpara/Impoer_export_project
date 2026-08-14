"use client";

import styles from "../admin.module.css";

export default function LogisticsManager() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>Gujarat Port Dispatch Reports</h3>
        <p>Track container shipments originating from Ahmedabad warehouses to major sea ports.</p>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>⚓</span>
          <h4>Mundra Port (Kutch)</h4>
          <p>
            <strong>Volume Dispatched:</strong> 6,800 MT
          </p>
          <p>
            <strong>Major Cargo:</strong> Rice, Spices, Flour
          </p>
        </div>

        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>⚓</span>
          <h4>Kandla Port (Gandhidham)</h4>
          <p>
            <strong>Volume Dispatched:</strong> 3,900 MT
          </p>
          <p>
            <strong>Major Cargo:</strong> Wheat, Maize, Cattle Feed
          </p>
        </div>

        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>⚓</span>
          <h4>Pipavav Port (Amreli)</h4>
          <p>
            <strong>Volume Dispatched:</strong> 1,750 MT
          </p>
          <p>
            <strong>Major Cargo:</strong> Sesame Seeds, Groundnut
          </p>
        </div>
      </div>
    </div>
  );
}
