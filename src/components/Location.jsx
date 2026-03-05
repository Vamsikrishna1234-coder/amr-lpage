// import React, { useState } from "react";
// import { MapPin } from "lucide-react";
// import img from "../assets/images/amr map.png";

// export default function Location({ openPopup }) {
//   const gold = "#b88a0b";
//   const beige = "#f1d48b";

//   const tabs = ["BUSINESS HUBS", "TRANSIT", "SCHOOLS", "HOSPITALS", "MALLS"];
//   const [activeTab, setActiveTab] = useState("BUSINESS HUBS");

//   // UPDATED LOCATION DATA FOR GOWRELLY
//   const data = {
//   "BUSINESS HUBS": [
//     "Uppal IT Hub – 20 mins",
//     "Pocharam IT SEZ – 25 mins",
//     "Raheja Mindspace (via ORR) – 35–40 mins",
//   ],

//   TRANSIT: [
//     "ORR Taramatipet Exit No. 10 – 2 mins",
//     "ORR Warangal Exit No. 9 – 5 mins",
//     "ORR Vijayawada Exit No. 11 – 5 mins",
//     "Hayathnagar Metro (Proposed) – 10 mins",
//     "LB Nagar Metro – 18 mins",
//     "Nagole Metro – 20 mins",
//   ],

//   SCHOOLS: [
//     "Johnson Grammar School  – 5 mins",
//     "Indu International School – 10 mins",
//     "Pallavi International School – 12 mins",
//     "Akshara International School – 15 mins",
//   ],

//   HOSPITALS: [
//     "Hayathnagar Government Hospital – 10 mins",
//     "Sathya Hospital – 12 mins",
//     "Kamineni Hospital – 20 mins",
//   ],

//   MALLS: [
//     "M Mantra Mall – 15 mins",
//     "DSL Virtue Mall – 20 mins",
//     "Ramoji Film City – 12 mins",
//     "ASIAN Cinemas LB Nagar – 15 mins",
//   ],
// };
//   return (
//     <section id="location"
//       style={{
//         backgroundColor: beige,
//         padding: "10px 0",
//         display: "flex",
//         justifyContent: "flex-start",
//       }}
//     >
//       <div 
//         style={{
//           width: "93%",
//           maxWidth: "1450px",
//           background: "#ffffff",
//           padding: "40px 70px 50px 50px",
//           borderRadius: "6px",
//           border: "1px solid #e5d6a7",
//         }}
//       >
//         {/* LOCATION BADGE */}
//         <div
//           style={{
//             display: "inline-block",
//             border: `2px solid ${gold}`,
//             color: gold,
//             padding: "8px 26px",
//             borderRadius: "30px",
//             fontWeight: "600",
//             marginBottom: "25px",
//             fontSize: "20px",
//           }}
//         >
//           Location
//         </div>

//         <div
//         onClick={() => openPopup("Get Directions")}
//         style={{
//           position: "relative",
//           cursor: "pointer",
//         }}
//       >
//         <img
//           src={img}
//           alt="location map"
//           style={{
//             width: "100%",
//             height: "380px",
//             objectFit: "cover",
//             borderRadius: "6px",
//             marginBottom: "30px",
//             filter: "blur(3px)",
//           }}
//         />
//       </div>

//         {/* HEADING */}
//         <h2
//           style={{
//             color: "black",
//             fontSize: "32px",
//             fontWeight: "600",
//             marginBottom: "15px",
//           }}
//         >
//           AMR Legacy Location Advantage
//         </h2>

//         <p
//           style={{
//             fontSize: "22px",
//             lineHeight: 1.7,
//             color: "#000000",
//             marginBottom: "30px",
//             maxWidth: "1100px",
//           }}
//         >
//           Located in the fast-developing corridor of Gowrelly, Hyderabad, the
//           project enjoys close access to ORR Exits 9, 10, and 11 — connecting
//           directly to all prime IT, education, and commercial hubs of Hyderabad.
//           With fast metro expansion, ORR connectivity, reputed schools, and
//           healthcare facilities nearby, Gowrelly offers an excellent mix of
//           convenience and peaceful living.
//         </p>

