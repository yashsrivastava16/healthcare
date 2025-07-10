"use client";
import React, { useState, useEffect } from "react";

function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

type Appointment = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message?: string;
};

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [date, setDate] = useState(getTodayDateString());
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authed) return;
    fetch(`/api/appointments?date=${date}`)
      .then((res) => res.json())
      .then(setAppointments);
  }, [date, authed]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "drsecret2025") {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleAuth}
          className="bg-white p-8 rounded-xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-bold mb-2 text-center">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Appointments for {date}
        </h1>
        <div className="mb-6 flex justify-center">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        {appointments.length === 0 ? (
          <div className="text-center text-gray-500">
            No appointments found for this date.
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Date/Time</th>
                <th className="p-2 border">Message</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, i) => (
                <tr key={i} className="hover:bg-blue-100">
                  <td className="p-2 border">{a.name}</td>
                  <td className="p-2 border">{a.email}</td>
                  <td className="p-2 border">{a.phone}</td>
                  <td className="p-2 border">{a.date}</td>
                  <td className="p-2 border">{a.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
