"use client";

import styles from "../admin.module.css";

export default function InquiriesManager({ inquiries, updateStatus }) {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableHeader}>
        <h3>Buyer Container Inquiries</h3>
        <p>Manage RFQs and quote requests submitted by international buyers.</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.proTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Buyer Info</th>
              <th>Contact</th>
              <th>Commodity Requested</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id}>
                <td>
                  <strong>{inq.id}</strong>
                </td>
                <td>
                  <strong className={styles.nameText}>{inq.name}</strong>
                  <span className={styles.subText}>{inq.company}</span>
                </td>
                <td>
                  <span>{inq.email}</span>
                  <span className={styles.subText}>{inq.phone}</span>
                </td>
                <td>
                  <span className={styles.commodityTag}>{inq.commodity}</span>
                </td>
                <td>
                  <strong>{inq.quantity}</strong>
                </td>
                <td>{inq.date}</td>
                <td>
                  <span
                    className={`${styles.statusPill} ${
                      inq.status === "Pending"
                        ? styles.pillPending
                        : inq.status === "Contacted"
                        ? styles.pillContacted
                        : styles.pillClosed
                    }`}
                  >
                    {inq.status}
                  </span>
                </td>
                <td>
                  <select
                    value={inq.status}
                    onChange={(e) => updateStatus(inq.id, e.target.value)}
                    className={styles.actionSelect}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
