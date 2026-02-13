import React from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, ArrowRight } from "lucide-react";

<Stethoscope size={24} className="text-blue-600" />

/* =======================
   DOCTORS DATA (SAME SOURCE)
======================= */
const doctors = [
  {
    id: "amit-javed",
    name: "Dr. Amit Javed",
    speciality: "General",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400",
  },
  {
    id: "anoop-misra",
    name: "Dr. Anoop Misra",
    speciality: "Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
  },
  {
    id: "manjinder-sandhu",
    name: "Dr. Manjinder Sandhu",
    speciality: "Neurology",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
  },
  {
    id: "sarah-khan",
    name: "Dr. Sarah Khan",
    speciality: "Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
  },
  {
    id: "rohit-mehta",
    name: "Dr. Rohit Mehta",
    speciality: "Orthopedics",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400",
  },
  {
    id: "neha-sharma",
    name: "Dr. Neha Sharma",
    speciality: "Dermatology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
  },
  {
    id: "kunal-verma",
    name: "Dr. Kunal Verma",
    speciality: "Ophthalmology",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
  },
  {
    id: "pooja-iyer",
    name: "Dr. Pooja Iyer",
    speciality: "Physiotherapy",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
  },
];

const DoctorsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold">
            OUR DOCTORS
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            Meet Our Specialists
          </h2>
          <p className="text-slate-600 mt-4">
            Our experienced doctors provide world-class healthcare services
            with compassion and precision.
          </p>
        </div>

        {/* DOCTORS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover rounded-2xl"
              />

              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {doctor.name}
                </h3>
                <p className="text-primary font-semibold mt-1">
                  {doctor.speciality}
                </p>

                <button
                  onClick={() => navigate(`/doctor/${doctor.id}`)}
                  className="mt-4 flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  View Profile <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
