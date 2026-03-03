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
    {
      title: "ClubHouse",
      img: img1,
    },
    {
      title: "Yoga Area",
      img: img2,
    },
    {
      title: "Box Cricket",
      img: img3,
    },
    {
      title: "Gymnasium",
      img: img4,
    },
    {
      title: "Indoor Games",
      img: img5,
    },
    {
      title: "Walking Track",
      img: img6,
    },
  ];

  // POPUP STATE
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % amenities.length);

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? amenities.length - 1 : prev - 1
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
        {/* TITLE TAB */}
        <div
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
          style={{
            fontSize: "22px",
            lineHeight: 1.6,
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Godrej Regal Pavilion, Rajendra Nagar, Hyderabad, welcomes you with a
          European palace-themed clubhouse, lush green gardens, and premium
          amenities, all thoughtfully designed to offer a lifestyle that feels
          truly royal.
        </p>

        {/* IMAGE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "25px",
          }}
        >
          {amenities.map((item, index) => (
            <div
              key={index}
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

      {/* POPUP VIEWER */}
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

          {/* IMAGE */}
          <img
            src={amenities[activeIndex].img}
            alt=""
            style={{
              width: "70%",
              maxHeight: "80%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* PREV BUTTON */}
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

          {/* NEXT BUTTON */}
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
    </section>
  );
}