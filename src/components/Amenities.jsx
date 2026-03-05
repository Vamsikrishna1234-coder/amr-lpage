// import React, { useState } from "react";
// import img1 from "../assets/images/amr clubhouse.jpg";
// import img2 from "../assets/images/amr yoga.jpg";
// import img3 from "../assets/images/box cricket amr.jpg";
// import img4 from "../assets/images/gym amr.jpg";
// import img5 from "../assets/images/indoorgames amr.jpg";
// import img6 from "../assets/images/walkingtrack amr.jpg";

// export default function Amenities() {
//   const gold = "#b88a0b";
//   const beige = "#f1d48b";

//   // AMENITIES DATA
//   const amenities = [
//     {
//       title: "ClubHouse",
//       img: img1,
//     },
//     {
//       title: "Yoga Area",
//       img: img2,
//     },
//     {
//       title: "Box Cricket",
//       img: img3,
//     },
//     {
//       title: "Gymnasium",
//       img: img4,
//     },
//     {
//       title: "Indoor Games",
//       img: img5,
//     },
//     {
//       title: "Walking Track",
//       img: img6,
//     },
//   ];

//   // POPUP STATE
//   const [activeIndex, setActiveIndex] = useState(null);

//   const nextImage = () =>
//     setActiveIndex((prev) => (prev + 1) % amenities.length);

//   const prevImage = () =>
//     setActiveIndex((prev) =>
//       prev === 0 ? amenities.length - 1 : prev - 1
//     );

//   return (
//     <section id="amenities"
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
//           marginLeft: "0px",
//           background: "#ffffff",
//           padding: "50px 70px 50px 50px",
//           borderRadius: "6px",
//           border: "1px solid #e5d6a7",
//         }}
//       >
//         {/* TITLE TAB */}
//         <div
//           style={{
//             display: "inline-block",
//             border: `2px solid ${gold}`,
//             color: gold,
//             padding: "8px 26px",
//             borderRadius: "30px",
//             fontWeight: "600",
//             marginBottom: "20px",
//             fontSize: "25px",
//           }}
//         >
//           Amenities
//         </div>

//         {/* DESCRIPTION */}
//         <p
//           style={{
//             fontSize: "22px",
//             lineHeight: 1.6,
//             color: "#000000",
//             marginBottom: "40px",
//           }}
//         >
//           AMR Legacy Villas in Gowrelly, Hyderabad, welcomes you to an exclusive
//           gated villa community surrounded by lush green landscapes and thoughtfully
//           designed spaces. Featuring modern architecture, spacious villas, and
//           premium lifestyle amenities, the project is crafted to provide a peaceful
//           yet well-connected living experience near the Outer Ring Road, offering
//           both comfort and elegance for modern families.
//         </p>

