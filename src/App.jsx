import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "../src/components/header.jsx";
import MainLayout from "./components/Mainlayout.jsx";
import EnquiryForm from "./components/enquiry.jsx";
import About from "./components/About.jsx";
import PriceSection from "./components/Price.jsx";
import Amenities from "./components/Amenities.jsx";
import Gallery from "./components/Gallery.jsx";
import Location from "./components/Location.jsx";  
import CompanyInfo from './components/Companyinfo.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />

      <MainLayout/>


      <EnquiryForm />


      <About />


      <PriceSection />


      <Amenities />

      <Gallery />

      <Location />


      <CompanyInfo />

    </>
  )
}

export default App
