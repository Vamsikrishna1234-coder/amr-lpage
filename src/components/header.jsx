
import React, { useState } from "react";
import logo from "../assets/images/amr-logo.png";
import { Menu, X } from "lucide-react";

export default function Header({ openPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex items-center px-3 py-2 overflow-hidden">

          {/* ---------- LEFT LOGO ---------- */}
          <div className="flex items-center px-4 py-3 border-r shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* ---------- NAV ITEMS (DESKTOP: 1024px+) ---------- */}
          <nav className="hidden lg:flex items-center flex-wrap bg-white">
            <MenuItem icon={homeIcon}     label="Home"              target="home"      onClick={scrollToSection} />
            <MenuItem icon={priceIcon}    label="Price"             target="price"     onClick={scrollToSection} />
            <MenuItem icon={wifiIcon}     label="Amenities"         target="amenities" onClick={scrollToSection} />
            <MenuItem icon={galleryIcon}  label="Gallery"           target="gallery"   onClick={scrollToSection} />
            <MenuItem icon={locationIcon} label="Location"          target="location"  onClick={scrollToSection} />
            <MenuItem
              icon={downloadIcon}
              label="Download Brochure"
              onClick={() => openPopup("Download Brochure")}
            />
          </nav>

          {/* ---------- MOBILE / TABLET MENU BUTTON (< 1024px) ---------- */}
          <div className="lg:hidden ml-auto pr-4 shrink-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </header>

      {/* ---------- MOBILE / TABLET DROPDOWN (< 1024px) ---------- */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg z-40 overflow-y-auto max-h-[calc(100vh-70px)]">
          <MobileItem icon={homeIcon}     label="Home"              target="home"      onClick={scrollToSection} />
          <MobileItem icon={priceIcon}    label="Price"             target="price"     onClick={scrollToSection} />
          <MobileItem icon={wifiIcon}     label="Amenities"         target="amenities" onClick={scrollToSection} />
          <MobileItem icon={galleryIcon}  label="Gallery"           target="gallery"   onClick={scrollToSection} />
          <MobileItem icon={locationIcon} label="Location"          target="location"  onClick={scrollToSection} />
          <MobileItem
            icon={downloadIcon}
            label="Download Brochure"
            onClick={() => openPopup("Download Brochure")}
          />
        </div>
      )}
    </>
  );
}

/* ---------- Desktop Menu Item ---------- */
function MenuItem({ icon, label, target, onClick }) {
  return (
    <div
      onClick={() => (target ? onClick(target) : onClick())}
      className="flex items-center gap-2 px-4 xl:px-6 py-3 border-r cursor-pointer hover:bg-gray-50 transition whitespace-nowrap"
    >
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text-[13px] xl:text-[14px] font-bold">{label}</span>
    </div>
  );
}

/* ---------- Mobile Menu Item ---------- */
function MobileItem({ icon, label, target, onClick }) {
  return (
    <div
      onClick={() => (target ? onClick(target) : onClick())}
      className="flex items-center gap-3 px-6 py-4 border-b cursor-pointer hover:bg-gray-50"
    >
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text-[15px] font-semibold">{label}</span>
    </div>
  );
}

/* ---------- SVG ICONS ---------- */
const homeIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 3l9 8h-3v9h-12v-9h-3z"/>
</svg>`;

const priceIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z"/>
</svg>`;

const wifiIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 18a2 2 0 1 0 .001-4.001A2 2 0 0 0 12 18zm6.928-5.071a8 8 0 0 0-13.856 0l1.785 1.786a6 6 0 0 1 10.286 0l1.785-1.786zm3.536-3.536a14 14 0 0 0-20 0l1.768 1.768a12 12 0 0 1 16.464 0l1.768-1.768z"/>
</svg>`;

const galleryIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M21 19v-14c0-1.104-.896-2-2-2h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2zm-11-10l2 3 3-4 4 6h-14l5-5z"/>
</svg>`;

const locationIcon = `
<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/>
</svg>`;

const downloadIcon = `
<svg width="20" height="36" viewBox="0 0 26 24" fill="currentColor">
  <path d="M5 20h14v-2H5v2z"/>
  <path d="M12 2v12"/>
  <path d="M8 10l4 4 4-4"/>
</svg>`;



