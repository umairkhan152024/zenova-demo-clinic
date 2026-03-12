import {
  FaUserMd,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaStethoscope,
  FaHeartbeat,
  FaLungs,
  FaNotesMedical,
  FaHome,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: "stethoscope",
    title: "General Consultation",
    desc: "Complete medical examination, accurate diagnosis, and personalized treatment plans for all ages.",
    bg: "bg-emerald-50",
    tc: "text-emerald-500",
  },
  {
    icon: "heart",
    title: "Diabetes & Heart Care",
    desc: "Expert management of diabetes, hypertension, cholesterol, and cardiovascular health monitoring.",
    bg: "bg-rose-50",
    tc: "text-rose-500",
  },
  {
    icon: "lungs",
    title: "Respiratory Treatment",
    desc: "Effective treatment for asthma, allergies, seasonal flu, cough, and chronic breathing conditions.",
    bg: "bg-blue-50",
    tc: "text-blue-500",
  },
  {
    icon: "notes",
    title: "Health Screenings",
    desc: "Preventive annual checkups, blood work, and early detection screenings for peace of mind.",
    bg: "bg-amber-50",
    tc: "text-amber-500",
  },
  {
    icon: "home",
    title: "Home Visits",
    desc: "Cannot visit the clinic? We come to you. Home consultations for elderly and immobile patients.",
    bg: "bg-violet-50",
    tc: "text-violet-500",
  },
  {
    icon: "shield",
    title: "Vaccination Services",
    desc: "Complete child and adult vaccinations. Travel vaccines and seasonal flu shots available.",
    bg: "bg-teal-50",
    tc: "text-teal-500",
  },
];

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "10,000+", label: "Patients Treated" },
  { num: "4.9", label: "Google Rating" },
  { num: "24/7", label: "WhatsApp Support" },
];

const qualifications = [
  "MBBS — KEMU Lahore",
  "FCPS — Medicine",
  "15+ Years Experience",
  "PMC Registered",
  "10,000+ Patients",
  "Home Visits Available",
];

const reviews = [
  {
    name: "Ayesha Bibi",
    text: "Dr. Hassan is the best doctor in Multan. He listens carefully and explains everything. My diabetes is now under control thanks to him.",
  },
  {
    name: "Muhammad Tariq",
    text: "Very professional and thorough. He diagnosed my problem accurately when 2 other doctors could not. I bring my whole family here now.",
  },
  {
    name: "Fatima Noor",
    text: "The online booking made it so easy. No waiting in long queues. The doctor gave me proper time and attention. Highly recommended!",
  },
];

