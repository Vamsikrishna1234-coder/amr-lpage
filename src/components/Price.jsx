// import React from "react";

// export default function Price({ openPopup }) {
//   const gold = "#b88a0b";
//   const beige = "#f1d48b";

//   return (
//     <section id="price"
//       style={{
//         backgroundColor: beige,
//         padding: "10px 0",
//         display: "flex",
//         justifyContent: "flex-start",
//       }}
//     >
//       <div
//         style={{
//           width: "95%",
//           maxWidth: "1450px",
//           marginLeft: "0px",
//           background: "#ffffff",
//           padding: "50px 70px 50px 50px",
//           borderRadius: "6px",
//           border: "1px solid #e5d6a7",
//         }}
//       >
//         {/* PRICE TAB */}
//         <div
//           style={{
//             display: "inline-block",
//             border: `2px solid ${gold}`,
//             color: gold,
//             padding: "8px 26px",
//             borderRadius: "30px",
//             fontWeight: "600",
//             marginBottom: "30px",
//             fontSize: "25px",
//           }}
//         >
//           Price
//         </div>

//         {/* TITLE TEXT */}
//         <p
//           style={{
//             fontSize: "22px",
//             lineHeight: 1.7,
//             color: "#000000",
//             marginBottom: "10px",
//           }}
//         >
//           Experience premium villa living at AMR Legacy in Gowrelly, Hyderabad,
//           with prices starting at just ₹1.69 Cr*. For detailed pricing,
//           villa sizes, and per sq. ft. rates, get in touch with our Sales
//           Representative for the latest availability and offers.
//         </p>

//         <p
//           style={{
//             fontSize: "22px",
//             color: "#000000",
//             marginBottom: "40px",
//           }}
//         >
//           Contact our Sales Representatives
//         </p>

//         {/* BHK CARDS WRAPPER */}
//         <div
//           style={{
//             display: "flex",
//             gap: "30px",
//             flexWrap: "wrap",
//           }}
//         >
//           {/* 3 BHK CARD */}
//           <div
//             style={{
//               flex: "1",
//               minWidth: "320px",
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "20px",
//               textAlign: "center",
//               border: "1px solid #e5d6a7",
//               boxShadow: "0 0 12px rgba(0,0,0,0.05)",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 color: gold,
//                 marginBottom: "10px",
//               }}
//             >
//               3 BHK
//             </h3>

//             <p
//               style={{
//                 color: "#666",
//                 marginBottom: "18px",
//               }}
//             >
//               2000 sq. ft*
//             </p>

//             <h2
//               style={{
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 marginBottom: "25px",
//                 color: "#000",
//               }}
//             >
//               ₹1.69 Cr* Onwards
//             </h2>

//             <button onClick={() => openPopup("Complete Costing Details")}
//             style={{
//                 backgroundColor: gold,
//                 color: "#fff",
//                 fontWeight: "600",
//                 padding: "12px 32px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 fontSize: "15px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                 animation: "continuousTilt 2s ease-in-out infinite",
//                 position: "relative",
//                 overflow: "hidden",
//                 transformStyle: "preserve-3d",
//             }}
//             onMouseEnter={e => {
//                 e.currentTarget.style.animationPlayState = "paused";
//                 e.currentTarget.querySelector(".shine").style.left = "120%";
//             }}
//             onMouseLeave={e => {
//                 e.currentTarget.style.animationPlayState = "running";
//                 e.currentTarget.querySelector(".shine").style.left = "-60%";
//             }}
//             >
//             <span className="shine" style={{
//                 position: "absolute",
//                 top: 0, left: "-60%",
//                 width: "40%", height: "100%",
//                 background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
//                 transition: "left 0.5s ease",
//                 pointerEvents: "none",
//             }} />
//             Complete Costing Details
//             </button>
//           </div>