//         {/* TABS */}
//         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               style={{
//                 padding: "10px 22px",
//                 borderRadius: "4px",
//                 border: `2px solid ${gold}`,
//                 background: activeTab === tab ? gold : "transparent",
//                 color: activeTab === tab ? "#fff" : gold,
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 fontSize: "15px",
//                 transition: "0.3s",
//               }}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* LOCATION LIST */}
//         <div
//           style={{
//             marginTop: "30px",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//             gap: "15px",
//           }}
//         >
//           {data[activeTab].map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 fontSize: "18px",
//                 fontWeight: "500",
//                 color: "#333",
//               }}
//             >
//               <MapPin size={22} color={gold} /> {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import { MapPin } from "lucide-react";
import img from "../assets/images/amr map.png";

export default function Location({ openPopup }) {
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
      id="location"
      className="location-section"
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="location-container"
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
          className="location-badge"
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

        {/* MAP IMAGE */}
        <div
          className="location-map-wrapper"
          onClick={() => openPopup("Get Directions")}
          style={{
            position: "relative",
            cursor: "pointer",
            marginBottom: "30px",
          }}
        >
          <img
            src={img}
            alt="location map"
            style={{
              width: "100%",
              height: "380px",
              objectFit: "cover",
              borderRadius: "6px",
              filter: "blur(3px)",
            }}
          />
        </div>

        {/* HEADING */}
        <h2
          className="location-heading"
          style={{
            color: "black",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          AMR Legacy Location Advantage
        </h2>

        {/* DESCRIPTION */}
        <p
          className="location-description"
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
        <div
          className="location-tabs"
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            overflowX: "auto",
            paddingBottom: "10px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`location-tab-btn ${activeTab === tab ? "active" : ""}`}
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
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* LOCATION LIST */}
        <div
          className="location-list"
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
              className="location-item"
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

      {/* Scoped responsive styles – only for < 1024px */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .location-section {
            padding: clamp(30px, 8vw, 60px) 0;
            justify-content: center !important;
          }

          .location-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(30px, 6vw, 45px) clamp(20px, 5vw, 40px) !important;
            border-radius: 10px !important;
          }

          .location-badge {
            padding: clamp(7px, 2vw, 11px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(18px, 4.5vw, 22px) !important;
            margin-bottom: clamp(20px, 5vw, 28px) !important;
          }

          .location-map-wrapper img {
            height: clamp(260px, 65vw, 340px) !important;
            filter: blur(2px) !important;
          }

          .location-heading {
            font-size: clamp(26px, 7vw, 32px) !important;
            margin-bottom: clamp(12px, 3vw, 18px) !important;
          }

          .location-description {
            font-size: clamp(16px, 4.2vw, 20px) !important;
            margin-bottom: clamp(24px, 6vw, 35px) !important;
          }

          .location-tabs {
            gap: clamp(10px, 3vw, 15px) !important;
            padding-bottom: 12px !important;
          }

          .location-tab-btn {
            padding: clamp(8px, 2.5vw, 12px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(13px, 3.6vw, 15px) !important;
          }

          .location-list {
            grid-template-columns: 1fr !important;
            gap: clamp(12px, 3.5vw, 18px) !important;
          }

          .location-item {
            font-size: clamp(16px, 4vw, 18px) !important;
          }

          /* Small phones – full bleed + tighter layout */
          @media (max-width: 480px) {
            .location-section {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .location-container {
              padding: 24px 16px !important;
              border-radius: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }

            .location-map-wrapper img {
              height: 240px !important;
              filter: blur(1.5px) !important; /* less blur for readability */
            }

            .location-tabs {
              justify-content: flex-start !important;
            }
          }

          /* Tablets – keep 2-column list when possible */
          @media (min-width: 481px) and (max-width: 1023px) {
            .location-container {
              padding: clamp(35px, 6vw, 50px) clamp(28px, 5vw, 45px) !important;
            }

            .location-list {
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
            }
          }
        }

        /* Desktop ≥ 1024px → original inline styles remain untouched */
      `}</style>
    </section>
  );
}