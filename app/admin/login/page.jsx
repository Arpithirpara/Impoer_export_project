"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // If already logged in, auto redirect to /admin
  useEffect(() => {
    const authCookie = document.cookie.split("; ").find((row) => row.startsWith("eco_admin_auth="));
    if (authCookie && authCookie.split("=")[1] === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    setTimeout(() => {
      if (email.trim() === "admin@eco.com" && password === "admin@eco123") {
        // Set Auth Cookie and LocalStorage
        document.cookie = "eco_admin_auth=true; path=/; max-age=86400";
        if (typeof window !== "undefined") {
          localStorage.setItem("eco_admin_auth", "true");
        }
        setIsLoading(false);
        router.push("/admin");
      } else {
        setIsLoading(false);
        setErrorMsg("Invalid Email or Password! Please check your credentials.");
      }
    }, 1200);
  };

  // Full Screen White & Green Preloader Screen with Logo Zoom Animation Effect
  if (isLoading) {
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
            AUTHENTICATING & LOADING ADMIN CONTROL PANEL...
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

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "inherit",
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8fafc 100%)",
      }}
    >
      {/* Main White Login Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#ffffff",
          border: "2px solid #143528",
          borderRadius: "28px",
          padding: "44px 36px",
          boxShadow: "0 20px 40px -15px rgba(20, 53, 40, 0.12)",
        }}
      >
        {/* Official Eco Export Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
              marginBottom: "14px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
              border: "3px solid #143528",
            }}
          >
            <Image
              src="/header/logo.png"
              alt="Eco Export Logo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#143528",
              margin: "0 0 2px",
              fontFamily: "Georgia, serif",
              letterSpacing: "0.02em",
            }}
          >
            ECO EXPORT
          </h1>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 800,
              color: "#16a34a",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "monospace",
            }}
          >
            AGRO EXPORT ADMIN PORTAL
          </span>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#fef2f2",
              border: "1.5px solid #ef4444",
              color: "#991b1b",
              padding: "12px 16px",
              borderRadius: "12px",
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0, color: "#dc2626" }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Email Input */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "#000000",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontFamily: "monospace",
              }}
            >
              Admin Email Address
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                size={18}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#64748b",
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                style={{
                  width: "100%",
                  padding: "12px 14px 12px 42px",
                  background: "#f8fafc",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "12px",
                  color: "#000000",
                  fontSize: "0.95rem",
                  outline: "none",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "#000000",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontFamily: "monospace",
              }}
            >
              Secret Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock
                size={18}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#64748b",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "12px 44px 12px 42px",
                  background: "#f8fafc",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "12px",
                  color: "#000000",
                  fontSize: "0.95rem",
                  outline: "none",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "#64748b",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "14px",
              background: "#143528",
              color: "#ffffff",
              border: "none",
              borderRadius: "14px",
              fontSize: "0.95rem",
              fontWeight: 800,
              cursor: isLoading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 6px 20px rgba(20, 53, 40, 0.25)",
              marginTop: "8px",
              transition: "all 0.2s ease",
            }}
          >
            <span>Sign In To Control Panel</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Back to Storefront Link */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Link
            href="/"
            style={{
              color: "#64748b",
              fontSize: "0.85rem",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Back to Storefront Website
          </Link>
        </div>
      </div>
    </div>
  );
}
