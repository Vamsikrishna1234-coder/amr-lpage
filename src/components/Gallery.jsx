// import React, { useState } from "react";
// import img1 from "../assets/images/abouthero amr.jpg";
// import img2 from "../assets/images/amr clubhouse1.jpg";
// import img3 from "../assets/images/ganesh idol amr.jpg";
// import img4 from "../assets/images/amr project2.jpg";
// import img5 from "../assets/images/amr hero2.jpg";
// import img6 from "../assets/images/ganesh idol1 amr.jpg";

// export default function Gallery() {
//   const gold = "#b88a0b";
//   const beige = "#f1d48b";

//   const images = [img1, img2, img3, img4, img5, img6];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const nextImage = () =>
//     setActiveIndex((prev) => (prev + 1) % images.length);

//   const prevImage = () =>
//     setActiveIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );

//   return (
//     <section id="gallery"
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
//         {/* GALLERY TAB */}
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
//           Gallery
//         </div>

//         {/* TITLE */}
//         <p
//           style={{
//             fontSize: "22px",
//             lineHeight: 1.6,
//             color: "#000000",
//             marginBottom: "30px",
//           }}
//         >
//           Elegant architecture and thoughtfully designed living spaces come together
//           at AMR Legacy Villas in Gowrelly, Hyderabad, offering a perfect blend of
//           luxury, comfort, and modern villa living.
//         </p>

//         {/* IMAGE GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
//             gap: "25px",
//           }}
//         >
//           {images.map((src, i) => (
//             <div
//               key={i}
//               style={{
//                 borderRadius: "10px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//               }}
//               onClick={() => setActiveIndex(i)}
//             >
//               <img
//                 src={src}
//                 alt="gallery"
//                 style={{
//                   width: "100%",
//                   height: "320px",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* FULLSCREEN POPUP VIEWER */}
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
//               top: "25px",
//               right: "40px",
//               fontSize: "40px",
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
//             src={images[activeIndex]}
//             alt="fullscreen"
//             style={{
//               width: "70%",
//               maxHeight: "80vh",
//               objectFit: "contain",
//               borderRadius: "10px",
//             }}
//           />

//           {/* PREVIOUS BUTTON */}
//           <button
//             onClick={prevImage}
//             style={{
//               position: "absolute",
//               left: "40px",
//               fontSize: "50px",
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
//               fontSize: "50px",
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
import img1 from "../assets/images/abouthero amr.jpg";
import img2 from "../assets/images/amr clubhouse1.jpg";
import img3 from "../assets/images/ganesh idol amr.jpg";
import img4 from "../assets/images/amr project2.jpg";
import img5 from "../assets/images/amr hero2.jpg";
import img6 from "../assets/images/ganesh idol1 amr.jpg";

export default function Gallery() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  const images = [img1, img2, img3, img4, img5, img6];

  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section
      id="gallery"
      className="gallery-section"
      style={{
        backgroundColor: beige,
        padding: "10px 0",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="gallery-container"
        style={{
          width: "93%",
          maxWidth: "1450px",
          marginLeft: "0px",
          background: "#ffffff",
          padding: "50px 70px 50px 50px",
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* GALLERY TAB */}
        <div
          className="gallery-tab"
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
          Gallery
        </div>

        {/* TITLE / DESCRIPTION */}
        <p
          className="gallery-description"
          style={{
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#000000",
            marginBottom: "30px",
          }}
        >
          Elegant architecture and thoughtfully designed living spaces come together
          at AMR Legacy Villas in Gowrelly, Hyderabad, offering a perfect blend of
          luxury, comfort, and modern villa living.
        </p>

        {/* IMAGE GRID */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "25px",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={src}
                alt="gallery"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN POPUP VIEWER */}
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
              top: "25px",
              right: "40px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <img
            src={images[activeIndex]}
            alt="fullscreen"
            style={{
              width: "70%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />

          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "40px",
              fontSize: "50px",
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
              fontSize: "50px",
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

      {/* Scoped responsive styles – only for < 1024px */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .gallery-section {
            padding: clamp(30px, 8vw, 60px) 0;
            justify-content: center !important;
          }

          .gallery-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: clamp(30px, 6vw, 45px) clamp(20px, 5vw, 40px) !important;
            border-radius: 10px !important;
          }

          .gallery-tab {
            padding: clamp(7px, 2vw, 11px) clamp(16px, 4vw, 24px) !important;
            font-size: clamp(18px, 5vw, 23px) !important;
            margin-bottom: clamp(20px, 5vw, 30px) !important;
          }

          .gallery-description {
            font-size: clamp(16px, 4.2vw, 20px) !important;
            line-height: 1.7 !important;
            margin-bottom: clamp(24px, 6vw, 35px) !important;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: clamp(16px, 4vw, 24px) !important;
          }

          .gallery-item img {
            height: clamp(200px, 50vw, 260px) !important;
          }

          /* Small phones */
          @media (max-width: 480px) {
            .gallery-section {
              padding-left: 10px !important;
              padding-right: 10px !important;
            }

            .gallery-container {
              padding: 24px 16px !important;
              border-radius: 0 !important;
              border-left: none !important;
              border-right: none !important;
            }

            .gallery-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .gallery-item img {
              height: 220px !important;
            }
          }

          /* Tablets / medium phones */
          @media (min-width: 481px) and (max-width: 1023px) {
            .gallery-container {
              padding: clamp(35px, 6vw, 50px) clamp(28px, 5vw, 45px) !important;
            }

            .gallery-grid {
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
            }
          }
        }

        /* Desktop ≥ 1024px → original inline styles win */
      `}</style>
    </section>
  );
}