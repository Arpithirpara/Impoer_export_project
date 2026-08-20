"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Monitor,
  Package,
  Layers,
  Globe,
  Calendar,
  FileText,
  Camera,
  Info,
  MessageSquare,
  Settings,
  ChevronRight,
  LogOut,
  X,
  Users,
} from "lucide-react";
import styles from "../admin.module.css";

const navItems = [
  { label: "DASHBOARD", href: "/admin", icon: LayoutDashboard },
  { label: "INQUIRIES & RFQS", href: "/admin/inquiries", icon: MessageSquare },
  { label: "CATEGORIES", href: "/admin/categories", icon: Layers },
  { label: "PRODUCTS CATALOG", href: "/admin/products", icon: Package },
  { label: "EXHIBITIONS", href: "/admin/exhibitions", icon: Calendar },
  { label: "EXPORT COUNTRIES", href: "/admin/countries", icon: Globe },
   { label: "VISITOR MANAGEMENT", href: "/admin/visitors", icon: Users },
  { label: "HOME-PAGE", href: "/admin/hero", icon: Monitor },
  { label: "BLOG ARTICLES", href: "/admin/blog", icon: FileText },
  { label: "PHOTO GALLERY", href: "/admin/gallery", icon: Camera },
  { label: "ABOUT & LOGISTICS", href: "/admin/about", icon: Info },
  { label: "STORE SETTINGS", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "eco_admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    if (typeof window !== "undefined") {
      localStorage.removeItem("eco_admin_auth");
    }
    router.push("/admin/login");
  };

  return (
    <aside
      className={`${styles.sidebar} ${
        sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      {/* Sidebar Brand Header */}
      <div className={styles.sidebarBrand}>
        <Link href="/admin" className={styles.brandLogo}>
          <div className={styles.brandIconWrap}>
            <Image
              src="/header/logo.png"
              alt="Eco Export Logo"
              width={38}
              height={38}
              className={styles.brandLogoImg}
            />
          </div>
          <div>
            <h1 className={styles.brandTitle}>ECO EXPORT</h1>
            <span className={styles.brandSubtitle}>AGRO EXPORT ADMIN</span>
          </div>
        </Link>
        <button
          onClick={() => setSidebarOpen(false)}
          className={styles.closeSidebarBtn}
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Portal List */}
      <nav className={styles.sidebarNav}>
        <div className={styles.navGroupLabel}>MANAGEMENT PORTAL</div>

        <div className={styles.navStack}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${
                  isActive ? styles.activeNavItem : ""
                }`}
                onClick={() => {
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
              >
                <div className={styles.navItemLeft}>
                  <Icon size={19} className={styles.navIcon} />
                  <span className={styles.navText}>{item.label}</span>
                </div>
                {isActive && (
                  <ChevronRight size={18} className={styles.activeArrow} />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Sidebar Footer User Card */}
      <div className={styles.sidebarFooter}>
        <div className={styles.userCard}>
          <div className={styles.userAvatar}>EE</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Arpit Hirpara</p>
            <span className={styles.userRole}>Super Admin</span>
          </div>
          <button
            onClick={handleLogout}
            title="Logout Admin Session"
            className={styles.logoutBtn}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
