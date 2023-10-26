"use client";
import React, { useState } from "react";

function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(Number(e.target.value));
  };

  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here
    // e.g., send the reservation data to a server
  };

  return (
    <form className="grid max-w-2xl gap-4 mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        className="border border-gray-300 bg-white text-black rounded px-2 py-1"
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        className="border border-gray-300 bg-white text-black rounded px-2 py-1"
        id="res-time"
        value={time}
        onChange={handleTimeChange}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        className="border border-gray-300 bg-white text-black rounded px-2 py-1"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        className="border border-gray-300 bg-white text-black rounded px-2 py-1"
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
      >
        <option>General</option>
        <option>Business Dinner</option>
        <option>Farewell</option>
        <option>Surprise</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        type="submit"
        value="Make Your Reservation"
      />
    </form>
  );
}

export default ReservationForm;
