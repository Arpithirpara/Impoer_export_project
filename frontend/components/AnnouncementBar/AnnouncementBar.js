"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
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
      html.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
      html.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    }
    return () => {
      html.style.overflow = "unset";
      document.body.style.overflow = "unset";
      html.classList.remove("no-scroll");
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  useEffect(() => {
    // Auto-open modal shortly after the page mounts
    const preloaderTimer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    return () => clearTimeout(preloaderTimer);
  }, []);

  // Hide on admin routes
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const modalMarkup = showModal ? (
    <div className={styles.modalOverlay}>
      <div className={styles.posterModalCard}>
        {/* Red Top Close (Cross) Button Overlay */}
        <button
          className={styles.posterCloseBtn}
          onClick={() => setShowModal(false)}
          aria-label="Close welcome announcement"
          title="Close"
        >
          <X size={22} />
        </button>

        {/* Single Official Exhibition / Announcement Poster Image */}
        <div className={styles.posterImageWrap}>
          <img
            src="/header/popup.png"
            alt="ECO EXPORT Announcement"
            className={styles.singlePosterImg}
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* FLOATING RE-OPEN BADGE (Shows when modal is closed) */}
      {!showModal && (
        <button
          className={styles.floatingChip}
          onClick={() => setShowModal(true)}
          title="Open Welcome Announcement"
          aria-label="Open Welcome Announcement"
        >
          <span className={styles.welcomeEmoji}>✨</span>
          <span className={styles.chipText}>Welcome to ECO EXPORT</span>
        </button>
      )}

      {/* RENDER MODAL VIA REACT PORTAL DIRECTLY ON DOCUMENT BODY */}
      {mounted && modalMarkup && createPortal(modalMarkup, document.body)}
    </>
  );
}