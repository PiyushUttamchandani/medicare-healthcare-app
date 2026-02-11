import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import DoctorDetails from "./pages/DoctorDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Page Content */}
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/appointment" element={<Appointment />} />

                <Route
        path="/appointment"
        element={
          <ProtectedRoute>
            <Appointment />
          </ProtectedRoute>
        }
      />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
