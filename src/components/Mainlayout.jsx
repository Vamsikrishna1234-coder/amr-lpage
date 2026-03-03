




import React from "react";
import img1 from "../assets/images/amr hero3.jpg";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "95vh",
        backgroundColor: "#f1d48b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 0",
        flexDirection: "column",
      }}
    >
      <style>{`
        @keyframes zoomInOut {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.045); }
          100% { transform: scale(1); }
        }
        @keyframes panelShine {
          0%   { left: -80%; }
          50%  { left: 130%; }
          100% { left: 130%; }
        }
        @keyframes panelGlow {
          0%   { box-shadow: 0 0 18px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(0,0,0,0.5); }
          50%  { box-shadow: 0 0 38px rgba(0, 0, 0, 0.75), 0 8px 32px rgba(0,0,0,0.5); }
          100% { box-shadow: 0 0 18px rgba(0, 0, 0, 0.3), 0 8px 32px rgba(0,0,0,0.5); }
        }

        .hero-outer-wrap {
          position: absolute;
          left: 40px;
          top: 45%;
          /* ✅ translateY here — NOT inside animated element */
          transform: translateY(-50%);
          zIndex: 2;
          max-width: 420px;
          width: 100%;
        }

        .hero-content-box {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #000000e0, #000000e5, #000000e3);
          padding: 30px 28px;
          border-radius: 15px;
          animation:
            zoomInOut 1.5s ease-in-out infinite,
            panelGlow 1.8s ease-in-out infinite;
        }

        /* Shine sweep — same as Request Call Back button */
        .hero-content-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: -80%;
          width: 45%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(160, 136, 29, 0.4), transparent);
          animation: panelShine 2.5s ease-in-out infinite;
          pointer-events: none;
        }

        /* Gold top accent bar */
        .hero-content-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00000080, #00000069, #00000057);
          border-radius: 8px 8px 0 0;
        }

        @media (max-width: 768px) {
          .hero-outer-wrap {
            position: relative !important;
            left: 0 !important;
            top: auto !important;
            transform: none !important;
            margin-top: 20px;
            width: 90%;
          }
        }
      `}</style>

      {/* IMAGE */}
      <div
        style={{
          width: "100%",
          height: "92vh",
          backgroundImage: `url('${img1}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          // ✅ NO transform/filter/willChange here — keeps position:fixed children working
        }}
      >
        {/* BLACK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
          }}
        />

        {/* ✅ Outer wrapper: holds translateY only, no animation */}
        <div className="hero-outer-wrap" style={{ zIndex: 2 }}>

          {/* ✅ Inner box: animated zoom + glow + shine */}
          <div className="hero-content-box">

            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #c8962b, #e8b84b, #c8962b)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "13px",
                padding: "7px 20px",
                borderRadius: "3px",
                marginBottom: "20px",
                letterSpacing: "0.03em",
                boxShadow: "0 2px 8px rgba(200,150,43,0.4)",
              }}
            >
              New Tower Launch
            </div>

            <h1
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: "700",
                fontSize: "38px",
                color: "#ffffff",
                margin: "0 0 6px 0",
                lineHeight: 1.15,
              }}
            >
              Amr Legacy
            </h1>

            <p
              style={{
                color: "#d0ccc4",
                fontSize: "15px",
                margin: "0 0 22px 0",
                letterSpacing: "0.02em",
              }}
            >
              At Gowrelly, Hyderabad
            </p>

            {/* Features */}
            <div
              style={{
                background: "#9a6f08",
                borderRadius: "6px",
                padding: "16px 18px",
                marginBottom: "22px",
              }}
            >
              {[
                "1,200+* Flats Sold Out",
                "75,000 sq. ft* + 6 Floor Palace Themed Clubhouse",
                "Neoclassical Architecture",
                "Secure Gated Community",
              ].map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "10px",
                    color: "#ffffff",
                    fontSize: "14px",
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    style={{
                      color: "#C9A227",
                      fontSize: "11px",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  {feat}
                </div>
              ))}
            </div>

            <p
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "17px",
                margin: "0 0 24px 0",
                lineHeight: 1.6,
              }}
            >
              3 &amp; 4 BHK Regal Residences
              <br />
              <span style={{ fontWeight: "400", color: "#ccc", fontSize: "15px" }}>
                starting at{" "}
              </span>
              ₹1.69 Cr*
            </p>

            <button
              style={{
                background: "linear-gradient(135deg, #c8962b, #e8b84b, #c8962b)",
                color: "#fff",
                fontWeight: "700",
                fontSize: "14px",
                padding: "12px 32px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "background 0.2s",
                boxShadow: "0 4px 12px rgba(200,150,43,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#9a6f08")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #c8962b, #e8b84b, #c8962b)")}
            >
              Enquire Now
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}