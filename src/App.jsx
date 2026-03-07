// import { useState } from "react";

// import Header from "./components/header.jsx";
// import MainLayout from "./components/Mainlayout.jsx";
// import About from "./components/About.jsx";
// import PriceSection from "./components/Price.jsx";
// import Amenities from "./components/Amenities.jsx";
// import Gallery from "./components/Gallery.jsx";
// import Location from "./components/Location.jsx";
// import EnquiryForm from "./components/enquiry.jsx";
// import CompanyInfo from "./components/Companyinfo.jsx";
// import Disclaimer from "./components/Disclamier.jsx";
// import PopupForm from "./components/Popupform.jsx";
// import "./App.css";

// function App() {

//   const [showPopup, setShowPopup] = useState(false);
//   const [popupTitle, setPopupTitle] = useState("");

//   const openPopup = (title) => {
//     setPopupTitle(title);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>

     
//       <Header openPopup={openPopup} />

//       <MainLayout openPopup={openPopup} />

//       <About openPopup={openPopup} />

//       <PriceSection openPopup={openPopup} />

//       <Amenities openPopup={openPopup} />

//       <Gallery openPopup={openPopup} />

//       <Location openPopup={openPopup} />
    

//       <EnquiryForm openPopup={openPopup} />

//       <CompanyInfo />

//       <Disclaimer />

//       {showPopup && (
//         <PopupForm
//           title={popupTitle}
//           closePopup={closePopup}
//         />
//       )}
//     </>
//   );
// }

// export default App;





import { useState } from "react";
import Header from "./components/header.jsx";
import MainLayout from "./components/Mainlayout.jsx";
import About from "./components/About.jsx";
import PriceSection from "./components/Price.jsx";
import Amenities from "./components/Amenities.jsx";
import Gallery from "./components/Gallery.jsx";
import Location from "./components/Location.jsx";
import EnquiryForm from "./components/enquiry.jsx";
import CompanyInfo from "./components/Companyinfo.jsx";
import Disclaimer from "./components/Disclamier.jsx";
import PopupForm from "./components/Popupform.jsx";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (title) => { setPopupTitle(title); setShowPopup(true); };
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <Header openPopup={openPopup} />

      <div className="lg:pr-[200px] xl:pr-[280px]">
        <MainLayout   openPopup={openPopup} />
        <About        openPopup={openPopup} />
        <PriceSection openPopup={openPopup} />
        <Amenities    openPopup={openPopup} />
        <Gallery      openPopup={openPopup} />
        <Location     openPopup={openPopup} />
        <CompanyInfo />
        
      </div>

      {/* Lives outside the padded wrapper — fixed on desktop, inline on mobile */}
      <EnquiryForm openPopup={openPopup} />

      {showPopup && <PopupForm title={popupTitle} closePopup={closePopup} />}
      <Disclaimer />
    </>
  );
}

export default App;