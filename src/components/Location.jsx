import React, { useState } from "react";
import { MapPin } from "lucide-react";
import img from "../assets/images/amr map.png";

export default function Location() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  const tabs = ["BUSINESS HUBS", "TRANSIT", "SCHOOLS", "HOSPITALS", "MALLS"];
  const [activeTab, setActiveTab] = useState("BUSINESS HUBS");

  // UPDATED LOCATION DATA FOR GOWRELLY
  const data = {
  "BUSINESS HUBS": [
    "Uppal IT Hub – 20 mins",
    "Pocharam IT SEZ – 25 mins",
    "Raheja Mindspace (via ORR) – 35–40 mins",
  ],

  TRANSIT: [
    "ORR Taramatipet Exit No. 10 – 2 mins",
    "ORR Warangal Exit No. 9 – 5 mins",
    "ORR Vijayawada Exit No. 11 – 5 mins",
    "Hayathnagar Metro (Proposed) – 10 mins",
    "LB Nagar Metro – 18 mins",
    "Nagole Metro – 20 mins",
  ],

  SCHOOLS: [
    "Johnson Grammar School  – 5 mins",
    "Indu International School – 10 mins",
    "Pallavi International School – 12 mins",
    "Akshara International School – 15 mins",
  ],

  HOSPITALS: [
    "Hayathnagar Government Hospital – 10 mins",
    "Sathya Hospital – 12 mins",
    "Kamineni Hospital – 20 mins",
  ],

  MALLS: [
    "M Mantra Mall – 15 mins",
    "DSL Virtue Mall – 20 mins",
    "Ramoji Film City – 12 mins",
    "ASIAN Cinemas LB Nagar – 15 mins",
  ],
};
  return (
    <section
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          width: "93%",
          maxWidth: "1450px",
          background: "#ffffff",
          padding: "40px 70px 50px 50px",
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* LOCATION BADGE */}
        <div
          style={{
            display: "inline-block",
            border: `2px solid ${gold}`,
            color: gold,
            padding: "8px 26px",
            borderRadius: "30px",
            fontWeight: "600",
            marginBottom: "25px",
            fontSize: "20px",
          }}
        >
          Location
        </div>

        {/* MAP */}
        <img
            src={img}
            alt="location map"
            style={{
                width: "100%",
                height: "380px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "30px",
                filter: "blur(3px)",   // ← ADD THIS
            }}
            />

        {/* HEADING */}
        <h2
          style={{
            color: "black",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          AMR Legacy Location Advantage
        </h2>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#000000",
            marginBottom: "30px",
            maxWidth: "1100px",
          }}
        >
          Located in the fast-developing corridor of Gowrelly, Hyderabad, the
          project enjoys close access to ORR Exits 9, 10, and 11 — connecting
          directly to all prime IT, education, and commercial hubs of Hyderabad.
          With fast metro expansion, ORR connectivity, reputed schools, and
          healthcare facilities nearby, Gowrelly offers an excellent mix of
          convenience and peaceful living.
        </p>

        {/* TABS */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 22px",
                borderRadius: "4px",
                border: `2px solid ${gold}`,
                background: activeTab === tab ? gold : "transparent",
                color: activeTab === tab ? "#fff" : gold,
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "15px",
                transition: "0.3s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* LOCATION LIST */}
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "15px",
          }}
        >
          {data[activeTab].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "18px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              <MapPin size={22} color={gold} /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}