import React from "react";
import logo from "../assets/images/amr-logo.png"; 
import { Menu } from "lucide-react";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-[50%] bg-white shadow z-50 ">
      <div className="max-w-[1400px] mx-auto flex items-center px-3 py-2">

        {/* ---------- LEFT LOGO (touching nav) ---------- */}
        <div className="flex items-center px-4 py-3 border-r">
          <img
            src={logo}
            alt="Logo"
            className="h-10"
          />

        </div>

        {/* ---------- NAV ITEMS (attached to logo) ---------- */}
        <nav className="flex items-center bg-white">
        <MenuItem icon={homeIcon} />
        <MenuItem icon={priceIcon} label="Price" />
        <MenuItem icon={wifiIcon} label="Amenities" />
        <MenuItem icon={galleryIcon} label="Gallery" />
        <MenuItem icon={locationIcon} label="Location" />
        <MenuItem icon={downloadIcon} label="Download Brochure" />
        </nav>



      </div>
    </header>
  );
}

/* Menu Item Component */
function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-6 py-3 border-r cursor-pointer hover:bg-gray-50 transition">
      <span
        className="text-black"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <span className="text-[14px] font-bold">{label}</span>
    </div>
  );
}

/* ---------- SVG ICONS (No installation needed) ---------- */

const homeIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 3l9 8h-3v9h-12v-9h-3z"/>
</svg>
`;

const priceIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 1C9.243 1 7 3.243 7 6H5l3 4 3-4h-2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.302-.839 2.402-2 2.816V14h-2v-5.184c-1.161-.414-2-1.514-2-2.816 0-2.757 2.243-5 5-5s5 2.243 5 5h-2c0-2.757-2.243-5-5-5z"/>
  <path d="M11 15h2v2h-2zm0 3h2v2h-2z"/>
</svg>
`;

const wifiIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 18a2 2 0 1 0 .001-4.001A2 2 0 0 0 12 18zm6.928-5.071a8 8 0 0 0-13.856 0l1.785 1.786a6 6 0 0 1 10.286 0l1.785-1.786zm3.536-3.536a14 14 0 0 0-20 0l1.768 1.768a12 12 0 0 1 16.464 0l1.768-1.768z"/>
</svg>
`;

const galleryIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21 19v-14c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-11-10l2 3 3-4 4 6h-14l5-5z"/>
</svg>
`;

const locationIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/>
</svg>
`;

const downloadIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M5 20h14v-2h-14v2zm7-18l-5 5h3v6h4v-6h3l-5-5z"/>
</svg>
`;





