"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // If on /admin/login page, bypass check
    if (pathname === "/admin/login") {
      setIsChecking(false);
      return;
    }

    // Check auth in Cookie or LocalStorage
    const authCookie = document.cookie.split("; ").find((row) => row.startsWith("eco_admin_auth="));
    const hasCookieAuth = authCookie && authCookie.split("=")[1] === "true";
    const hasLocalAuth = typeof window !== "undefined" && localStorage.getItem("eco_admin_auth") === "true";

    if (hasCookieAuth || hasLocalAuth) {
      setIsAuthenticated(true);
      // Brief preloader effect for smooth transition
      const timer = setTimeout(() => setIsChecking(false), 500);
      return () => clearTimeout(timer);
    } else {
      setIsChecking(false);
      router.push("/admin/login");
    }
  }, [pathname, router]);

  // If on login page, render children directly
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Preloader Screen: White & Green Theme + Smooth Logo Zoom Effect
  if (isChecking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #ecfdf5 100%)",
          color: "#143528",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "inherit",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Logo Zoom & Pulse Container */}
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              marginBottom: "22px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #143528",
              boxShadow: "0 12px 35px rgba(22, 163, 74, 0.3)",
              animation: "ecoLogoZoomPulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate",
            }}
          >
            <Image
              src="/header/logo.png"
              alt="Eco Export Preloader Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1
            style={{
              fontSize: "1.85rem",
              fontWeight: 800,
              color: "#143528",
              margin: "0 0 4px",
              fontFamily: "Georgia, serif",
              letterSpacing: "0.03em",
            }}
          >
            ECO EXPORT
          </h1>

          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 800,
              color: "#16a34a",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "monospace",
              marginBottom: "24px",
            }}
          >
            LOADING ADMIN CONTROL PANEL...
          </span>

          {/* Animated Green Loader Bar */}
          <div
            style={{
              width: "220px",
              height: "5px",
              background: "#cbd5e1",
              borderRadius: "999px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                background: "linear-gradient(90deg, #143528, #16a34a)",
                borderRadius: "999px",
                animation: "ecoLoaderMove 1.2s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes ecoLogoZoomPulse {
            0% {
              transform: scale(0.75);
              box-shadow: 0 4px 15px rgba(22, 163, 74, 0.2);
            }
            70% {
              transform: scale(1.12);
              box-shadow: 0 16px 45px rgba(22, 163, 74, 0.45);
            }
            100% {
              transform: scale(1.02);
              box-shadow: 0 12px 35px rgba(22, 163, 74, 0.35);
            }
          }
          @keyframes ecoLoaderMove {
            0% {
              transform: translateX(-40%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
