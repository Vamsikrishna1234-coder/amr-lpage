import React from "react";

export default function Price() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

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
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#000000",
            marginBottom: "10px",
          }}
        >
          Live the palace life at Godrej Regal Pavilion in Rajendra Nagar,
          Hyderabad, with prices starting at just ₹1.89 Cr*. For detailed pricing
          and per sq. ft. rates, get in touch with our Sales Representative.
        </p>

        <p
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
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* 3 BHK CARD */}
          <div
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
            Complete Costing Details
            </button>
          </div>

          {/* 4 BHK CARD */}
          <div
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
            Complete Costing Details
            </button>
          </div>
        </div>
      </div>

      {/* SHINE EFFECT */}
      <style>
        {`
          .shine-btn::after {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            width: 60%;
            height: 100%;
            background: linear-gradient(120deg,
              rgba(255,255,255,0.2) 0%,
              rgba(255,255,255,0.8) 50%,
              rgba(255,255,255,0.2) 100%
            );
            transform: skewX(-20deg);
            transition: 0.5s;
          }

          .shine-btn:hover::after {
            left: 140%;
          }
        `}
      </style>
    </section>
  );
}