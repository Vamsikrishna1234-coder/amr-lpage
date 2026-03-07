

import React, { useState } from "react";
import logo from "../assets/images/amr-logo.png";
import logo2 from "../assets/images/legacy .png";
import { Menu, X } from "lucide-react";

export default function Header({ openPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">

        {/* Reduced nav spacing slightly for 1024px screens */}
        <div
          className="flex items-center lg:pr-[170px] xl:pr-[280px]"
          style={{
            fontFamily: "'Muli','Helvetica','Arial',sans-serif",
            fontWeight: 500,
            fontSize: "clamp(0.8rem, 0.95vw, 1.05rem)",
          }}
        >

          {/* LOGOS */}
          <div className="flex items-center px-1 py-4 border-r shrink-0 gap-2">
            <img src={logo}  alt="AMR Logo"    className="h-10 w-auto" />
            <img src={logo2} alt="Legacy Logo" className="h-10 w-auto" />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center flex-nowrap flex-1">
            <MenuItem icon={homeIcon} target="home" onClick={scrollToSection} />
            <MenuItem icon={priceIcon}    label="Price"             target="price"     onClick={scrollToSection} />
            <MenuItem icon={wifiIcon}     label="Amenities"         target="amenities" onClick={scrollToSection} />
            <MenuItem icon={galleryIcon}  label="Gallery"           target="gallery"   onClick={scrollToSection} />
            <MenuItem icon={locationIcon} label="Location"          target="location"  onClick={scrollToSection} />
            <MenuItem icon={downloadIcon} label="Download Brochure" onClick={() => openPopup("Download Brochure")} />
          </nav>

          {/* MOBILE HAMBURGER */}
          <div className="lg:hidden ml-auto pr-4 shrink-0">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[56px] left-0 w-full bg-white shadow-lg z-40">
          <MobileItem icon={homeIcon}     target="home"      onClick={scrollToSection} />
          <MobileItem icon={priceIcon}    label="Price"      target="price"     onClick={scrollToSection} />
          <MobileItem icon={wifiIcon}     label="Amenities"  target="amenities" onClick={scrollToSection} />
          <MobileItem icon={galleryIcon}  label="Gallery"    target="gallery"   onClick={scrollToSection} />
          <MobileItem icon={locationIcon} label="Location"   target="location"  onClick={scrollToSection} />
          <MobileItem icon={downloadIcon} label="Download Brochure" onClick={() => openPopup("Download Brochure")} />
        </div>
      )}
    </>
  );
}

function MenuItem({ icon, label, target, onClick }) {
  return (
    <div
      onClick={() => (target ? onClick(target) : onClick())}
      className="flex items-center gap-2 px-1 xl:px-5 py-3 border-r cursor-pointer hover:bg-gray-50 transition whitespace-nowrap"
    >
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      {label && <span>{label}</span>}
    </div>
  );
}

function MobileItem({ icon, label, target, onClick }) {
  return (
    <div
      onClick={() => (target ? onClick(target) : onClick())}
      className="flex items-center gap-3 px-6 py-4 border-b cursor-pointer hover:bg-gray-50"
    >
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      {label && <span>{label}</span>}
    </div>
  );
}

const homeIcon     = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l9 8h-3v9h-12v-9h-3z"/></svg>`;
const priceIcon    = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/></svg>`;
const wifiIcon     = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18a2 2 0 1 0 .001-4.001A2 2 0 0 0 12 18zm6.928-5.071a8 8 0 0 0-13.856 0l1.785 1.786a6 6 0 0 1 10.286 0l1.785-1.786zm3.536-3.536a14 14 0 0 0-20 0l1.768 1.768a12 12 0 0 1 16.464 0l1.768-1.768z"/></svg>`;
const galleryIcon  = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19v-14c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-11-10l2 3 3-4 4 6h-14l5-5z"/></svg>`;
const locationIcon = `<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/></svg>`;
const downloadIcon = `
<span class="download-icon">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M5 20h14v-2H5v2z" fill="currentColor" stroke="none"/>
<line x1="12" y1="3" x2="12" y2="15"/>
<polyline points="8 11 12 15 16 11"/>
</svg>
</span>
`;
