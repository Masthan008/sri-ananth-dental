
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Type for navigation items
type NavItem = {
  name: string;
  path: string;
  children?: NavItem[];
};

// Logo is served from the public directory
const logoPath = "/images/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const navItems: NavItem[] = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.team'), path: "/team" },
    { 
      name: t('nav.more', 'More'), 
      path: "#",
      children: [
        { name: t('nav.insurance', 'Insurance'), path: "/insurance" },
        { name: t('nav.faq', 'FAQ'), path: "/faq" },
        { name: t('nav.careers', 'Careers'), path: "/careers" },
        { name: t('nav.testimonials', 'Testimonials'), path: "/testimonials" },
        { name: t('nav.patientInfo', 'Patient Info'), path: "/patient-info" },
        { name: t('nav.gallery', 'Gallery'), path: "/gallery" },
        { name: t('nav.blog', 'Blog'), path: "/blog" },
      ]
    },
    { name: t('nav.contact', 'Contact'), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      {/* Remove extra gap at the top */}
      <style>{`
        body { margin: 0; padding: 0; }
      `}</style>
      
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <span className="flex items-center">
              <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              +91 94944 44027
            </span>
            <span className="flex items-center">
              <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              +91 8499995554
            </span>
            <span className="flex items-center">
              <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              Mon-Sat: 9AM-8PM, Sun: 9AM-1PM
            </span>
          </div>
          <div className="hidden md:flex items-center">
            <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            Opposite RTC Complex, Main Road, Vikarabad, Telangana 501101
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Clinic Name */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img 
                src={logoPath}
                alt="Sri Ananth Dental Hospital Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div 
              className="cursor-pointer" 
              onClick={() => navigate("/")}
            >
              <h1 className="text-xl font-bold text-blue-800 hover:text-blue-700 transition-colors">
                Sri Ananth Dental Hospital
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative" ref={item.children ? dropdownRef : null}>
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-2 rounded-md"
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <button
                              key={child.name}
                              onClick={() => {
                                navigate(child.path);
                                setOpenDropdown(null);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {child.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-2 rounded-md"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => navigate("/booking")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-1.5 text-sm rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-2 mt-4">
                {navItems.map((item) => (
                  <div key={item.name} className="w-full">
                    {item.children ? (
                      <div className="mb-2">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-left text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-2 rounded-md"
                        >
                          <span>{item.name}</span>
                          {openDropdown === item.name ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                        {openDropdown === item.name && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <button
                                key={child.name}
                                onClick={() => {
                                  navigate(child.path);
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1.5 px-2 rounded-md hover:bg-gray-50"
                              >
                                {child.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          navigate(item.path);
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
                <Button 
                  onClick={() => {
                    navigate("/booking");
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white mt-4"
                >
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
