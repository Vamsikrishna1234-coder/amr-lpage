import { useState } from "react";

const styles = `

@keyframes featureTilt {
0%{transform:rotate(-2deg);}
50%{transform:rotate(2deg);}
100%{transform:rotate(-2deg);}
}

@keyframes featureGlow {
0%{box-shadow:0 0 0 rgba(216,91,38,0);}
50%{box-shadow:0 0 14px rgba(216,91,38,0.75);}
100%{box-shadow:0 0 0 rgba(216,91,38,0);}
}

@keyframes thankYouPop {
0%{opacity:0;transform:scale(0.85);}
60%{transform:scale(1.05);}
100%{opacity:1;transform:scale(1);}
}

@keyframes checkDraw {
0%{stroke-dashoffset:60;}
100%{stroke-dashoffset:0;}
}

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
overflow-x:hidden; /* FIX */
font-family:Arial,sans-serif;
}
/* NEW CHANGE ONLY */

@media (min-width:1024px) and (max-width:1279px){

.enq-card{
width:260px;
}
}
@media (min-width:1280px)and (max-width:1440px){

.enq-card{
width:330px;
}
}
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
.enq-star{display:none;}
}

@media (max-width:480px){
.enq-card{
width:95%;
margin-top:30px;
}
}

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
background:#d85b26bf;
border:2px solid #d85b26bf;
border-radius:6px;
color:#fff;
font-size:16px;
font-weight:700;
cursor:pointer;
position:relative;
overflow:hidden;
animation:tilt 2s ease-in-out infinite;
box-shadow:0 4px 16px rgba(216, 91, 38, 0.73);
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
border-color:#d85b26bf;
}

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
border-color:#d85b26bf;
}

.enq-select-arrow{
position:absolute;
right:12px;
bottom:13px;
}

.enq-btn-submit{
display:block;
width:100%;
margin:6px auto 0;
padding:11px 10px;
background:#d85b26bf;
border:none;
border-radius:6px;
color:#fff;
font-size:15px;
font-weight:700;
cursor:pointer;
position:relative;
overflow:hidden;
animation:tilt 1.8s ease-in-out infinite;
box-shadow:0 4px 14px rgba(216, 91, 38, 0.78);
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

.enq-safe-text{
text-align:center;
font-size:14px;
color:#000;
margin:10px 0 14px;
}

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

.enq-thankyou{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:32px 24px 28px;
animation:thankYouPop 0.45s cubic-bezier(.34,1.56,.64,1) both;
}

.enq-thankyou-circle{
width:72px;
height:72px;
border-radius:50%;
background:#d85b26bf;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:18px;
box-shadow:0 6px 20px rgba(216, 91, 38, 0.72);
}

.enq-thankyou-title{
font-size:22px;
font-weight:700;
color:#111;
margin-bottom:10px;
text-align:center;
}

.enq-thankyou-msg{
font-size:14px;
color:#555;
text-align:center;
line-height:1.6;
}
`;

const unitOptions = [
  { value: "3bhk", label: "3 BHK — ₹1.69 Cr*" },
  { value: "3.5bhk", label: "3.5 BHK — ₹1.89 Cr*" },
  { value: "4bhk", label: "4 BHK — ₹3.1 Cr*" },
  { value: "4.5bhk", label: "4.5 BHK — ₹3.3 Cr*" }
];

export default function EnquiryForm({ openPopup }) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", unit: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.mobile || !form.unit) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", mobile: "", unit: "" });
    }, 2000);
  };

  return (
    <>
      <style>{styles}</style>

      <aside className="enq-card">

        <div className="enq-star">✳️</div>

        <div className="enq-book-bar">
          <button
            className="enq-btn-rcb"
            style={{ marginTop: "12px" }}
            onClick={() => openPopup("Book Site Visit")}
          >
            Book Site Visit
          </button>
        </div>

        <div className="enq-rcb-wrap">
          <button
            className="enq-btn-rcb"
            onClick={() => openPopup("Request Call Back")}
          >
            Request Call Back
          </button>
        </div>

        {submitted ? (
          <div className="enq-thankyou">
            <div className="enq-thankyou-circle">✓</div>
            <div className="enq-thankyou-title">Thank You!</div>
            <div className="enq-thankyou-msg">
              Your details have been received.<br/>
              Our team will get in touch with you shortly.
            </div>
          </div>
        ) : (
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

            <div className="enq-select-wrap">
              <select
                className="enq-select"
                value={form.unit}
                onChange={e => setForm({ ...form, unit: e.target.value })}
              >
                <option value="">Select Unit Type*</option>
                {unitOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              <svg className="enq-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d85b26bf" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>

            </div>

            <button className="enq-btn-submit" onClick={handleSubmit}>
              Submit
            </button>

            <p className="enq-safe-text">
              Your information is safe with us.
            </p>

          </div>
        )}

        <div className="enq-features">

          <button className="enq-feat-item">
            <div className="enq-feat-icon">📞</div>
            <div className="enq-feat-label">Instant Call<br/>Back</div>
          </button>

          <button className="enq-feat-item">
            <div className="enq-feat-icon">🏠</div>
            <div className="enq-feat-label">Sample Flats<br/>Available</div>
          </button>

          <button className="enq-feat-item">
            <div className="enq-feat-icon">💰</div>
            <div className="enq-feat-label">Unmatched<br/>Price</div>
          </button>

        </div>

      </aside>
    </>
  );
}






