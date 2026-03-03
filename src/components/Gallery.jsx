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

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

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
          marginLeft: "0px",
          background: "#ffffff",
          padding: "50px 70px 50px 50px",
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* GALLERY TAB */}
        <div
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

        {/* TITLE */}
        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#000000",
            marginBottom: "30px",
          }}
        >
          Royal exteriors and refined interiors, experience it all at Godrej
          Regal Pavilion, Rajendra Nagar, Hyderabad.
        </p>

        {/* IMAGE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "25px",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
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
          {/* CLOSE BUTTON */}
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

          {/* IMAGE */}
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

          {/* PREVIOUS BUTTON */}
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

          {/* NEXT BUTTON */}
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
    </section>
  );
}