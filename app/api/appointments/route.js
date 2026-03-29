// ============================================
// APPOINTMENT API - Stores bookings in memory
// Perfect for demo. Will connect MongoDB on Vercel later.
// ============================================

// This array holds all appointments (resets when server restarts)
let appointments = [];

// POST - When patient books an appointment
export async function POST(request) {
  try {
    // Get the form data from the request
    const body = await request.json();

    // Make sure name and phone are provided
    if (!body.patientName || !body.phone) {
      return Response.json(
        { error: "Name and phone required" },
        { status: 400 },
      );
    }

    // Create appointment object with all details
    const appointment = {
      id: Date.now().toString(),
      patientName: body.patientName,
      phone: body.phone,
      service: body.service || "",
      timeSlot: body.timeSlot || "",
      message: body.message || "",
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Save to our list
    appointments.push(appointment);

    // Log in terminal so you can see it working
    console.log("NEW APPOINTMENT:", appointment.patientName, appointment.phone);
    console.log("TOTAL BOOKINGS:", appointments.length);

    // Send success response back to the form
    return Response.json({ success: true, appointment }, { status: 201 });
  } catch (error) {
    console.log("Error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

// GET - View all appointments (for admin dashboard later)
export async function GET() {
  return Response.json(appointments);
}
