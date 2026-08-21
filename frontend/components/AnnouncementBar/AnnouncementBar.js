"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import styles from "./announcement.module.css";

export default function AnnouncementBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when popup modal is active
  useEffect(() => {
    const html = document.documentElement;
    if (showModal) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
    }
    return () => {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  // Auto-open modal shortly after mount & Escape key listener
  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setShowModal(true);
    }, 1200);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(preloaderTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Hide on admin routes
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const modalMarkup = showModal ? (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
    >
      <div className={styles.posterModalCard}>
        {/* Floating Circle Close Button */}
        <button
          className={styles.posterCloseBtn}
          onClick={() => setShowModal(false)}
          aria-label="Close welcome announcement"
          title="Close (Esc)"
        >
          <X size={18} />
        </button>

        {/* Single Announcement Poster Image */}
        <div className={styles.posterImageWrap}>
          <img
            src="/header/popup.png"
            alt="ECO EXPORT Announcement"
            className={styles.singlePosterImg}
          />
        </div>

        {/* Action Footer */}
        <div className={styles.modalFooter}>
          <Link
            href="/inquiry"
            className={styles.modalCtaBtn}
            onClick={() => setShowModal(false)}
          >
            Inquire Now
          </Link>
          <button
            className={styles.modalDismissBtn}
            onClick={() => setShowModal(false)}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* RENDER MODAL VIA REACT PORTAL DIRECTLY ON DOCUMENT BODY */}
      {mounted && modalMarkup && createPortal(modalMarkup, document.body)}
    </>
  );
}