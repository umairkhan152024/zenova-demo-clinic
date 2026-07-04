# ZENOVA Demo Clinic

A full-stack clinic management web application built with Next.js 16, MongoDB, and Tailwind CSS. Designed to help private clinics in Pakistan manage online appointment bookings efficiently.

**Live Demo:** [zenova-demo-clinic.vercel.app](https://zenova-demo-clinic.vercel.app)

---

## Features

- Online appointment booking form for patients
- Admin dashboard to view and manage all bookings
- Real-time form validation with user feedback
- Toast notifications using react-hot-toast
- Responsive design with Tailwind CSS
- MongoDB database for permanent data storage
- REST API routes built into Next.js (no separate backend needed)

---

## Tech Stack

| Technology         | Purpose                                       |
| ------------------ | --------------------------------------------- |
| Next.js 16         | Full-stack React framework (SSR + API Routes) |
| React 19           | UI components and state management            |
| MongoDB + Mongoose | Database and data modeling                    |
| Tailwind CSS 4     | Styling and responsive design                 |
| react-hot-toast    | Toast notifications                           |
| react-icons        | Icon library                                  |
| Vercel             | Deployment and hosting                        |

---

## Project Structure

```
zenova-demo-clinic/
├── app/
│   ├── admin/
│   │   └── page.js          # Admin dashboard (password protected)
│   ├── api/
│   │   └── appointments/
│   │       └── route.js     # REST API — GET and POST appointments
│   ├── components/
│   │   └── BookingForm.js   # Client component — booking form with validation
│   ├── lib/
│   │   └── mongodb.js       # MongoDB connection utility
│   ├── models/
│   │   └── Appointment.js   # Mongoose schema for appointments
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Homepage (Server Component)
├── public/                  # Static assets
├── .env.local               # Environment variables (not in Git)
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- MongoDB (local or Atlas)
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/umairkhan152024/zenova-demo-clinic.git
cd zenova-demo-clinic
```

2. Install dependencies

```bash
npm install
```

3. Create `.env.local` file in the root directory

```env
MONGODB_URI=your_mongodb_connection_string_here
```

For local MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/zenova-clinic
```

For MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/zenova-clinic
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser at `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/appointments` | Fetch all appointments   |
| POST   | `/api/appointments` | Create a new appointment |

### POST /api/appointments

Request body:

```json
{
  "patientName": "Umair Khan",
  "phone": "0300-1234567",
  "service": "General Consultation",
  "timeSlot": "10:00 AM",
  "message": "Optional message"
}
```

Response:

```json
{
  "success": true,
  "appointment": {
    "_id": "...",
    "patientName": "Umair Khan",
    "phone": "0300-1234567",
    "service": "General Consultation",
    "status": "pending",
    "createdAt": "2026-07-04T..."
  }
}
```

---

## Pages

### Homepage `/`

- Server Component (fast load, SEO-friendly)
- Services section
- Doctor qualifications
- Patient reviews
- Booking form embedded

### Admin Dashboard `/admin`

- Password protected
- View all appointments
- See patient details and booking status
- Sorted by newest first

---

## Deployment

This project is deployed on **Vercel** with MongoDB Atlas as the database.

### Deploy your own

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add `MONGODB_URI` as an environment variable in Vercel dashboard
4. Deploy

**Note for Pakistan users:** MongoDB Atlas connections may be blocked by some ISPs. Use local MongoDB for development and Vercel + Atlas for production (Vercel servers are not affected by this restriction).

---

## Environment Variables

| Variable      | Description               | Required |
| ------------- | ------------------------- | -------- |
| `MONGODB_URI` | MongoDB connection string | Yes      |

---

## Screenshots

> Homepage with booking form, services section, and patient reviews

> Admin dashboard showing all appointments

---

## Author

**Umair Khan**

- Founder, ZENOVA Digital Solutions
- GitHub: [@umairkhan152024](https://github.com/umairkhan152024)
- LinkedIn: [linkedin.com/in/umair-khan-943b333b4](https://linkedin.com/in/umair-khan-943b333b4)
- Email: zenovamed@gmail.com
- Location: Islamabad, Pakistan

---

## License

This project is private and intended for portfolio demonstration purposes.

---

## ZENOVA Digital Solutions

Building modern web solutions for healthcare providers in Pakistan.
Specializing in clinic management systems, appointment booking platforms, and healthcare digital transformation.
