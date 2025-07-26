import React, { useState, useEffect, FormEvent } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../../services/configs";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formUrl, setFormUrl] = useState("");


  useEffect(() => {
    const q = query(collection(db, "UpcomingEvents"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(data);
    });

    return () => unsubscribe();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl ) {
      alert("All fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "UpcomingEvents"), {
        title,
        date,
        imageUrl,
        formUrl
      });
      setTitle("");
      setDate("");
      setImageUrl("");
      setFormUrl("");
    } catch (error) {
      alert("Error adding event: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this event?")) return;
    try {
      await deleteDoc(doc(db, "UpcomingEvents", id));
    } catch (error) {
      alert("Error deleting event: " + error.message);
    }
  };

  return (
    <section
      id="#upcomingevents"
      className="max-w-4xl mx-auto py-10 text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>

      <form
        onSubmit={handleAdd}
        className="space-y-6 bg-gray-800 p-8 rounded-xl"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Google Form URL"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={formUrl}
          onChange={(e) => setFormUrl(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-44 bg-blue-700 hover:bg-blue-800 p-3 rounded-lg font-bold"
        >
          Add Event
        </button>
      </form>

      <ul className="mt-10 space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-gray-800 p-4 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-md text-gray-400">{event.date}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(event.id)}
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl text-md font-bold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
