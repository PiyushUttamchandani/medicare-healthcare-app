import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Stethoscope, User, Phone, Calendar, Clock } from "lucide-react";

/* =======================
   SERVICES MASTER DATA
======================= */
const servicesData = {
  General: {
    label: "General Checkup",
    department: "General Medicine",
    doctors: ["Dr. Amit Javed"],
  },
  Cardiology: {
    label: "Cardiology",
    department: "Heart Department",
    doctors: ["Dr. Anoop Misra"],
  },
  Neurology: {
    label: "Neurology",
    department: "Brain & Nerves",
    doctors: ["Dr. Manjinder Sandhu"],
  },
  Pediatrics: {
    label: "Pediatrics",
    department: "Child Care",
    doctors: ["Dr. Sarah Khan"],
  },
  Orthopedics: {
    label: "Orthopedics",
    department: "Bone & Joint",
    doctors: ["Dr. Rohit Mehta"],
  },
  Dermatology: {
    label: "Dermatology",
    department: "Skin Care",
    doctors: ["Dr. Neha Sharma"],
  },
  Ophthalmology: {
    label: "Ophthalmology",
    department: "Eye Care",
    doctors: ["Dr. Kunal Verma"],
  },
  Physiotherapy: {
    label: "Physiotherapy",
    department: "Rehabilitation",
    doctors: ["Dr. Pooja Iyer"],
  },
};

const Appointment = () => {
  const { state } = useLocation(); // 👈 service + doctor yahan se aayenge

  const [serviceKey, setServiceKey] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  /* =======================
     AUTO-FILL FROM ROUTE
  ======================= */
  useEffect(() => {
    if (state?.service) {
      setServiceKey(state.service);
    }
    if (state?.doctorName) {
      setDoctor(state.doctorName);
    }
  }, [state]);

  const selectedService = servicesData[serviceKey];

  /* =======================
     SUBMIT
  ======================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceKey || !doctor || !date || !time || !phone) {
      alert("Please fill all details");
      return;
    }

    const appointment = {
      service: selectedService.label,
      department: selectedService.department,
      doctor,
      date,
      time,
      phone,
    };

    console.log("✅ Appointment Booked:", appointment);
    alert("Appointment booked successfully!");
  };

  return (
    <section className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Book Appointment
        </h2>
        <p className="text-slate-500 mb-12 italic">
          Confirm your details and schedule your visit
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-6 text-left"
        >
          {/* SERVICE */}
          <div>
            <label className="text-sm font-bold uppercase text-slate-700 ml-1">
              Service
            </label>
            <div className="relative mt-2">
              <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <select
                value={serviceKey}
                onChange={(e) => {
                  setServiceKey(e.target.value);
                  setDoctor("");
                }}
                className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-slate-200 font-semibold"
                required
              >
                <option value="">Select Service</option>
                {Object.keys(servicesData).map((key) => (
                  <option key={key} value={key}>
                    {servicesData[key].label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DEPARTMENT (AUTO) */}
          {selectedService && (
            <div>
              <label className="text-sm font-bold uppercase text-slate-700 ml-1">
                Department
              </label>
              <input
                type="text"
                value={selectedService.department}
                readOnly
                className="w-full px-4 py-4 rounded-2xl ring-1 ring-slate-200 bg-slate-50 font-semibold"
              />
            </div>
          )}

          {/* DOCTOR */}
          <div>
            <label className="text-sm font-bold uppercase text-slate-700 ml-1">
              Doctor
            </label>
            <div className="relative mt-2">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                disabled={!selectedService}
                className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-slate-200 font-semibold"
                required
              >
                <option value="">
                  {selectedService
                    ? "Select Doctor"
                    : "Select Service First"}
                </option>
                {selectedService?.doctors.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm font-bold uppercase text-slate-700 ml-1">
              Appointment Date
            </label>
            <div className="relative mt-2">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-slate-200"
                required
              />
            </div>
          </div>

          {/* TIME */}
          <div>
            <label className="text-sm font-bold uppercase text-slate-700 ml-1">
              Appointment Time
            </label>
            <div className="relative mt-2">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-slate-200 font-semibold"
                required
              >
                <option value="">Select Time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>

          {/* PHONE */}
          <div>
            <label className="text-sm font-bold uppercase text-slate-700 ml-1">
              Phone Number
            </label>
            <div className="relative mt-2">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 00000 00000"
                className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-slate-200"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-primaryDark shadow-lg shadow-primary/30"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