//         {/* IMAGE GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
//             gap: "25px",
//           }}
//         >
//           {amenities.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               style={{
//                 cursor: "pointer",
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{
//                   width: "100%",
//                   height: "320px",
//                   objectFit: "cover",
//                   borderRadius: "12px",
//                 }}
//               />

//               {/* TITLE OVERLAY */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "15px",
//                   left: "15px",
//                   color: "#fff",
//                   fontWeight: "800",
//                   fontSize: "25px",
//                   textShadow: "0 2px 5px rgba(0,0,0,0.6)",
//                 }}
//               >
//                 {item.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* POPUP VIEWER */}
//       {activeIndex !== null && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             background: "rgba(0,0,0,0.85)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           {/* CLOSE BUTTON */}
//           <button
//             onClick={() => setActiveIndex(null)}
//             style={{
//               position: "absolute",
//               top: "30px",
//               right: "40px",
//               fontSize: "32px",
//               color: "#fff",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             ✕
//           </button>

//           {/* IMAGE */}
//           <img
//             src={amenities[activeIndex].img}
//             alt=""
//             style={{
//               width: "70%",
//               maxHeight: "80%",
//               objectFit: "cover",
//               borderRadius: "8px",
//             }}
//           />

//           {/* PREV BUTTON */}
//           <button
//             onClick={prevImage}
//             style={{
//               position: "absolute",
//               left: "40px",
//               fontSize: "40px",
//               color: "#fff",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             ‹
//           </button>

//           {/* NEXT BUTTON */}
//           <button
//             onClick={nextImage}
//             style={{
//               position: "absolute",
//               right: "40px",
//               fontSize: "40px",
//               color: "#fff",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }




import React, { useState } from "react";
import img1 from "../assets/images/amr clubhouse.jpg";
import img2 from "../assets/images/amr yoga.jpg";
import img3 from "../assets/images/box cricket amr.jpg";
import img4 from "../assets/images/gym amr.jpg";
import img5 from "../assets/images/indoorgames amr.jpg";
import img6 from "../assets/images/walkingtrack amr.jpg";

export default function Amenities() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  // AMENITIES DATA
  const amenities = [
    { title: "ClubHouse", img: img1 },
    { title: "Yoga Area", img: img2 },
    { title: "Box Cricket", img: img3 },
    { title: "Gymnasium", img: img4 },
    { title: "Indoor Games", img: img5 },
    { title: "Walking Track", img: img6 },
  ];

  // POPUP STATE
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % amenities.length);
  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? amenities.length - 1 : prev - 1));

  return (
    <section
      id="amenities"
      className="amenities-section"
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start", // original desktop
      }}
    >
      <div
        className="amenities-container"
        style={{
          width: "93%",
          maxWidth: "1450px",
          marginLeft: "0px",           // original desktop left push
          background: "#ffffff",
          padding: "50px 70px 50px 50px", // original asymmetric
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* TITLE TAB */}
        <div
          className="amenities-tab"
          style={{
            display: "inline-block",
            border: `2px solid ${gold}`,
            color: gold,
            padding: "8px 26px",
            borderRadius: "30px",
            fontWeight: "600",
            marginBottom: "20px",
            fontSize: "25px",
          }}
        >
          Amenities
        </div>

        {/* DESCRIPTION */}
        <p
          className="amenities-description"
          style={{
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          AMR Legacy Villas in Gowrelly, Hyderabad, welcomes you to an exclusive
          gated villa community surrounded by lush green landscapes and thoughtfully
          designed spaces. Featuring modern architecture, spacious villas, and
          premium lifestyle amenities, the project is crafted to provide a peaceful
          yet well-connected living experience near the Outer Ring Road, offering
          both comfort and elegance for modern families.
        </p>

        {/* IMAGE GRID */}
        <div
          className="amenities-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "25px",
          }}
        >
          {amenities.map((item, index) => (
            <div
              key={index}
              className="amenities-item"
              onClick={() => setActiveIndex(index)}
              style={{
                cursor: "pointer",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              {/* TITLE OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "15px",
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "25px",
                  textShadow: "0 2px 5px rgba(0,0,0,0.6)",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP VIEWER – unchanged behavior */}
      {activeIndex !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={() => setActiveIndex(null)}
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              fontSize: "32px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <img
            src={amenities[activeIndex].img}
            alt=""
            style={{
              width: "70%",
              maxHeight: "80%",
              objectFit: "contain", // better for popup on mobile
              borderRadius: "8px",
            }}
          />

          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "40px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "40px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* Scoped responsive styles – only for <1024px */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .amenities-section {
            padding: clamp(30px, 8vw, 60px) 0;
            justify-content: center !important;
          }

          .amenities-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(30px, 6vw, 45px) clamp(20px, 5vw, 40px) !important;
            border-radius: 10px !important;
          }

          .amenities-tab {
            padding: clamp(7px, 2vw, 11px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(18px, 5vw, 23px) !important;
            margin-bottom: clamp(18px, 4vw, 28px) !important;
          }

          .amenities-description {
            font-size: clamp(16px, 4.2vw, 20px) !important;
            line-height: 1.7 !important;
            margin-bottom: clamp(28px, 7vw, 40px) !important;
          }

          .amenities-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: clamp(16px, 4vw, 24px) !important;
          }

          .amenities-item img {
            height: clamp(220px, 55vw, 280px) !important;
          }

          .amenities-item div {
            font-size: clamp(18px, 5vw, 22px) !important;
            bottom: 12px !important;
            left: 12px !important;
          }

          /* Small phones */
          @media (max-width: 480px) {
            .amenities-section {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .amenities-container {
              padding: 24px 16px !important;
              border-radius: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }

            .amenities-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .amenities-item img {
              height: 240px !important;
            }
          }

          /* Tablets / larger phones */
          @media (min-width: 481px) and (max-width: 1023px) {
            .amenities-container {
              padding: clamp(35px, 6vw, 50px) clamp(28px, 5vw, 45px) !important;
            }

            .amenities-grid {
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
            }
          }
        }

        /* Desktop ≥1024px → original inline styles remain untouched */
      `}</style>
    </section>
  );
}