//           {/* 4 BHK CARD */}
//           <div
//             style={{
//               flex: "1",
//               minWidth: "320px",
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "20px",
//               textAlign: "center",
//               border: "1px solid #e5d6a7",
//               boxShadow: "0 0 12px rgba(0,0,0,0.05)",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 color: gold,
//                 marginBottom: "10px",
//               }}
//             >
//               4 BHK
//             </h3>

//             <p
//               style={{
//                 color: "#666",
//                 marginBottom: "18px",
//               }}
//             >
//               2883 sq. ft
//             </p>

//             <h2
//               style={{
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 marginBottom: "25px",
//                 color: "#000",
//               }}
//             >
//               ₹3.1 Cr* Onwards
//             </h2>

//             <button onClick={() => openPopup("Complete Costing Details")}
//             style={{
//                 backgroundColor: gold,
//                 color: "#fff",
//                 fontWeight: "600",
//                 padding: "12px 32px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//                 fontSize: "15px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                 animation: "continuousTilt 2s ease-in-out infinite",
//                 position: "relative",
//                 overflow: "hidden",
//                 transformStyle: "preserve-3d",
//             }}
//             onMouseEnter={e => {
//                 e.currentTarget.style.animationPlayState = "paused";
//                 e.currentTarget.querySelector(".shine").style.left = "120%";
//             }}
//             onMouseLeave={e => {
//                 e.currentTarget.style.animationPlayState = "running";
//                 e.currentTarget.querySelector(".shine").style.left = "-60%";
//             }}
//             >
//             <span className="shine" style={{
//                 position: "absolute",
//                 top: 0, left: "-60%",
//                 width: "40%", height: "100%",
//                 background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
//                 transition: "left 0.5s ease",
//                 pointerEvents: "none",
//             }} />
//             Complete Costing Details
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* SHINE EFFECT */}
//       <style>
//         {`
//           .shine-btn::after {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: -120%;
//             width: 60%;
//             height: 100%;
//             background: linear-gradient(120deg,
//               rgba(255,255,255,0.2) 0%,
//               rgba(255,255,255,0.8) 50%,
//               rgba(255,255,255,0.2) 100%
//             );
//             transform: skewX(-20deg);
//             transition: 0.5s;
//           }

//           .shine-btn:hover::after {
//             left: 140%;
//           }
//         `}
//       </style>
//     </section>
//   );
// }




import React from "react";

