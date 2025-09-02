import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SiEtsy } from 'react-icons/si';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-transparent to-red-100/30 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Logo" className="w-8"/>
              <span className="font-semibold text-lg">{t("brand")}</span>
            </Link>
            <p className="text-sm text-gray-600">
              {t("footer.companyDescription")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-red-800 transition duration-300 ease-in-out block">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-sm text-gray-600 hover:text-red-800 transition duration-300 ease-in-out block">
                  {t("applications")}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-gray-600 hover:text-red-800 transition duration-300 ease-in-out block">
                  {t("support")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-red-800 transition duration-300 ease-in-out block">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-600 block">{t("footer.services.customDesign")}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 block">{t("footer.services.personalisedGifts")}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 block">{t("footer.services.prototyping")}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 block">{t("footer.services.consulting")}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                atelier.anadelta@gmail.com
              </li>
              <li className="text-sm text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +30 261 401 5715
              </li>
              <li className="text-sm text-gray-600 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t("addressDetails")}
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0"> 
              {t("footer.madeBy.prefix")} <a target="_blank" rel="noopener noreferrer" href='https://tsiro.dev' className="font-semibold hover:text-red-800 transition duration-300 ease-in-out">tsiro.dev</a> {t("footer.madeBy.suffix")} ❤️
            </p>
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              {t("footer.copyright")}
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-red-800 transition-colors pt-0.5">
                <SiEtsy />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;