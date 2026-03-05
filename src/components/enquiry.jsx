import { useState } from "react";
const styles = `

@keyframes tilt {
0%{transform:rotate(-2.5deg) scale(1.01);}
50%{transform:rotate(2.5deg) scale(1.01);}
100%{transform:rotate(-2.5deg) scale(1.01);}
}

@keyframes shine {
0%{left:-80%;}
50%{left:130%;}
100%{left:130%;}
}

@keyframes featureTilt {
0%{transform:rotate(-2deg);}
50%{transform:rotate(2deg);}
100%{transform:rotate(-2deg);}
}

@keyframes featureGlow {
0%{box-shadow:0 0 0 rgba(200,150,43,0);}
50%{box-shadow:0 0 14px rgba(200,150,43,0.45);}
100%{box-shadow:0 0 0 rgba(200,150,43,0);}
}


/* MAIN CARD */

.enq-card{
position:fixed;
top:0;
right:0;
width:380px;
max-width:92%;
height:100vh;
z-index:200;
background:#fff;
box-shadow:-2px 0 12px rgba(0,0,0,0.12);
display:flex;
flex-direction:column;
overflow-y:auto;
font-family:Arial,sans-serif;
}


/* TABLET (CENTER CARD) */

@media (max-width:1023px){

.enq-card{
position:relative;
width:92%;
max-width:520px;
height:auto;
margin:40px auto;
right:auto;
top:auto;
box-shadow:0 8px 28px rgba(0,0,0,0.12);
}

.enq-star{
display:none;
}

}


/* SMALL MOBILE */

@media (max-width:480px){

.enq-card{
width:95%;
margin-top:30px;
}

}


/* BOOK BAR */

.enq-book-bar{
background:#ffffff;
color:#fff;
text-align:center;
font-size:17px;
font-weight:700;
padding:14px 10px;
letter-spacing:.3px;
flex-shrink:0;
}


/* BUTTONS */

.enq-rcb-wrap{
padding:14px 18px 0;
flex-shrink:0;
}

.enq-btn-rcb{
display:flex;
align-items:center;
justify-content:center;
gap:8px;
width:100%;
padding:13px 10px;
background:linear-gradient(135deg,#c8962b,#e8b84b,#c8962b);
border:2px solid #b8821e;
border-radius:6px;
color:#fff;
font-size:16px;
font-weight:700;
cursor:pointer;
position:relative;
overflow:hidden;
animation:tilt 2s ease-in-out infinite;
box-shadow:0 4px 16px rgba(180,130,20,.35);
}

.enq-btn-rcb::after{
content:'';
position:absolute;
top:0;
left:-80%;
width:50%;
height:100%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.5),transparent);
animation:shine 2.5s ease-in-out infinite;
}


/* FORM */

.enq-form-section{
padding:18px 18px 0;
}

.enq-form-title{
text-align:center;
font-size:19px;
font-weight:600;
color:#111;
margin-bottom:14px;
}

.enq-input{
width:100%;
padding:12px 14px;
margin-bottom:11px;
border:1px solid #ddd;
border-radius:5px;
font-size:14px;
box-sizing:border-box;
}

.enq-input:focus{
border-color:#c8962b;
}


/* SELECT */

.enq-select-wrap{
position:relative;
margin-bottom:11px;
}

.enq-select{
width:100%;
padding:12px 36px 12px 14px;
border:1px solid #ddd;
border-radius:5px;
font-size:14px;
background:#fff;
appearance:none;
cursor:pointer;
}

.enq-select:focus{
border-color:#c8962b;
}

.enq-select-arrow{
position:absolute;
right:12px;
bottom:13px;
}


/* SUBMIT */

.enq-btn-submit{
display:block;
width:100%;
margin:6px auto 0;
padding:11px 10px;
background:linear-gradient(135deg,#c8962b,#e8b84b,#c8962b);
border:none;
border-radius:6px;
color:#fff;
font-size:15px;
font-weight:700;
cursor:pointer;
position:relative;
overflow:hidden;
animation:tilt 1.8s ease-in-out infinite;
box-shadow:0 4px 14px rgba(180,130,20,.3);
}

.enq-btn-submit::after{
content:'';
position:absolute;
top:0;
left:-80%;
width:50%;
height:100%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,.5),transparent);
animation:shine 2s ease-in-out infinite;
}


/* SAFE TEXT */

.enq-safe-text{
text-align:center;
font-size:14px;
color:#000;
margin:10px 0 14px;
}


/* FEATURES */

.enq-features{
display:flex;
border-top:1px solid #eee;
flex-shrink:0;
}

.enq-feat-item{
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:14px 6px;
cursor:pointer;
background:#fff;
border:none;
}

.enq-feat-item:not(:last-child){
border-right:1px solid #eee;
}

.enq-feat-item:nth-child(1){
animation:featureTilt 2s ease-in-out infinite,featureGlow 2s ease-in-out infinite;
}

.enq-feat-item:nth-child(2){
animation:featureTilt 2s ease-in-out .3s infinite,featureGlow 2s ease-in-out .3s infinite;
}

.enq-feat-item:nth-child(3){
animation:featureTilt 2s ease-in-out .6s infinite,featureGlow 2s ease-in-out .6s infinite;
}

.enq-feat-icon{
margin-bottom:6px;
}

.enq-feat-label{
font-size:12px;
font-weight:700;
color:#333;
text-align:center;
line-height:1.4;
}


/* STAR */

.enq-star{
position:absolute;
top:220px;
right:0;
width:32px;
height:32px;
background:#1a1a1a;
border-radius:4px 0 0 4px;
display:flex;
align-items:center;
justify-content:center;
font-size:16px;
cursor:pointer;
z-index:10;
}

`;