export default function Price({ openPopup }) {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  return (
    <section
      id="price"
      className="price-section"
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="price-container"
        style={{
          width: "95%",
          maxWidth: "1450px",
          marginLeft: "0px",
          background: "#ffffff",
          padding: "50px 70px 50px 50px",
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* PRICE TAB */}
        <div
          className="price-tab"
          style={{
            display: "inline-block",
            border: `2px solid ${gold}`,
            color: gold,
            padding: "8px 26px",
            borderRadius: "30px",
            fontWeight: "600",
            marginBottom: "30px",
            fontSize: "25px",
          }}
        >
          Price
        </div>

        {/* TITLE TEXT */}
        <p
          className="price-intro"
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#000000",
            marginBottom: "10px",
          }}
        >
          Experience premium villa living at AMR Legacy in Gowrelly, Hyderabad,
          with prices starting at just ₹1.69 Cr*. For detailed pricing,
          villa sizes, and per sq. ft. rates, get in touch with our Sales
          Representative for the latest availability and offers.
        </p>

        <p
          className="price-contact"
          style={{
            fontSize: "22px",
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Contact our Sales Representatives
        </p>

        {/* BHK CARDS WRAPPER */}
        <div
          className="price-cards-wrapper"
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* 3 BHK CARD */}
          <div
            className="price-card"
            style={{
              flex: "1",
              minWidth: "320px",
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              border: "1px solid #e5d6a7",
              boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: gold,
                marginBottom: "10px",
              }}
            >
              3 BHK
            </h3>

            <p
              style={{
                color: "#666",
                marginBottom: "18px",
              }}
            >
              2000 sq. ft*
            </p>

            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                marginBottom: "25px",
                color: "#000",
              }}
            >
              ₹1.69 Cr* Onwards
            </h2>

            <button
              className="price-btn"
              onClick={() => openPopup("Complete Costing Details")}
              style={{
                backgroundColor: gold,
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
              Complete Costing Details
            </button>
          </div>

          {/* 4 BHK CARD */}
          <div
            className="price-card"
            style={{
              flex: "1",
              minWidth: "320px",
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              border: "1px solid #e5d6a7",
              boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "26px",
                fontWeight: "700",
                color: gold,
                marginBottom: "10px",
              }}
            >
              4 BHK
            </h3>

            <p
              style={{
                color: "#666",
                marginBottom: "18px",
              }}
            >
              2883 sq. ft
            </p>

            <h2
              style={{
                fontSize: "26px",
                fontWeight: "700",
                marginBottom: "25px",
                color: "#000",
              }}
            >
              ₹3.1 Cr* Onwards
            </h2>

            <button
              className="price-btn"
              onClick={() => openPopup("Complete Costing Details")}
              style={{
                backgroundColor: gold,
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
              Complete Costing Details
            </button>
          </div>
        </div>
      </div>

      {/* Scoped responsive styles */}
      <style jsx global>{`
        @keyframes continuousTilt {
          0%   { transform: rotate(-1.2deg); }
          50%  { transform: rotate(1.2deg);  }
          100% { transform: rotate(-1.2deg); }
        }

        .price-btn:hover .shine {
          left: 120% !important;
          transition: left 0.7s ease;
        }

        @media (max-width: 1023px) {
          .price-section {
            padding: clamp(30px, 8vw, 60px) 0;
            justify-content: center !important;
          }

          .price-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(30px, 6vw, 45px) clamp(20px, 5vw, 40px) !important;
            border-radius: 10px !important;
          }

          .price-tab {
            padding: clamp(7px, 2vw, 11px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(18px, 5vw, 23px) !important;
            margin-bottom: clamp(20px, 5vw, 30px) !important;
          }

          .price-intro,
          .price-contact {
            font-size: clamp(16px, 4.2vw, 20px) !important;
          }

          .price-contact {
            margin-bottom: clamp(24px, 6vw, 35px) !important;
          }

          .price-cards-wrapper {
            gap: clamp(20px, 5vw, 32px) !important;
          }

          .price-card {
            padding: clamp(20px, 5vw, 28px) !important;
            box-sizing: border-box !important;
          }

          .price-card h3,
          .price-card h2 {
            font-size: clamp(22px, 5.5vw, 26px) !important;
          }

          .price-btn {
            padding: clamp(11px, 3vw, 14px) clamp(22px, 6vw, 34px) !important;
            font-size: clamp(14px, 3.8vw, 16px) !important;
          }

          /* ── Critical fix for small mobiles ── */
          @media (max-width: 480px) {
            .price-section {
              padding: clamp(20px, 6vw, 30px) 0 !important;
            }

            .price-container {
              padding: 24px 16px !important;
              border-radius: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }

            .price-cards-wrapper {
              flex-direction: column !important;
              align-items: center !important;
              gap: 24px !important;
            }

            .price-card {
              flex: none !important;              /* ← important: stop stretching */
              width: 100% !important;
              max-width: 360px !important;        /* ← nice centered size on small phones */
              margin: 0 auto !important;          /* ← centers each card */
              min-width: unset !important;        /* ← override original min-width */
            }
          }

          /* Tablets / medium phones – allow side-by-side when there's space */
          @media (min-width: 481px) and (max-width: 1023px) {
            .price-cards-wrapper {
              justify-content: center !important;
            }
            .price-card {
              flex: 1 1 42% !important;
              max-width: 420px !important;
              min-width: 300px !important;
            }
          }
        }
      `}</style>
    </section>
  );
}