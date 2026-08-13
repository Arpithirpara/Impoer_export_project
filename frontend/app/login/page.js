"use client";

import { useState } from "react";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import styles from "./login.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={`${styles.page} ${inter.className}`}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.badge}>Partner Portal</span>
          <h1 className={`${styles.title} ${fraunces.className}`}>Buyer & Exporter Sign In</h1>
          <p className={styles.subtitle}>
            Access your shipment quotes, export documentation, and order tracking.
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p style={{ color: "#16a34a", fontWeight: "600", fontSize: "16px" }}>
              ✓ Login Successful
            </p>
            <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
              Redirecting to your export dashboard...
            </p>
            <Link href="/" className={styles.forgot} style={{ marginTop: "16px", display: "inline-block" }}>
              Back to Homepage
            </Link>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.row}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <Link href="/contact" className={styles.forgot}>
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Sign In to Portal
            </button>
          </form>
        )}

        <div className={styles.footerText}>
          Don't have a trading account?{" "}
          <Link href="/inquiry">Request Access</Link>
        </div>
      </div>
    </main>
  );
}
