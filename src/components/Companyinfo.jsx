export default function CompanyInfo() {
  const gold = "#b88a0b";
  const beige = "#f1d48b";

  return (
    <>
      {/* MAIN SECTION */}
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
            background: "#ffffff",
            padding: "50px 70px 50px 50px",
            borderRadius: "6px",
            border: "1px solid #e5d6a7",
          }}
        >
          {/* HEADING */}
          <h2
            style={{
              color: "black",
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            About AMR Legacy Villas
          </h2>

          {/* CONTENT */}
          <p
              style={{
                fontSize: "22px",
                lineHeight: 1.8,
                color: "#000",
              }}
            >
              AMR Legacy Villas represents a thoughtfully planned residential development
              designed to offer a refined lifestyle in the fast-growing surroundings of
              Gowrelly, Hyderabad. Developed with a focus on quality construction,
              contemporary design, and long-term value, the project brings together
              spacious villas, landscaped open spaces, and modern lifestyle amenities.
              Located close to the Outer Ring Road, AMR Legacy ensures excellent
              connectivity to key parts of the city while maintaining a peaceful and
              private residential environment. With attention to detail, elegant
              architecture, and a commitment to comfortable living, AMR Legacy creates a
              premium villa community for families seeking both luxury and convenience.
            </p>
        </div>
      </section>

      {/* DISCLAIMER BAR */}
      <div
        style={{
          width: "100%",
          backgroundColor: beige,
          padding: "20px 40px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#333",
            maxWidth: "1450px",
          }}
        >
          <strong>Project Disclaimer:</strong> The project "AMR Legacy Villas"
          is registered with TGRERA under Registration No. <strong>P02400009909</strong>,
          and details are available on the TGRERA website: https://rera.telangana.gov.in/ <br />

          <strong>Disclaimer:</strong> The content presented on this website is
          solely for informational purposes and does not constitute a service
          offer. Prices mentioned here are subject to change without prior
          notification, and the availability of listed properties is not
          assured. Images showcased are illustrative and may not precisely
          represent the actual properties. Kindly be advised that this website
          operates as an authorized marketing channel partner. Additionally,
          updates and information may be sent to the registered mobile number
          or email ID. All rights reserved. This website’s content, design,
          and data are protected by copyright and other intellectual property
          rights. Unauthorized use or reproduction of the content may be
          subject to legal repercussions. For precise and current information
          on services, pricing, availability, or any other details, we
          recommend contacting us directly through the contact information
          provided on this website. We appreciate your visit.
        </p>
      </div>
    </>
  );
}




