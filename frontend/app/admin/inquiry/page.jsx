"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";
import InquiriesManager from "../components/InquiriesManager";
import { Fraunces, Inter } from "next/font/google";
import styles from "../admin.module.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const initialInquiries = [
  {
    id: "INQ-1001",
    name: "Tariq Al-Mansoor",
    company: "Gulf Oasis Trading LLC (UAE)",
    email: "tariq@gulfoasis.ae",
    phone: "+971 50 123 4567",
    commodity: "Basmati Rice 1121 Sella",
    quantity: "100 MT (5x20ft FCL)",
    status: "Pending",
    date: "Aug 13, 2026",
  },
  {
    id: "INQ-1002",
    name: "Hans Mueller",
    company: "Bavaria Agro Importers (Germany)",
    email: "h.mueller@bavaria-agro.de",
    phone: "+49 89 7654321",
    commodity: "Natural White Sesame Seeds",
    quantity: "40 MT",
    status: "Contacted",
    date: "Aug 12, 2026",
  },
  {
    id: "INQ-1003",
    name: "Rajesh Sharma",
    company: "Vedic Spices Pvt Ltd (India)",
    email: "rajesh@vedicspices.in",
    phone: "+91 98250 11223",
    commodity: "Dry Red Chilli S17 Teja",
    quantity: "25 MT",
    status: "Closed",
    date: "Aug 10, 2026",
  },
  {
    id: "INQ-1004",
    name: "Kenji Sato",
    company: "Nippon Foods Distribution (Japan)",
    email: "sato@nipponfoods.co.jp",
    phone: "+81 3 5555 0192",
    commodity: "Soybean Meal (Cattle Feed)",
    quantity: "200 MT",
    status: "Pending",
    date: "Aug 09, 2026",
  },
];

export default function AdminInquiryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [inquiries, setInquiries] = useState(initialInquiries);

  const updateStatus = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={styles.mainWrapper}>
        <TopHeader
          activeNav="inquiry"
          homeSubNav="inquiry"
          frauncesFont={fraunces}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <main className={styles.mainContent}>
          <InquiriesManager inquiries={inquiries} updateStatus={updateStatus} />
        </main>
      </div>
    </div>
  );
}
