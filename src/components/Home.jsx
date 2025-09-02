import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col px-4 md:px-8 lg:px-4">
        <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center pt-20 sm:pt-24 md:pt-28 lg:pt-36">
          {t("home.hero.title")}
        </h1>
        <p className="text-base sm:text-lg text-center mt-4 sm:mt-6 px-2 sm:px-4 md:px-8 lg:px-0 max-w-2xl mx-auto">
          {t("home.hero.subtitle")}
        </p>
        <div className="flex justify-center gap-4">
        <Link to="/contact" className="mt-6 sm:mt-8 border border-gray-900 py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl self-center text-center
        hover:bg-orange-200/60 hover:border-orange-200/10 transition-all duration-300 
        hover:scale-105 hover:shadow-lg cursor-pointer text-sm sm:text-base">
          {t("home.hero.cta")}
        </Link>
        <button className="mt-6 sm:mt-8 bg-amber-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl self-center transition-all 
        duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-sm sm:text-base">
          {t("home.hero.cta2")}
        </button>
        </div>
        
      </div>
      
      {/* Scrolling Banner */}
      <div className="bg-orange-200/40 py-2 mt-20 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          {/* Create multiple instances for seamless loop */}
          <span className="inline-block">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className="text-gray-800 text-sm inline-flex items-center">
                <span className="mx-2 text-lg"><div className="w-1 h-1 bg-gray-800 rounded-full mx-2"></div>
                </span>
                <span className="mx-2">{t("home.banner.text")}</span>
              </span>
            ))}
          </span>
          {/* Duplicate for seamless scrolling */}
          <span className="inline-block">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={`dup-${index}`} className="text-gray-800 text-sm inline-flex items-center">
                <span className="mx-2 text-lg"><div className="w-1 h-1 bg-gray-800 rounded-full mx-2"></div>
                  </span>
                <span className="mx-2">{t("home.banner.text")}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Home