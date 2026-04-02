"use client";

// ============================================
// ADMIN DASHBOARD
// This page shows all appointments to the doctor
// Doctor can see patient name, phone, service, time
// ============================================

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaCalendarCheck,
  FaUserInjured,
  FaClock,
  FaPhoneAlt,
  FaStethoscope,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaArrowLeft,
} from "react-icons/fa";

export default function AdminDashboard() {
  // State to hold all appointments from the API
  const [appointments, setAppointments] = useState([]);
  // State to track if data is loading
  const [loading, setLoading] = useState(true);
  // State for simple password protection
  const [loggedIn, setLoggedIn] = useState(false);
  // State for password input
  const [password, setPassword] = useState("");

  // Function to fetch all appointments from our API
  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.log("Error fetching appointments:", err);
    }
    setLoading(false);
  };

  // Fetch appointments when page loads (only if logged in)
  useEffect(() => {
    if (loggedIn) {
      const initialFetch = setTimeout(() => {
        fetchAppointments();
      }, 0);
      // Auto-refresh every 30 seconds to see new bookings
      const interval = setInterval(fetchAppointments, 30000);
      return () => {
        clearTimeout(initialFetch);
        clearInterval(interval);
      };
    }
  }, [loggedIn]);

  // Simple login check (password: admin123)
  const handleLogin = () => {
    if (password === "admin123") {
      setLoggedIn(true);
    } else {
      alert("Wrong password!");
    }
  };

  // Calculate stats from appointments
  const totalAppointments = appointments.length;
  const pendingCount = appointments.filter(
    (a) => a.status === "pending",
  ).length;
  const confirmedCount = appointments.filter(
    (a) => a.status === "confirmed",
  ).length;

  // ============================================
  // LOGIN SCREEN - Shows before dashboard
  // ============================================
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FaStethoscope className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Doctor Dashboard
          </h1>
          <p className="text-slate-400 text-sm mb-8">
            Enter password to view appointments
          </p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
            }}
            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-emerald-500 mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            Login
          </button>
          <p className="text-xs text-slate-400 mt-4">Demo password: admin123</p>
        </div>
      </div>
    );
  }

  // ============================================
  // MAIN DASHBOARD - Shows after login
  // ============================================
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <FaStethoscope className="text-white" size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-800">Dr. Ahmed Hassan</div>
              <div className="text-xs text-slate-400">Admin Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-emerald-600 flex items-center gap-1"
            >
              <FaArrowLeft size={12} /> View Website
            </Link>
            <button
              onClick={() => setLoggedIn(false)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <FaCalendarCheck className="text-blue-500" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">
                  {totalAppointments}
                </div>
                <div className="text-xs text-slate-400">Total Appointments</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <FaClock className="text-amber-500" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">
                  {pendingCount}
                </div>
                <div className="text-xs text-slate-400">Pending</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-emerald-500" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">
                  {confirmedCount}
                </div>
                <div className="text-xs text-slate-400">Confirmed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-slate-800 text-lg">
              All Appointments
            </h2>
            <button
              onClick={fetchAppointments}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Refresh
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="p-12 text-center">
              <FaSpinner
                className="animate-spin text-emerald-500 mx-auto mb-3"
                size={24}
              />
              <p className="text-slate-400 text-sm">Loading appointments...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && appointments.length === 0 && (
            <div className="p-12 text-center">
              <FaCalendarCheck
                className="text-slate-300 mx-auto mb-3"
                size={40}
              />
              <p className="text-slate-400">No appointments yet</p>
              <p className="text-slate-300 text-sm mt-1">
                Appointments will appear here when patients book
              </p>
            </div>
          )}

          {/* Appointments List */}
          {!loading && appointments.length > 0 && (
            <div className="divide-y divide-slate-100">
              {appointments.map((apt, index) => (
                <div
                  key={apt.id || index}
                  className="px-6 py-4 hover:bg-slate-50 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    {/* Patient Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                        {apt.patientName
                          ? apt.patientName[0].toUpperCase()
                          : "?"}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">
                          {apt.patientName}
                        </div>
                        <a
                          href={"tel:" + apt.phone}
                          className="text-sm text-emerald-600 flex items-center gap-1"
                        >
                          <FaPhoneAlt size={10} /> {apt.phone}
                        </a>
                      </div>
                    </div>

                    {/* Service & Time */}
                    <div className="flex items-center gap-6 text-sm">
                      {apt.service && (
                        <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {apt.service}
                        </div>
                      )}
                      {apt.timeSlot && (
                        <div className="flex items-center gap-1 text-slate-500">
                          <FaClock size={12} /> {apt.timeSlot}
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          "px-3 py-1 rounded-full text-xs font-bold " +
                          (apt.status === "confirmed"
                            ? "bg-emerald-50 text-emerald-600"
                            : apt.status === "cancelled"
                              ? "bg-red-50 text-red-600"
                              : "bg-amber-50 text-amber-600")
                        }
                      >
                        {apt.status === "confirmed"
                          ? "Confirmed"
                          : apt.status === "cancelled"
                            ? "Cancelled"
                            : "Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Message if any */}
                  {apt.message && (
                    <div className="mt-2 ml-14 text-sm text-slate-400 italic">
                      {apt.message}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-slate-400">
          Built by{" "}
          <span className="text-emerald-500 font-medium">
            ZENOVA Healthcare Digital Solutions
          </span>
        </div>
      </div>
    </div>
  );
}
