import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Award, ShieldCheck, ChevronLeft, Calendar } from "lucide-react";

/* =======================
   DOCTORS DATA
======================= */
const doctors = [
  {
    id: "amit-javed",
    name: "Dr. Amit Javed",
    speciality: "General",
    experience: "25+ Years",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800",
  },
  {
    id: "anoop-misra",
    name: "Dr. Anoop Misra",
    speciality: "Cardiology",
    experience: "40+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
  },
  {
    id: "manjinder-sandhu",
    name: "Dr. Manjinder Sandhu",
    speciality: "Neurology",
    experience: "35+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800",
  },
  {
    id: "sarah-khan",
    name: "Dr. Sarah Khan",
    speciality: "Pediatrics",
    experience: "18+ Years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
  },
  {
    id: "rohit-mehta",
    name: "Dr. Rohit Mehta",
    speciality: "Orthopedics",
    experience: "22+ Years",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800",
  },
  {
    id: "neha-sharma",
    name: "Dr. Neha Sharma",
    speciality: "Dermatology",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
  },
  {
    id: "kunal-verma",
    name: "Dr. Kunal Verma",
    speciality: "Ophthalmology",
    experience: "20+ Years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800",
  },
  {
    id: "pooja-iyer",
    name: "Dr. Pooja Iyer",
    speciality: "Physiotherapy",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation(); // 👈 service yahan se aayegi

  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="py-40 text-center text-2xl font-bold text-slate-700">
        Doctor Not Found!
      </div>
    );
  }

  /* =======================
     BOOK APPOINTMENT
  ======================= */
  const handleBooking = () => {
    navigate("/appointment", {
      state: {
        service: state?.service || doctor.speciality, // ✅ service auto
        doctorName: doctor.name,                      // ✅ doctor auto
      },
    });
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8"
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* IMAGE SECTION */}
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {doctor.experience}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    Professional Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-8">
            <div>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase">
                Board Certified Specialist
              </span>

              <h1 className="text-5xl font-extrabold text-slate-900 mt-4">
                {doctor.name}
              </h1>

              <p className="text-2xl text-primary font-semibold mt-2">
                {doctor.speciality}
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              {doctor.name} is a highly experienced {doctor.speciality} specialist
              with over {doctor.experience} of clinical expertise, known for
              delivering patient-focused, advanced medical care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-100 rounded-2xl flex items-center gap-4">
                <Calendar className="text-primary" />
                <span className="text-slate-700 font-medium">
                  Mon – Sat (9am – 5pm)
                </span>
              </div>

              <div className="p-5 border border-slate-100 rounded-2xl flex items-center gap-4">
                <ShieldCheck className="text-primary" />
                <span className="text-slate-700 font-medium">
                  Verified Specialist
                </span>
              </div>
            </div>

            {/* BOOK BUTTON */}
            <button
              onClick={handleBooking}
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primaryDark transition-all shadow-lg shadow-primary/30 active:scale-95"
            >
              Confirm Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
