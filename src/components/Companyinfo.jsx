import React from "react";

export default function CompanyInfo() {
  const beige = "#f1d48b";

  return (
    <section
      className="company-section"
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start", // keep desktop same
      }}
    >
      <div
        className="company-container"
        style={{
          width: "93%",
          maxWidth: "1450px",
          background: "#ffffff",
          padding: "50px 70px 50px 50px",
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* HEADING */}
        <h2
          className="company-heading"
          style={{
            color: "black",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          About AMR Legacy Villas
        </h2>

        {/* CONTENT */}
        <p
          className="company-text"
          style={{
            fontSize: "22px",
            lineHeight: 1.8,
            color: "#000",
          }}
        >
          AMR Legacy Villas represents a thoughtfully planned residential
          development designed to offer a refined lifestyle in the
          fast-growing surroundings of Gowrelly, Hyderabad. Developed with a
          focus on quality construction, contemporary design, and long-term
          value, the project brings together spacious villas, landscaped open
          spaces, and modern lifestyle amenities. Located close to the Outer
          Ring Road, AMR Legacy ensures excellent connectivity to key parts
          of the city while maintaining a peaceful and private residential
          environment. With attention to detail, elegant architecture, and a
          commitment to comfortable living, AMR Legacy creates a premium
          villa community for families seeking both luxury and convenience.
        </p>
      </div>

      {/* ───────────────────────────────────────────── */}
      {/* RESPONSIVE STYLES (Same pattern as About) */}
      {/* ───────────────────────────────────────────── */}

      <style jsx global>{`

        @media (max-width: 1023px) {

          .company-section {
            padding: clamp(25px, 7vw, 45px) 0;
            justify-content: center !important;
          }

          .company-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(28px, 6vw, 45px) clamp(20px, 5vw, 35px) !important;
            border-radius: 10px !important;
          }

          .company-heading {
            font-size: clamp(24px, 6vw, 30px) !important;
            margin-bottom: clamp(15px, 4vw, 22px) !important;
          }

          .company-text {
            font-size: clamp(16px, 4.3vw, 20px) !important;
            line-height: 1.7 !important;
          }

        }

        /* Small Phones */

        @media (max-width: 480px) {

          .company-section {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .company-container {
            padding: 24px 18px !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }

        }

        /* Tablets */

        @media (min-width: 481px) and (max-width: 1023px) {

          .company-container {
            padding: clamp(32px, 6vw, 48px) clamp(28px, 5vw, 45px) !important;
          }

        }

        /* ≥1024px keeps your exact desktop styles */

      `}</style>
    </section>
  );
}