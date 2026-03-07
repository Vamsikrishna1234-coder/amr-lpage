


import React from "react";

export default function About({ openPopup }) {
  const gold = "#b88a0b";
  const beige = "#d85b26bf";

  return (
    <section
      className="about-section"
      style={{
        backgroundColor: beige,
        padding: "20px 0",
        display: "flex",
        justifyContent: "flex-start", // original desktop behavior
      }}
    >
      <div
        className="about-container"
        style={{
          width: "92%",
          maxWidth: "1450px",
          marginLeft: "0px",           // original desktop left push
          background: "#ffffff",
          padding: "50px 80px 50px 50px", // original asymmetric padding
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* OVERVIEW BUTTON */}
        <div
          className="about-overview-tag"
          style={{
            display: "inline-block",
            border: `2px solid ${gold}`,
            color: gold,
            padding: "8px 26px",
            borderRadius: "30px",
            fontWeight: "600",
            marginBottom: "30px",
            background: "transparent",
            fontSize: "25px",
          }}
        >
          Overview
        </div>

        {/* HEADING */}
        <h2
          className="about-heading"
          style={{
            color: gold,
            fontSize: "35px",
            fontWeight: "500",
            marginBottom: "20px",
            lineHeight: 1.3,
          }}
        >
          About AMR Legacy, Gowrelly, Hyderabad
        </h2>

        {/* DESCRIPTION */}
        <p
          className="about-description"
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Located in the serene surroundings of Gowrelly, AMR Legacy Villas offers an
          exclusive villa community that blends timeless elegance with contemporary
          living. Developed with a vision to create a premium gated neighborhood, AMR
          Legacy features thoughtfully designed 3 and 4 BHK luxury villas crafted for
          families who appreciate space, privacy, and modern comfort. Inspired by
          sophisticated architectural design and surrounded by lush landscapes, these
          villas provide a peaceful retreat while maintaining excellent connectivity to
          Hyderabad through the Outer Ring Road. At AMR Legacy, you don’t just invest
          in a home — you embrace a refined lifestyle designed for comfort,
          sophistication, and long-term value.
        </p>

        <button
          className="about-request-btn"
          onClick={() => openPopup("Request Brochure")}
          style={{
            backgroundColor: "#d85b26df",
            color: "#fff",
            fontWeight: "600",
            padding: "12px 32px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            animation: "continuousTilt 2s ease-in-out infinite",
            position: "relative",
            overflow: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          <span
            className="shine"
            style={{
              position: "absolute",
              top: 0,
              left: "-60%",
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
              transition: "left 0.5s ease",
              pointerEvents: "none",
            }}
          />
          Request Brochure
        </button>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/*           RESPONSIVE STYLES – ONLY FOR THIS SECTION         */}
      {/* ──────────────────────────────────────────────── */}

      <style jsx global>{`
        @keyframes continuousTilt {
          0%   { transform: rotate(-1.2deg); }
          50%  { transform: rotate(1.2deg);  }
          100% { transform: rotate(-1.2deg); }
        }

        .about-request-btn:hover .shine {
          left: 120% !important;
          transition: left 0.7s ease;
        }

        /* ── Only apply to screens smaller than desktop ── */
        @media (max-width: 1023px) {
          .about-section {
            padding: clamp(30px, 8vw, 50px) 0;
            justify-content: center !important;
          }

          .about-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(28px, 6vw, 45px) clamp(20px, 5vw, 35px) !important;
            border-radius: 10px !important;
          }

          .about-overview-tag {
            padding: clamp(7px, 2vw, 11px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(18px, 5vw, 23px) !important;
            margin-bottom: clamp(20px, 5vw, 30px) !important;
          }

          .about-heading {
            font-size: clamp(26px, 7vw, 34px) !important;
            margin-bottom: clamp(16px, 4vw, 24px) !important;
          }

          .about-description {
            font-size: clamp(16px, 4.2vw, 20px) !important;
            margin-bottom: clamp(28px, 7vw, 40px) !important;
          }

          .about-request-btn {
            padding: clamp(11px, 3vw, 14px) clamp(22px, 6vw, 34px) !important;
            font-size: clamp(14px, 3.8vw, 16px) !important;
          }

          /* Very small phones */
          @media (max-width: 480px) {
            .about-section {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }
            .about-container {
              padding: 24px 18px !important;
              border-radius: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }
          }

          /* Tablets (better spacing) */
          @media (min-width: 481px) and (max-width: 1023px) {
            .about-container {
              padding: clamp(32px, 6vw, 48px) clamp(28px, 5vw, 45px) !important;
            }
          }
        }

        /* ≥ 1024px → nothing here → original inline styles remain unchanged */
      `}</style>
    </section>
  );
}




