"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";

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
      if (email.trim() === "admin@eco.com" && password === "admin@321") {
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

  // Full Screen Preloader Screen
  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #15803d 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
              marginBottom: "20px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#ffffff",
              padding: "12px",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
              animation: "ecoLogoZoom 1.8s infinite alternate cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <Image
              src="/header/Eco_Logo.png"
              alt="Eco Export Preloader Logo"
              fill
              style={{ objectFit: "contain", padding: "16px" }}
              priority
            />
          </div>

          <h1 style={{ fontSize: "1.6rem", fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
            ECO EXPORT
          </h1>

          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#4ade80",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Authenticating Admin Session...
          </span>

          <div
            style={{
              width: "200px",
              height: "4px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                background: "#4ade80",
                borderRadius: "999px",
                animation: "ecoLoaderMove 1.2s infinite alternate ease-in-out",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes ecoLogoZoom {
            0% { transform: scale(0.85); }
            100% { transform: scale(1.08); }
          }
          @keyframes ecoLoaderMove {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(150%); }
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
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "radial-gradient(circle at 50% 10%, #f0fdf4 0%, #f8fafc 60%, #e2e8f0 100%)",
      }}
    >
      {/* Premium Glassmorphism Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "40px 32px",
          boxShadow: "0 20px 50px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand Logo & Header */}
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
              width: "320px",
              height: "115px",
              marginBottom: "16px",
              maxWidth: "100%",
            }}
          >
            <Image
              src="/header/Eco_Logo.png"
              alt="Eco Export Logo"
              fill
              style={{ objectFit: "contain", filter: "contrast(1.05)" }}
              priority
              unoptimized
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(22, 163, 74, 0.08)",
              border: "1px solid rgba(22, 163, 74, 0.2)",
              color: "#15803d",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            <ShieldCheck size={13} />
            <span>Control Panel Login</span>
          </div>

          <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "#64748b", fontWeight: 500 }}>
            Sign in to manage commodities, RFQs & global buyers
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#fef2f2",
              border: "1px solid #fca5a5",
              color: "#991b1b",
              padding: "12px 14px",
              borderRadius: "14px",
              fontSize: "0.84rem",
              fontWeight: 600,
              marginBottom: "20px",
              animation: "shake 0.3s ease",
            }}
          >
            <AlertCircle size={18} style={{ flexShrink: 0, color: "#dc2626" }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Email Input */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#334155",
                marginBottom: "7px",
              }}
            >
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                size={18}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@eco.com"
                style={{
                  width: "100%",
                  padding: "12px 14px 12px 42px",
                  background: "#f8fafc",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "12px",
                  color: "#0f172a",
                  fontSize: "0.92rem",
                  outline: "none",
                  fontWeight: 600,
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
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#334155",
                marginBottom: "7px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock
                size={18}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px 44px 12px 42px",
                  background: "#f8fafc",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "12px",
                  color: "#0f172a",
                  fontSize: "0.92rem",
                  outline: "none",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "4px",
                }}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "13px",
              background: "linear-gradient(135deg, #0f172a 0%, #15803d 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              fontSize: "0.92rem",
              fontWeight: 700,
              cursor: isLoading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 6px 18px rgba(21, 128, 61, 0.3)",
              marginTop: "6px",
              transition: "all 0.2s ease",
            }}
          >
            <span>Sign In to Admin Panel</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Back to Website Link */}
        <div style={{ marginTop: "22px", textAlign: "center" }}>
          <Link
            href="/"
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "color 0.2s ease",
            }}
          >
            ← Return to Eco Export Website
          </Link>
        </div>
      </div>
    </div>
  );
}
