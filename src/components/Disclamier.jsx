import React from "react";

export default function Disclaimer() {
  const beige = "#d85b26bf";

  return (
    <section
      className="disclaimer-section"
      style={{
        width: "100%",
        backgroundColor: beige,
        padding: "20px 0",
        display: "flex",
        justifyContent: "flex-start", // keep desktop same
      }}
    >
      <div
        className="disclaimer-container"
        style={{
          width: "93%",
          maxWidth: "1450px",
          padding: "0 30px",
        }}
      >
        <p
          className="disclaimer-text"
          style={{
            fontSize: "10px",
            lineHeight: 1.6,
            color: "#333",
          }}
        >
          <strong>Project Disclaimer:</strong> The project "AMR Legacy Villas"
          is registered with TGRERA under Registration No.
          <strong> P02400009909</strong>, and details are available on the
          TGRERA website: https://rera.telangana.gov.in/ <br />

          <strong>Disclaimer:</strong> The content presented on this website is
          solely for informational purposes and does not constitute a service
          offer. Prices mentioned here are subject to change without prior
          notification, and the availability of listed properties is not
          assured. Images showcased are illustrative and may not precisely
          represent the actual properties. Kindly be advised that this website
          operates as an authorized marketing channel partner. Additionally,
          updates and information may be sent to the registered mobile number
          or email ID. All rights reserved. This website’s content, design, and
          data are protected by copyright and other intellectual property
          rights. Unauthorized use or reproduction of the content may be
          subject to legal repercussions. For precise and current information
          on services, pricing, availability, or any other details, we
          recommend contacting us directly through the contact information
          provided on this website. We appreciate your visit.
        </p>
      </div>

      {/* RESPONSIVE STYLES */}

      <style jsx global>{`

        @media (max-width: 1023px) {

          .disclaimer-section {
            padding: clamp(20px, 6vw, 35px) 0;
            justify-content: center !important;
          }

          .disclaimer-container {
            width: 100% !important;
            max-width: 1000px !important;
            margin: 0 auto !important;
            padding: 0 clamp(18px, 5vw, 30px) !important;
          }

          .disclaimer-text {
            font-size: clamp(12px, 3.5vw, 14px) !important;
            line-height: 1.7 !important;
          }

        }
         /* DESKTOP FIX – prevent overlap with enquiry sidebar */

          @media (min-width:1024px) and (max-width:1279px){

            .disclaimer-section{
              padding-right:260px !important;
            }

          }

          @media (min-width:1280px){

            .disclaimer-section{
              padding-right:380px !important;
            }

          }
        /* Small Phones */

        @media (max-width: 480px) {

          .disclaimer-section {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .disclaimer-container {
            padding: 0 16px !important;
          }

        }
        
        /* Tablets */

        @media (min-width: 481px) and (max-width: 1023px) {

          .disclaimer-container {
            padding: 0 clamp(24px, 5vw, 40px) !important;
          }

        }

        /* ≥1024px keeps desktop exactly the same */

      `}</style>
    </section>
  );
}