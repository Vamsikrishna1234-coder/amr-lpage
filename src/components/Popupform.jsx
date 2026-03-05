



import { useState } from "react";
import legacy from "../assets/images/legacy .png";

export default function PopupForm({ title, closePopup }) {

  const gold = "#9a6f08";

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      closePopup();
      window.location.href = "#home";
    }, 3000);
  };

  return (
    <div style={overlay}>

      <div style={popup} className="popup-card">

        {/* HEADER */}
        <div style={{ ...header, background: gold }}>
          {title}

          <span style={closeBtn} onClick={closePopup}>
            ✕
          </span>
        </div>

        {!submitted ? (

          <div style={body}>

            {/* LEFT PANEL */}
            <div className="left-panel" style={leftPanel}>

              <h3 style={{ color: gold }}>We Promise</h3>

              <div style={promiseItem}>
                📞 <span>Instant Call Back</span>
              </div>

              <div style={promiseItem}>
                🏠 <span>Sample Flats Available</span>
              </div>

              <div style={promiseItem}>
                💰 <span>Unmatched Price</span>
              </div>

            </div>

            {/* FORM PANEL */}
            <div style={formPanel} className="form-panel">

              <img
                className="form-logo"
                src={legacy}
                style={{ height: "40px", marginBottom: "10px" }}
              />

              <h3 style={{ marginBottom: "20px" }}>
                Register Here And Avail The{" "}
                <span style={{ color: "red" }}>Best Offers!!</span>
              </h3>

              <form onSubmit={handleSubmit}>

                <input style={input} placeholder="Name*" required />

                <input style={input} placeholder="Email*" required />

                <input style={input} placeholder="Mobile*" required />

                <button type="submit" style={submitBtn}>
                  {title}
                </button>

              </form>

              <p style={{ marginTop: "10px", fontSize: "14px" }}>
                Your information is safe with us.
              </p>

            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel" style={{ ...rightPanel, background: gold }}>

              <h3>Get Information On Availabilities</h3>

              <ul style={list}>
                <li>✔ Available Units</li>
                <li>✔ Payment Plan</li>
                <li>✔ Floor Plans</li>
              </ul>

            </div>

          </div>

        ) : (

          /* THANK YOU SCREEN */

          <div style={thankYouScreen}>

            <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
              Thank You!
            </h2>

            <p style={{ fontSize: "18px" }}>
              Thank you for filling the details.
            </p>

            <p style={{ fontSize: "18px" }}>
              Our Expert Will Contact You Soon.
            </p>

          </div>

        )}

      </div>

      {/* RESPONSIVE CSS */}
      <style>{`

        @media (max-width:768px){

        .left-panel{
          display:none;
        }

        .right-panel{
          display:none;
        }

        .form-logo{
          display:none;
        }

        .popup-card{
          width:90% !important;
        }

        .popup-card div{
          width:100%;
        }
        .form-panel{
          width:100% !important;
          padding:20px !important;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          
        }

      }
        }
          

      `}</style>

    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};

const popup = {
  width: "800px",
  maxWidth: "95%",
  background: "#fff",
  borderRadius: "6px",
  overflow: "hidden"
};

const header = {
  color: "#fff",
  fontSize: "28px",
  textAlign: "center",
  padding: "20px",
  fontWeight: "600",
  position: "relative"
};

const closeBtn = {
  position: "absolute",
  right: "20px",
  top: "10px",
  cursor: "pointer",
  fontSize: "20px"
};

const body = {
  display: "flex"
};

const leftPanel = {
  width: "25%",
  background: "#f3f3f3",
  padding: "30px"
};

const promiseItem = {
  marginTop: "25px",
  fontSize: "16px",
  display: "flex",
  gap: "10px",
  alignItems: "center"
};

const formPanel = {
  width: "50%",
  padding: "20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px"
};

const submitBtn = {
  background: "#c8962b",
  border: "none",
  color: "#fff",
  padding: "12px 30px",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "15px",
  width: "100%"
};

const rightPanel = {
  width: "25%",
  color: "#fff",
  padding: "30px"
};

const list = {
  marginTop: "20px",
  lineHeight: "2"
};

const thankYouScreen = {
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#000",
  color: "#fff"
};