import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Stethoscope,
  CalendarPlus,
  PhoneCall,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false); // ✅ MOBILE STATE

  // Helper to style active links
  const linkStyle = (path) =>
    `transition-colors duration-200 font-medium ${
      location.pathname === path
        ? "text-primary"
        : "text-slate-600 hover:text-primary"
    }`;

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-[9999]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 group"
          >
            <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Stethoscope className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Medi<span className="text-primary">Care</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-[15px] items-center">
            <Link to="/" className={linkStyle("/")}>Home</Link>
            <Link to="/services" className={linkStyle("/services")}>Services</Link>
            <Link to="/doctors" className={linkStyle("/doctors")}>Doctors</Link>

            <div className="h-4 w-[1px] bg-slate-200 mx-2" />

            <Link
              to="/contact"
              className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium"
            >
              <PhoneCall size={18} />
              Support
            </Link>

            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-primary/20 hover:bg-primaryDark hover:shadow-lg transition-all active:scale-95"
            >
              <CalendarPlus size={18} />
              Book Now
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}          // ✅ CLICK WORKS NOW
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors z-[10000]"
          >
            {open ? (
              <X className="text-slate-900" size={28} />
            ) : (
              <Menu className="text-slate-900" size={28} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[9998]"
          onClick={() => setOpen(false)}  // overlay click = close
        >
          <div
            className="absolute top-0 right-0 w-72 h-full bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()} // 🔥 VERY IMPORTANT
          >
            <nav className="flex flex-col gap-6 text-lg font-semibold mt-12">
              <Link onClick={() => setOpen(false)} to="/" className={linkStyle("/")}>
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/services" className={linkStyle("/services")}>
                Services
              </Link>
              <Link onClick={() => setOpen(false)} to="/doctors" className={linkStyle("/doctors")}>
                Doctors
              </Link>

              <div className="border-t pt-4 mt-2" />

              <Link
                onClick={() => setOpen(false)}
                to="/contact"
                className="flex items-center gap-2 text-slate-600 hover:text-primary"
              >
                <PhoneCall size={18} />
                Support
              </Link>

              <Link
                onClick={() => setOpen(false)}
                to="/appointment"
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl shadow-md"
              >
                <CalendarPlus size={18} />
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
