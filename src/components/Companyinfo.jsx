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
            About Godrej Properties Limited
          </h2>

          {/* CONTENT */}
          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.8,
              color: "#000",
            }}
          >
            The Godrej story began in 1897, a legacy built during India’s
            independence and Swadeshi movement, now shaping the lives of 1.1
            billion consumers worldwide. From consumer goods to real estate,
            appliances to agriculture, the Group is a name synonymous with
            national pride. Continuing this legacy in real estate, Godrej
            Properties Limited (GPL) was founded in 1990, bringing together 128
            years of heritage with contemporary design, sustainability, and
            innovation. With over 400 awards to its name, GPL was also honoured
            as “The Most Trusted Real Estate Brand” in 2019, a true testament to
            its excellence in the industry.
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
          <strong>Project disclaimer:</strong> The Project is registered as
          Godrej Regal Pavilion with TGRERA Registration No. P02400000910
          available on TGRERA website, https://rera.telangana.gov.in/ <br />
          <strong>Disclaimer:</strong> The content presented on this website is
          solely for informational purposes and does not constitute a service
          offer. Prices mentioned here are subject to change without prior
          notification, and the availability of listed properties is not
          assured. Images showcased are illustrative and may not precisely
          represent the actual properties. Kindly be advised that this website
          operates as an authorized channel partner. Additionally, updates and
          information may be sent to the registered mobile number or email ID.
          All rights reserved. This website’s content, design, and data are
          protected by copyright and other intellectual property rights.
          Unauthorized use or reproduction of the content may be subject to
          legal repercussions. For precise and current information on services,
          pricing, availability, or any other details, we recommend you contact
          us directly via the provided contact information on this website. We
          appreciate your visit.
        </p>
      </div>
    </>
  );
}