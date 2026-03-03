import React from "react";

export default function About() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  return (
    <section
      style={{
        backgroundColor: beige,
        padding: "20px 0",
        display: "flex",
        justifyContent: "flex-start",   // 🔥 NOT CENTER
      }}
    >
      <div
        style={{
          width: "95%",                 // 🔥 SMALLER WIDTH (IMPORTANT)
          maxWidth: "1450px",
          marginLeft: "0px",           // 🔥 PUSHES IT FROM LEFT
          background: "#ffffff",
          padding: "50px 80px 50px 50px", // 🔥 RIGHT SIDE BIGGER
          borderRadius: "6px",
          border: "1px solid #e5d6a7",
        }}
      >
        {/* OVERVIEW BUTTON */}
        <div
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
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#000000",
            marginBottom: "40px",
          }}
        >
          Located in the heart of the city, Godrej Regal Pavilion Hyderabad by
          Godrej Properties adds a touch of royal elegance to everyday life,
          inspired by neo-classical European architecture. This landmark address
          features thoughtfully designed 3, and 4 BHK flats in Hyderabad, perfect
          for those who value both tradition and modern comfort. These premium
          apartments in Hyderabad offer a lifestyle that blends the grandeur of
          European palaces with the convenience of modern living. At Godrej
          Regal Pavilion, you don’t just own a home, you experience a lifestyle
          like no other.
        </p>

        <button
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
            onMouseEnter={e => {
                e.currentTarget.style.animationPlayState = "paused";
                e.currentTarget.querySelector(".shine").style.left = "120%";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.animationPlayState = "running";
                e.currentTarget.querySelector(".shine").style.left = "-60%";
            }}
            >
            <span className="shine" style={{
                position: "absolute",
                top: 0, left: "-60%",
                width: "40%", height: "100%",
                background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
                transition: "left 0.5s ease",
                pointerEvents: "none",
            }} />
            Request Brochure
            </button>
      </div>
    </section>
  );
}