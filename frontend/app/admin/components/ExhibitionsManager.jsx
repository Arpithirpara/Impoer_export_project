"use client";

import styles from "../admin.module.css";

export default function ExhibitionsManager() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>Exhibition Meetings & Trade Fair Bookings</h3>
        <p>Manage buyer stall registrations for upcoming international expos.</p>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>🇦🇪</span>
          <h4>Gulfood Dubai 2026</h4>
          <p>
            <strong>Stall Location:</strong> Za'abeel Hall 6, Booth Z6-E12
          </p>
          <p>
            <strong>Scheduled Meetings:</strong> 12 Importers
          </p>
          <p>
            <strong>Dates:</strong> Feb 17 - 21, 2026
          </p>
        </div>

        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>🇮🇳</span>
          <h4>Indus Food India 2026</h4>
          <p>
            <strong>Stall Location:</strong> Hall 5, Stall A-24
          </p>
          <p>
            <strong>Scheduled Meetings:</strong> 9 Buyers
          </p>
          <p>
            <strong>Dates:</strong> Jan 12 - 15, 2026
          </p>
        </div>

        <div className={styles.infoCard}>
          <span className={styles.cardFlag}>🇯🇵</span>
          <h4>Foodex Japan 2026</h4>
          <p>
            <strong>Stall Location:</strong> Hall 3, Booth 3B-40
          </p>
          <p>
            <strong>Scheduled Meetings:</strong> 5 Buyers
          </p>
          <p>
            <strong>Dates:</strong> Apr 07 - 10, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
