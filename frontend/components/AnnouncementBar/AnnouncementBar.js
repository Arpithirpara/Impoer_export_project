"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  RefreshCw,
  X,
  Sparkles,
  ChevronRight,
  Globe,
  Zap,
} from "lucide-react";
import styles from "./announcement.module.css";

const ECO_EXPORT_ANNOUNCEMENTS = [
  {
    id: 1,
    icon: "🌾",
    badge: "BASMATI & GRAINS",
    text: "ECO EXPORT: Premium Exporter of Indian Basmati Rice, Milling Wheat & Pulses to 30+ Countries!",
  },
  {
    id: 2,
    icon: "🌶️",
    badge: "PURE SPICES",
    text: "B2B Wholesale Spices: ISO 22000 Certified Cumin, Turmeric, Red Chili & Sesame Seeds!",
  },
  {
    id: 3,
    icon: "🚢",
    badge: "PORT LOGISTICS",
    text: "Express Ocean Freight Dispatch direct from Mundra, Kandla & Pipavav Ports, Gujarat India!",
  },
  {
    id: 4,
    icon: "🇸🇦",
    badge: "EXHIBITION 2026",
    text: "Visit ECO EXPORT at The Saudi Food Show 2026 (Jeddah Superdome) — Stand No. 13-D9!",
  },
  {
    id: 5,
    icon: "🏆",
    badge: "QUALITY CERTIFIED",
    text: "APEDA, FIEO & HACCP Certified Agricultural Exporter — Request Instant Container B2B Quotes!",
  },
];

export default function AnnouncementBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // AUTO-OPEN MODAL ONLY AFTER PRELOADER COMPLETES
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Time States
  const [entryTime, setEntryTime] = useState("");
  const [refreshTime, setRefreshTime] = useState("");
  const [liveTime, setLiveTime] = useState("");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when popup modal is active
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  useEffect(() => {
    // 1. Calculate / Retrieve Entry Time (Session Storage)
    const now = new Date();
    const formattedNowTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const formattedDate = now.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const fullEntryStr = `${formattedDate}, ${formattedNowTime}`;

    let storedEntry = sessionStorage.getItem("eco_user_entry_time");
    if (!storedEntry) {
      sessionStorage.setItem("eco_user_entry_time", fullEntryStr);
      setEntryTime(fullEntryStr);
    } else {
      setEntryTime(storedEntry);
    }

    // 2. Set Refresh Time (Updates on every page mount / refresh)
    setRefreshTime(formattedNowTime);

    // 3. Live Clock & Session Duration Timer
    setLiveTime(formattedNowTime);
    const timerId = setInterval(() => {
      const liveNow = new Date();
      setLiveTime(
        liveNow.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    // 4. Auto Rotate Eco Export Announcements Ticker
    const slideId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ECO_EXPORT_ANNOUNCEMENTS.length);
    }, 4500);

    // 5. WAIT UNTIL PRELOADER FINISHES BEFORE OPENING MODAL AUTOMATICALLY (~1500ms delay)
    const preloaderTimer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    return () => {
      clearInterval(timerId);
      clearInterval(slideId);
      clearTimeout(preloaderTimer);
    };
  }, []);

  // Hide on admin routes
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const handleManualRefresh = () => {
    const updatedTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setRefreshTime(updatedTime);
  };

  const formatElapsed = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  const modalMarkup = showModal ? (
    <div
      className={styles.modalOverlay}
      onClick={() => setShowModal(false)}
    >
      <div
        className={styles.posterModalCard}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Red Top Close Button Overlay */}
        <button
          className={styles.posterCloseBtn}
          onClick={() => setShowModal(false)}
          aria-label="Close welcome announcement"
          title="Close"
        >
          <X size={22} />
        </button>

        {/* WELCOME BANNER HEADER */}
        <div className={styles.welcomeBannerBar}>
          <span className={styles.welcomeHandEmoji}>👋</span>
          <div>
            <h4 className={styles.welcomeTitle}>Welcome to ECO EXPORT</h4>
            <p className={styles.welcomeSubtitle}>
              Global Agricultural Commodities Exporter & Supplier
            </p>
          </div>
        </div>

        {/* Session Audit Header Bar (Entry Time & Refresh Time) */}
        <div className={styles.timestampBadgeBar}>
          <div className={styles.tsBadgeItem} title="Your Website Entry Time">
            <Clock size={13} className={styles.tsIcon} />
            <span>
              Entry:{" "}
              <strong>
                {entryTime
                  ? entryTime.split(", ")[1] || entryTime
                  : "Just now"}
              </strong>
            </span>
          </div>
          <div
            className={`${styles.tsBadgeItem} ${styles.tsClickable}`}
            onClick={handleManualRefresh}
            title="Click to refresh timestamp"
          >
            <RefreshCw size={13} className={styles.tsIcon} />
            <span>
              Refreshed: <strong>{refreshTime}</strong>
            </span>
          </div>
          <div className={styles.tsBadgeItem}>
            <Zap size={13} className={styles.tsIcon} />
            <span>
              Active: <strong>{formatElapsed(elapsedSeconds)}</strong>
            </span>
          </div>
        </div>

        {/* AUTO-ROTATING ECO EXPORT TICKER BAR */}
        <div className={styles.rotatingTickerWrap}>
          <div className={styles.tickerBadge}>
            <span>{ECO_EXPORT_ANNOUNCEMENTS[currentSlide].icon}</span>
            <span>{ECO_EXPORT_ANNOUNCEMENTS[currentSlide].badge}</span>
          </div>
          <div className={styles.tickerTextSlide} key={currentSlide}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>{ECO_EXPORT_ANNOUNCEMENTS[currentSlide].text}</span>
          </div>
        </div>

        {/* Single Official Saudi Food Show Exhibition Poster Image */}
        <div className={styles.posterImageWrap}>
          <img
            src="/new_annoucment_img/image.png"
            alt="ECO EXPORT Saudi Food Show 2026 Official Exhibition Invitation"
            className={styles.singlePosterImg}
          />
        </div>

        {/* Modal Bottom Action Footer Bar */}
        <div className={styles.posterFooterBar}>
          <div className={styles.liveClockText}>
            <Globe size={14} />
            <span>
              Current Time: <strong>{liveTime}</strong>
            </span>
          </div>
          <div className={styles.footerActionBtns}>
            <Link
              href="/inquiry"
              className={styles.inquiryBtn}
              onClick={() => setShowModal(false)}
            >
              Request B2B Quote
              <ChevronRight size={15} />
            </Link>
            <button
              className={styles.continueBtn}
              onClick={() => setShowModal(false)}
            >
              Close & Explore Website
            </button>
          </div>
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
          <span className={styles.chipTimeBadge}>{liveTime}</span>
        </button>
      )}

      {/* RENDER MODAL VIA REACT PORTAL DIRECTLY ON DOCUMENT BODY */}
      {mounted && modalMarkup && createPortal(modalMarkup, document.body)}
    </>
  );
}
