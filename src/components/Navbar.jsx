import { useState } from "react";
import { Link } from "react-router";
import { GrLanguage } from "react-icons/gr";
import { Cross as Hamburger } from 'hamburger-react'
import { useTranslation } from "react-i18next";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileSupportOpen(false); // Close support submenu when closing main menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileSupportOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  const toggleMobileSupport = (e) => {
    e.preventDefault();
    setIsMobileSupportOpen(!isMobileSupportOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-5 px-6 md:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-6"/>
          <Link to="/" className="text-gray-900 font-semibold text-xl">{t("brand")}</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10 text-lg">
            <Link to="/services" className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out">
              {t("services")}
            </Link>
            <Link to="/applications" className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out">
              {t("applications")}
            </Link>
            
            {/* Support with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSupportDropdownOpen(true)}
              onMouseLeave={() => setIsSupportDropdownOpen(false)}
            >
              <div 
                className="text-gray-900 transition duration-300 ease-in-out flex items-center gap-1 cursor-default"
              >
                {t("support")}
                <IoChevronDown className={`transition-transform duration-200 ${isSupportDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Desktop Support Dropdown */}
              <div className={`absolute left-0 mt-2 w-48 border bg-amber-50 border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ${
                isSupportDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link 
                  to="/support" 
                  className="block px-4 py-3 text-gray-900 hover:bg-red-50 hover:text-red-800 transition duration-200"
                >
                  {t("support.designTips") || "Design Tips"}
                </Link>
                <Link 
                  to="/support" 
                  className="block px-4 py-3 text-gray-900 hover:bg-red-50 hover:text-red-800 transition duration-200"
                >
                  {t("support.templates") || "Templates"}
                </Link>
                <Link 
                  to="/support" 
                  className="block px-4 py-3 text-gray-900 hover:bg-red-50 hover:text-red-800 transition duration-200"
                >
                  {t("support.faq") || "FAQ"}
                </Link>
              </div>
            </div>
            
            <Link to="/contact" className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out">
              {t("contact")}
            </Link>
          </div>
          
          {/* Desktop Language Selector */}
          <div className="relative">
            <GrLanguage 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="text-2xl text-gray-900 hover:text-red-800 transition duration-300 ease-in-out cursor-pointer ml-10"
            />
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-amber-50 border border-gray-200 rounded-md shadow-lg z-50">
                <button 
                  onClick={() => changeLanguage("en")}
                  className={`block px-4 py-2 w-full text-left cursor-pointer ${
                    i18n.language === 'en' ? 'bg-red-50 text-red-800' : ''
                  }`}
                >
                  English
                </button>
                <button 
                  onClick={() => changeLanguage("el")}
                  className={`block px-4 py-2 w-full text-left cursor-pointer ${
                    i18n.language === 'el' ? 'bg-red-50 text-red-800' : ''
                  }`}
                >
                  Ελληνικά
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-900 hover:text-red-800 transition duration-300"
        >
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen}/>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden border-t border-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col px-6 py-4 gap-4 text-center">
          <Link 
            to="/services" 
            onClick={closeMenu}
            className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out text-2xl py-2"
          >
            {t("services")}
          </Link>
          <Link 
            to="/applications" 
            onClick={closeMenu}
            className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out text-2xl py-2"
          >
            {t("applications")}
          </Link>
          
          {/* Mobile Support with Submenu */}
          <div>
            <button 
              onClick={toggleMobileSupport}
              className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out text-2xl py-2 w-full flex items-center justify-center gap-2"
            >
              {t("support")}
              <IoChevronDown className={`transition-transform duration-200 ${isMobileSupportOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Support Submenu */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isMobileSupportOpen ? 'max-h-48 mt-2' : 'max-h-0'
            }`}>
              <Link 
                to="/support" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-red-800 transition duration-300 ease-in-out text-lg py-2"
              >
                {t("support.designTips") || "Design Tips"}
              </Link>
              <Link 
                to="/support" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-red-800 transition duration-300 ease-in-out text-lg py-2"
              >
                {t("support.templates") || "Templates"}
              </Link>
              <Link 
                to="/support" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-red-800 transition duration-300 ease-in-out text-lg py-2"
              >
                {t("support.faq") || "FAQ"}
              </Link>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="text-gray-900 hover:text-red-800 transition duration-300 ease-in-out text-2xl py-2"
          >
            {t("contact")}
          </Link>
          <div className="flex items-center gap-2 py-2 border-b border-gray-300 mt-2 justify-center pb-8">
            <button 
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-md transition ${
                i18n.language === 'en'
                  ? 'bg-red-800 text-white' 
                  : 'border border-gray-900'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage("el")}
              className={`px-3 py-1 rounded-md transition ${
                i18n.language === 'el' 
                  ? 'bg-red-800 text-white' 
                  : 'border border-gray-900'
              }`}
            >
              EL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;