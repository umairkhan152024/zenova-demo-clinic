"use client";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function BookingForm() {
  const [form, setForm] = useState({
    patientName: "",
    phone: "",
    service: "",
    timeSlot: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!form.patientName || !form.phone) {
      alert("Please enter your name and phone number");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({
          patientName: "",
          phone: "",
          service: "",
          timeSlot: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-16">
        <FaCheckCircle size={60} className="text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Appointment Booked!
        </h3>
        <p className="text-slate-400">
          We will confirm via WhatsApp within 1 hour.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
          FULL NAME
        </label>
        <input
          placeholder="Enter your name"
          value={form.patientName}
          onChange={(e) => setForm({ ...form, patientName: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
          PHONE NUMBER
        </label>
        <input
          placeholder="+92 3XX XXXXXXX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-slate-500 tracking-wide mb-1 block">
          SERVICE
        </label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-500 outline-none focus:border-emerald-500 bg-white"
        >
          <option value="">Select a service</option>
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
        <select
          value={form.timeSlot}
          onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-500 outline-none focus:border-emerald-500 bg-white"
        >
          <option value="">Select time slot</option>
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
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 bg-white resize-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
      >
        {loading ? "Booking..." : "Book Appointment"} <FaArrowRight size={14} />
      </button>
      <p className="text-center text-xs text-slate-400">
        We will confirm via WhatsApp within 1 hour
      </p>
    </div>
  );
}
