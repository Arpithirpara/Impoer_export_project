"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Home as HomeIcon,
  Info,
  Package,
  Grid,
  Landmark,
  Globe2,
  Image as ImageIcon,
  FileText,
  Mail,
  Inbox,
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf,
  User,
} from "lucide-react";
import styles from "../admin.module.css";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Home Banners", path: "/admin/home", icon: HomeIcon },
    { label: "About Page", path: "/admin/about", icon: Info },
    { label: "Products", path: "/admin/product", icon: Package },
    { label: "Categories", path: "/admin/categorys", icon: Grid },
    { label: "Exhibitions", path: "/admin/exhibitions", icon: Landmark },
    { label: "Countries & Ports", path: "/admin/contry", icon: Globe2 },
    { label: "Gallery", path: "/admin/gallery", icon: ImageIcon },
    { label: "Blog Articles", path: "/admin/blog", icon: FileText },
    { label: "Contact Requests", path: "/admin/contact", icon: Mail },
    { label: "Buyer Inquiries", path: "/admin/inquiry", icon: Inbox },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarExpanded : styles.sidebarCollapsed}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.brandLogo}>
          <div className={styles.logoIconBox}>
            <Leaf className={styles.logoIconSvg} size={22} />
          </div>
          {sidebarOpen && (
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>Eco Export</span>
              <span className={styles.brandBadge}>PRO ADMIN</span>
            </div>
          )}
        </div>
        <button
          className={styles.toggleSidebarBtn}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title="Toggle Sidebar"
        >
          {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className={styles.sidebarNav}>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navBtn} ${isActive ? styles.activeNavBtn : ""}`}
            >
              <IconComponent size={19} className={styles.navIcon} />
              {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={styles.sidebarFooter}>
        {sidebarOpen ? (
          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              <User size={18} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Export Manager</span>
              <span className={styles.userRole}>admin@ecoexport.in</span>
            </div>
          </div>
        ) : (
          <div className={styles.avatarMini}>
            <User size={16} />
          </div>
        )}
      </div>
    </aside>
  );
}
