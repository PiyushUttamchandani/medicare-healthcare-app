import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Bone,
  UserRound,
  Eye,
  Activity,
} from "lucide-react";

/* =======================
   DOCTORS DATA
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

/* =======================
   SERVICES DATA
======================= */
const services = [
  { id: "General", icon: Stethoscope, title: "General Checkup" },
  { id: "Cardiology", icon: HeartPulse, title: "Cardiology" },
  { id: "Neurology", icon: Brain, title: "Neurology" },
  { id: "Pediatrics", icon: Baby, title: "Pediatrics" },
  { id: "Orthopedics", icon: Bone, title: "Orthopedics" },
  { id: "Dermatology", icon: UserRound, title: "Dermatology" },
  { id: "Ophthalmology", icon: Eye, title: "Ophthalmology" },
  { id: "Physiotherapy", icon: Activity, title: "Physiotherapy" },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("General");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter(
    (doc) => doc.speciality === activeService
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveService(s.id)}
              className={`cursor-pointer p-8 rounded-[2rem] border-2 transition-all
              ${
                activeService === s.id
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/20"
                  : "bg-white border-transparent hover:border-primary/30"
              }`}
            >
              <s.icon
                size={32}
                className={
                  activeService === s.id ? "text-white" : "text-primary"
                }
              />
              <h3 className="text-xl font-bold mt-4">{s.title}</h3>
            </div>
          ))}
        </div>

        {/* DOCTORS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              onClick={() => navigate(`/doctor/${doc.id}`)}
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-primary">
                    {doc.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {doc.speciality}
                  </p>
                  <p className="mt-1 text-xs font-bold text-primary">
                    View Profile →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
