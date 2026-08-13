"use client";

import { Inbox, Package, Landmark, Anchor, TrendingUp } from "lucide-react";
import styles from "../admin.module.css";

export default function DashboardOverview({
  inquiries,
  products,
  setActiveNav,
}) {
  return (
    <div className={styles.dashboardContainer}>
      {/* Stat Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <Inbox size={26} color="#15803d" />
          </div>
          <div className={styles.statDetails}>
            <span className={styles.statLabel}>Total Inquiries</span>
            <span className={styles.statNumber}>142 Requests</span>
            <span className={styles.statTrendPositive}>
              <TrendingUp size={14} style={{ display: "inline", marginRight: 3 }} />
              +14.2% this month
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <Package size={26} color="#15803d" />
          </div>
          <div className={styles.statDetails}>
            <span className={styles.statLabel}>Active Commodities</span>
            <span className={styles.statNumber}>{products.length} Products</span>
            <span className={styles.statSub}>100% Export Grade</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <Landmark size={26} color="#15803d" />
          </div>
          <div className={styles.statDetails}>
            <span className={styles.statLabel}>Exhibition Meetings</span>
            <span className={styles.statNumber}>28 Booth Meetings</span>
            <span className={styles.statSub}>Gulfood & Indus Food</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrap}>
            <Anchor size={26} color="#15803d" />
          </div>
          <div className={styles.statDetails}>
            <span className={styles.statLabel}>Export Volume</span>
            <span className={styles.statNumber}>12,450 MT</span>
            <span className={styles.statTrendPositive}>
              <TrendingUp size={14} style={{ display: "inline", marginRight: 3 }} />
              Mundra & Kandla
            </span>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Preview Widget */}
      <div className={styles.widgetCard}>
        <div className={styles.widgetHeader}>
          <h3>Recent Buyer Inquiries</h3>
          <button onClick={() => setActiveNav("inquiries")} className={styles.viewAllBtn}>
            View All Leads →
          </button>
        </div>
        <div className={styles.recentGrid}>
          {inquiries.slice(0, 3).map((inq) => (
            <div key={inq.id} className={styles.recentItem}>
              <div className={styles.itemHeader}>
                <strong>{inq.name}</strong>
                <span className={styles.badgePending}>{inq.status}</span>
              </div>
              <p className={styles.itemCompany}>{inq.company}</p>
              <div className={styles.itemMeta}>
                <span>🌾 {inq.commodity}</span>
                <span>📦 {inq.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