function ServiceIcon({ type }) {
  if (type === "stethoscope") return <FaStethoscope size={24} />;
  if (type === "heart") return <FaHeartbeat size={24} />;
  if (type === "lungs") return <FaLungs size={24} />;
  if (type === "notes") return <FaNotesMedical size={24} />;
  if (type === "home") return <FaHome size={24} />;
  if (type === "shield") return <FaShieldAlt size={24} />;
  return null;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <FaStethoscope className="text-white" size={18} />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-800 leading-tight">
                Dr. Ahmed Hassan
              </div>
              <div
                className="text-emerald-600 font-medium"
                style={{ fontSize: "10px", letterSpacing: "0.05em" }}
              >
                GENERAL PHYSICIAN
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#services" className="hover:text-emerald-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-emerald-600 transition">
              About
            </a>
            <a href="#timings" className="hover:text-emerald-600 transition">
              Timings
            </a>
            <a href="#reviews" className="hover:text-emerald-600 transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-emerald-600 transition">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
          >
            Book Now
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, #065f46 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0f766e 0%, transparent 50%), radial-gradient(circle at 50% 80%, #164e63 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.9) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Now Accepting New Patients
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Your Health,
            <br />
            <span className="text-emerald-400">Our Priority</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Dr. Ahmed Hassan — 15+ years of trusted healthcare in Multan.
            Comprehensive consultations for your entire family. Book online,
            visit anytime.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <a
              href="#contact"
              className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition shadow-2xl shadow-emerald-500/30 flex items-center gap-2"
            >
              Book Appointment <FaArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/923001234567"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center gap-2"
            >
              <FaWhatsapp size={20} /> WhatsApp Us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {s.num}
                </div>
                <div className="text-xs text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-emerald-600 text-sm font-bold tracking-widest mb-3">
              WHAT WE TREAT
            </div>
            <h2 className="text-4xl font-bold text-slate-800">
              Our Medical Services
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto">
              Comprehensive healthcare services tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200"
              >
                <div
                  className={
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 " +
                    s.bg +
                    " " +
                    s.tc
                  }
                >
                  <ServiceIcon type={s.icon} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="bg-emerald-50 rounded-3xl flex items-center justify-center relative overflow-hidden border border-emerald-100"
                style={{ height: "500px" }}
              >
                <FaUserMd size={140} className="text-emerald-200" />
                <div className="absolute bottom-0 left-0 right-0 bg-emerald-700 p-8">
                  <div className="text-white font-bold text-xl">
                    Dr. Ahmed Hassan
                  </div>
                  <div className="text-emerald-200 text-sm">
                    MBBS, FCPS Medicine
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center">
                    <FaStar className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">4.9 / 5.0</div>
                    <div className="text-xs text-slate-400">
                      200+ Google Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-emerald-600 text-sm font-bold tracking-widest mb-3">
                ABOUT THE DOCTOR
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                15+ Years of Healing Lives
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Dr. Ahmed Hassan graduated from King Edward Medical University,
                Lahore. He completed his FCPS in Medicine and has been serving
                patients in Multan for over 15 years.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Known for thorough consultations, patient-friendly approach, and
                accurate diagnosis. Dr. Hassan believes every patient deserves
                time, attention, and the best possible care.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {qualifications.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <FaCheckCircle
                      className="text-emerald-500"
                      style={{ flexShrink: 0 }}
                      size={14}
                    />{" "}
                    {q}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
              >
                Book Consultation <FaArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="timings" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-emerald-400 text-sm font-bold tracking-widest mb-3">
            CLINIC HOURS
          </div>
          <h2 className="text-4xl font-bold mb-12">When Can You Visit?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="bg-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FaClock className="text-white" size={22} />
              </div>
              <div className="font-bold text-xl mb-1">Morning Clinic</div>
              <div className="text-slate-400 text-sm mb-6">
                Walk-in and Appointments
              </div>
              <div className="flex justify-between py-3 border-b border-white/10 text-sm">
                <span className="text-slate-300">Monday — Saturday</span>
                <span className="font-bold text-emerald-400">
                  9:00 AM — 1:00 PM
                </span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="text-slate-300">Sunday</span>
                <span className="font-bold text-red-400">Closed</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="bg-teal-500 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FaClock className="text-white" size={22} />
              </div>
              <div className="font-bold text-xl mb-1">Evening Clinic</div>
              <div className="text-slate-400 text-sm mb-6">
                By Appointment Preferred
              </div>
              <div className="flex justify-between py-3 border-b border-white/10 text-sm">
                <span className="text-slate-300">Monday — Saturday</span>
                <span className="font-bold text-teal-400">
                  5:00 PM — 9:00 PM
                </span>
              </div>
              <div className="flex justify-between py-3 text-sm">
                <span className="text-slate-300">Sunday</span>
                <span className="font-bold text-red-400">Closed</span>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 text-sm text-emerald-300">
            For emergencies outside clinic hours — call or WhatsApp us directly.
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-emerald-600 text-sm font-bold tracking-widest mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl font-bold text-slate-800">
              What Patients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <FaStar key={j} className="text-yellow-400" size={14} />
                  ))}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                  {r.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">
                      {r.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      Verified Patient
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-emerald-600 text-sm font-bold tracking-widest mb-3">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Call us, WhatsApp us, or fill the form. We confirm every
              appointment within 1 hour.
            </p>
            <div className="space-y-6">
              <a href="tel:+923001234567" className="flex items-center gap-5">
                <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                  <FaPhoneAlt className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    PHONE
                  </div>
                  <div className="font-bold text-slate-800 text-lg">
                    +92 300 1234567
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/923001234567"
                className="flex items-center gap-5"
              >
                <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                  <FaWhatsapp className="text-green-600" size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    WHATSAPP
                  </div>
                  <div className="font-bold text-slate-800 text-lg">
                    +92 300 1234567
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-5">
                <div className="bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    CLINIC ADDRESS
                  </div>
                  <div className="font-bold text-slate-800">
                    Main Boulevard, Near City Hospital, Multan
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-2xl overflow-hidden border border-slate-200 h-48">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.97289028498!2d71.39798879999999!3d30.1968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b315b5c509df5%3A0xa2018384f498dc0d!2sMultan!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Request Appointment
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              Fill the form and we will confirm within 1 hour via WhatsApp.
            </p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
                  FULL NAME
                </label>
                <input
                  placeholder="Enter your name"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
                  PHONE NUMBER
                </label>
                <input
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
                  SERVICE
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-500 outline-none focus:border-emerald-500 bg-white">
                  <option>Select a service</option>
                  <option>General Consultation</option>
                  <option>Diabetes / BP Checkup</option>
                  <option>Respiratory Issue</option>
                  <option>Preventive Checkup</option>
                  <option>Home Visit</option>
                  <option>Vaccination</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
                  PREFERRED TIME
                </label>
                <select className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-500 outline-none focus:border-emerald-500 bg-white">
                  <option>Select time slot</option>
                  <option>Morning (9 AM - 1 PM)</option>
                  <option>Evening (5 PM - 9 PM)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
                  MESSAGE
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your symptoms..."
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white resize-none"
                />
              </div>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 mt-2">
                Book Appointment <FaArrowRight size={14} />
              </button>
              <p className="text-center text-xs text-slate-400">
                We will confirm via WhatsApp within 1 hour
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Do Not Wait When It Comes To Health
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Book your appointment today. Your health is our priority.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:+923001234567"
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition flex items-center gap-2"
            >
              <FaPhoneAlt size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/923001234567"
              className="bg-emerald-700 text-white border-2 border-emerald-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition flex items-center gap-2"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <FaStethoscope className="text-white" size={16} />
              </div>
              <div className="text-white font-bold text-lg">
                Dr. Ahmed Hassan
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Trusted General Physician in Multan. 15+ years providing quality
              healthcare to families across the city.
            </p>
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wide mb-4">
              QUICK LINKS
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="#services"
                  className="hover:text-emerald-400 transition"
                >
                  Services
                </a>
              </div>
              <div>
                <a href="#about" className="hover:text-emerald-400 transition">
                  About Doctor
                </a>
              </div>
              <div>
                <a
                  href="#timings"
                  className="hover:text-emerald-400 transition"
                >
                  Clinic Timings
                </a>
              </div>
              <div>
                <a
                  href="#contact"
                  className="hover:text-emerald-400 transition"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wide mb-4">
              CONTACT
            </div>
            <div className="space-y-3 text-sm">
              <div>+92 300 1234567</div>
              <div>Main Boulevard, Multan</div>
              <div>dr.ahmed@clinic.com</div>
              <div>Mon-Sat: 9AM-1PM, 5PM-9PM</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs gap-2">
          <span>2026 Dr. Ahmed Hassan Clinic. All rights reserved.</span>
          <span>
            Designed by{" "}
            <a
              href="https://zenova.pk"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              ZENOVA Healthcare Digital Solutions
            </a>
          </span>
        </div>
      </footer>

      <a
        href="https://wa.me/923001234567?text=Hello%20Doctor%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-400/40 hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={32} className="text-white" />
      </a>
    </main>
  );
}
