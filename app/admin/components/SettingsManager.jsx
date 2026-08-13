"use client";

import styles from "../admin.module.css";

export default function SettingsManager() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>System Settings & Server Status</h3>
        <p>Configuration details for Eco Export admin management portal.</p>
      </div>
      <div className={styles.settingsBox}>
        <div className={styles.settingItem}>
          <div>
            <strong>Direct URL Access Flow</strong>
            <p>Admin portal is accessible via URL without mandatory login screen.</p>
          </div>
          <span className={styles.settingBadgeActive}>Active</span>
        </div>
        <div className={styles.settingItem}>
          <div>
            <strong>Auto Inquiry Email Notifications</strong>
            <p>Receive immediate email copy whenever a buyer submits a quote request.</p>
          </div>
          <span className={styles.settingBadgeActive}>Active</span>
        </div>
      </div>
    </div>
  );
}
