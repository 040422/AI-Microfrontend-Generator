import React, { useState } from "react";
import { uploadEvent } from "../api/eventapi";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const EventsPage = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    tag: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Login first");

    const formData = new FormData();
    for (const key in event) formData.append(key, event[key]);

    try {
      await uploadEvent(formData, token);
      toast.success("Event uploaded!");
    } catch (err) {
      toast.error(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
          <input placeholder="Date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
          <input placeholder="Tag" onChange={(e) => setEvent({ ...event, tag: e.target.value })} />
          <input type="file" onChange={(e) => setEvent({ ...event, image: e.target.files[0] })} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default EventsPage;
