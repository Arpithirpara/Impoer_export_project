"use client";

import { useState } from "react";
import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";
import {
  LayoutDashboard,
  Inbox,
  Package,
  Landmark,
  Anchor,
  Settings,
  Search,
  Globe,
  ChevronLeft,
  ChevronRight,
  Leaf,
  TrendingUp,
  Activity,
  User,
  Plus,
  Filter,
} from "lucide-react";
import styles from "./admin.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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

const initialProducts = [
  { id: "P-01", name: "1121 Extra Long Basmati Rice", category: "Rice", stock: "In Stock", price: "$980 / MT" },
  { id: "P-02", name: "Natural Hulled Sesame Seeds 99.95%", category: "Oil Seeds", stock: "In Stock", price: "$1,450 / MT" },
  { id: "P-03", name: "Teja S17 Stemless Red Chilli", category: "Spices", stock: "In Stock", price: "$2,100 / MT" },
  { id: "P-04", name: "Durum Wheat Semolina (Suji)", category: "Flour", stock: "Processing", price: "$420 / MT" },
  { id: "P-05", name: "Yellow Maize / Corn (Animal Feed)", category: "Cattle Feed", stock: "In Stock", price: "$290 / MT" },
];

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [products, setProducts] = useState(initialProducts);
  const [searchFilter, setSearchFilter] = useState("");

  const [newProdName, setNewProdName] = useState("");
  const [newProdCat, setNewProdCat] = useState("Spices");
  const [newProdPrice, setNewProdPrice] = useState("");

  const updateStatus = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;
    const newEntry = {
      id: `P-0${products.length + 1}`,
      name: newProdName,
      category: newProdCat,
      stock: "In Stock",
      price: newProdPrice,
    };
    setProducts([...products, newEntry]);
    setNewProdName("");
    setNewProdPrice("");
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "inquiries", label: "Inquiries & Leads", icon: Inbox, badge: inquiries.length },
    { id: "products", label: "Products Catalog", icon: Package, badge: products.length },
    { id: "exhibitions", label: "Trade Exhibitions", icon: Landmark },
    { id: "logistics", label: "Port Logistics", icon: Anchor },
    { id: "settings", label: "Portal Settings", icon: Settings },
  ];

  return (
    <div className={`${styles.adminLayout} ${inter.className}`}>
      {/* Sidebar Navigation */}
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
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`${styles.navBtn} ${activeNav === item.id ? styles.activeNavBtn : ""}`}
              >
                <IconComponent size={20} className={styles.navIcon} />
                {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
                {sidebarOpen && item.badge !== undefined && (
                  <span className={styles.navBadge}>{item.badge}</span>
                )}
              </button>
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

      {/* Main Content Area */}
      <div className={styles.mainWrapper}>
        {/* Top Navbar */}
        <header className={styles.topNavbar}>
          <div className={styles.navbarLeft}>
            <h2 className={`${styles.pageHeaderTitle} ${fraunces.className}`}>
              {activeNav === "dashboard" && "Dashboard Overview"}
              {activeNav === "inquiries" && "Buyer Inquiries & Leads"}
              {activeNav === "products" && "Product Inventory Catalog"}
              {activeNav === "exhibitions" && "Trade Exhibition Schedule"}
              {activeNav === "logistics" && "Port Logistics & Freight"}
              {activeNav === "settings" && "Portal Settings & System Status"}
            </h2>
          </div>

          <div className={styles.navbarRight}>
            <div className={styles.searchBox}>
              <Search size={16} className={styles.searchIconSvg} />
              <input
                type="text"
                placeholder="Search orders, buyers, products..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>

            <div className={styles.serverStatus}>
              <span className={styles.pulseDot}></span>
              <span>System Live</span>
            </div>

            <Link href="/" className={styles.websiteBtn}>
              <Globe size={16} style={{ marginRight: 6 }} />
              Main Website
            </Link>
          </div>
        </header>

        {/* Dashboard Content Pages */}
        <main className={styles.mainContent}>
          {/* 1. DASHBOARD OVERVIEW */}
          {activeNav === "dashboard" && (
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
          )}

          {/* 2. INQUIRIES & LEADS PAGE */}
          {activeNav === "inquiries" && (
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
                        <td><strong>{inq.id}</strong></td>
                        <td>
                          <strong className={styles.nameText}>{inq.name}</strong>
                          <span className={styles.subText}>{inq.company}</span>
                        </td>
                        <td>
                          <span>{inq.email}</span>
                          <span className={styles.subText}>{inq.phone}</span>
                        </td>
                        <td><span className={styles.commodityTag}>{inq.commodity}</span></td>
                        <td><strong>{inq.quantity}</strong></td>
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
          )}

          {/* 3. PRODUCTS CATALOG PAGE */}
          {activeNav === "products" && (
            <div className={styles.tableCard}>
              <div className={styles.tableHeaderFlex}>
                <div>
                  <h3>Agro Commodity Catalog</h3>
                  <p>Manage product listings, categories, and FOB price quotes.</p>
                </div>
              </div>

              <form onSubmit={handleAddProduct} className={styles.addProductBox}>
                <h4>+ Add New Product to Catalog</h4>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    required
                    placeholder="Product Title (e.g. Organic Cumin Seeds)"
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                  />
                  <select value={newProdCat} onChange={(e) => setNewProdCat(e.target.value)}>
                    <option value="Spices">Spices & Seasonings</option>
                    <option value="Rice">Rice Varieties</option>
                    <option value="Grains & Cereals">Grains & Cereals</option>
                    <option value="Flour">Flour & Meals</option>
                    <option value="Oil Seeds">Oil Seeds</option>
                    <option value="Cattle Feed">Animal & Cattle Feed</option>
                  </select>
                  <input
                    type="text"
                    required
                    placeholder="FOB Price (e.g. $1,200 / MT)"
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(e.target.value)}
                  />
                  <button type="submit" className={styles.submitBtn}>
                    <Plus size={16} style={{ marginRight: 4, display: "inline" }} />
                    Add Product
                  </button>
                </div>
              </form>

              <div className={styles.tableWrapper}>
                <table className={styles.proTable}>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Stock Availability</th>
                      <th>FOB Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id}>
                        <td><strong>{p.id}</strong></td>
                        <td><strong>{p.name}</strong></td>
                        <td><span className={styles.catPill}>{p.category}</span></td>
                        <td><span className={styles.stockPill}>{p.stock}</span></td>
                        <td><strong>{p.price}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. EXHIBITIONS PAGE */}
          {activeNav === "exhibitions" && (
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <h3>Exhibition Meetings & Trade Fair Bookings</h3>
                <p>Manage buyer stall registrations for upcoming international expos.</p>
              </div>

              <div className={styles.cardsGrid}>
                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>🇦🇪</span>
                  <h4>Gulfood Dubai 2026</h4>
                  <p><strong>Stall Location:</strong> Za'abeel Hall 6, Booth Z6-E12</p>
                  <p><strong>Scheduled Meetings:</strong> 12 Importers</p>
                  <p><strong>Dates:</strong> Feb 17 - 21, 2026</p>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>🇮🇳</span>
                  <h4>Indus Food India 2026</h4>
                  <p><strong>Stall Location:</strong> Hall 5, Stall A-24</p>
                  <p><strong>Scheduled Meetings:</strong> 9 Buyers</p>
                  <p><strong>Dates:</strong> Jan 12 - 15, 2026</p>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>🇯🇵</span>
                  <h4>Foodex Japan 2026</h4>
                  <p><strong>Stall Location:</strong> Hall 3, Booth 3B-40</p>
                  <p><strong>Scheduled Meetings:</strong> 5 Buyers</p>
                  <p><strong>Dates:</strong> Apr 07 - 10, 2026</p>
                </div>
              </div>
            </div>
          )}

          {/* 5. LOGISTICS PAGE */}
          {activeNav === "logistics" && (
            <div className={styles.tableCard}>
              <div className={styles.tableHeader}>
                <h3>Gujarat Port Dispatch Reports</h3>
                <p>Track container shipments originating from Ahmedabad warehouses to major sea ports.</p>
              </div>

              <div className={styles.cardsGrid}>
                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>⚓</span>
                  <h4>Mundra Port (Kutch)</h4>
                  <p><strong>Volume Dispatched:</strong> 6,800 MT</p>
                  <p><strong>Major Cargo:</strong> Rice, Spices, Flour</p>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>⚓</span>
                  <h4>Kandla Port (Gandhidham)</h4>
                  <p><strong>Volume Dispatched:</strong> 3,900 MT</p>
                  <p><strong>Major Cargo:</strong> Wheat, Maize, Cattle Feed</p>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.cardFlag}>⚓</span>
                  <h4>Pipavav Port (Amreli)</h4>
                  <p><strong>Volume Dispatched:</strong> 1,750 MT</p>
                  <p><strong>Major Cargo:</strong> Sesame Seeds, Groundnut</p>
                </div>
              </div>
            </div>
          )}

          {/* 6. SETTINGS PAGE */}
          {activeNav === "settings" && (
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
          )}
        </main>
      </div>
    </div>
  );
}
