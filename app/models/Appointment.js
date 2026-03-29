import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String },
  timeSlot: { type: String },
  message: { type: String },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