const unitOptions = [
  { value: "3bhk",   label: "3 BHK — ₹1.69 Cr*"  },
  { value: "3.5bhk", label: "3.5 BHK — ₹1.89 Cr*" },
  { value: "4bhk",   label: "4 BHK — ₹3.1 Cr*"   },
  { value: "4.5bhk", label: "4.5 BHK — ₹3.3 Cr*"  },
];

export default function EnquiryForm({ openPopup }) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", unit: "" });

  return (
    <>
      <style>{styles}</style>

      <aside className="enq-card">

        <div className="enq-star">✳️</div>

        {/* Book A Site Visit */}
        <div className="enq-book-bar">
          <button
    className="enq-btn-rcb"
    style={{ marginTop: "12px" }}
    onClick={() => openPopup("Book Site Visit")}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M3 4h18v16H3z"></path>
      <path d="M8 2v4M16 2v4"></path>
      <path d="M3 10h18"></path>
    </svg>
    Book Site Visit
  </button>

        </div>
           

        {/* Request Call Back */}
        <div className="enq-rcb-wrap">
          <button
            className="enq-btn-rcb"
            onClick={() => openPopup("Request Call Back")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Request Call Back
          </button>
        </div>

        {/* Form */}
        <div className="enq-form-section">
          <div className="enq-form-title">Get More Details</div>

          <input
            className="enq-input"
            placeholder="Name*"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="enq-input"
            type="email"
            placeholder="Email*"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="enq-input"
            type="tel"
            placeholder="Mobile*"
            value={form.mobile}
            onChange={e => setForm({ ...form, mobile: e.target.value })}
          />

          {/* Unit Type Select */}
          <div className="enq-select-wrap">
            <select
              className={`enq-select${form.unit === "" ? " enq-placeholder" : ""}`}
              value={form.unit}
              onChange={e => setForm({ ...form, unit: e.target.value })}
            >
              <option value="" disabled hidden>Select Unit Type*</option>
              {unitOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <svg className="enq-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8962b" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          <button className="enq-btn-submit">Submit</button>
          <p className="enq-safe-text">Your information is safe with us.</p>
        </div>

        {/* Feature Cards */}
        <div className="enq-features">
          <button className="enq-feat-item">
            <div className="enq-feat-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c8962b" strokeWidth="1.8">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            <div className="enq-feat-label">Instant Call<br/>Back</div>
          </button>

          <button className="enq-feat-item">
            <div className="enq-feat-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c8962b" strokeWidth="1.8">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <div className="enq-feat-label">Sample Flats<br/>Available</div>
          </button>

          <button className="enq-feat-item">
            <div className="enq-feat-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c8962b" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4"/>
                <path d="M6 20v-2a6 6 0 0112 0v2"/>
                <path d="M16 11l2 2 4-4"/>
              </svg>
            </div>
            <div className="enq-feat-label">Unmatched<br/>Price</div>
          </button>
        </div>

      </aside>
    </>
  );
}










