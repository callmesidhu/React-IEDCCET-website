import React, { useState, useEffect } from "react";
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

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const q = query(collection(db, "Announcements"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAnnouncements(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !date || !description) {
      alert("All fields are required.");
      return;
    }
    try {
      await addDoc(collection(db, "Announcements"), {
        title,
        date,
        description,
      });
      setTitle("");
      setDate("");
      setDescription("");
    } catch (error) {
      alert("Error adding announcement: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this announcement?")) return;
    try {
      await deleteDoc(doc(db, "Announcements", id));
    } catch (error) {
      alert("Error deleting announcement: " + error.message);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Announcements</h2>

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
        <textarea
          placeholder="Description"
          className="w-full p-3 bg-white rounded-lg text-black resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
        <button
          type="submit"
          className="w-44 bg-blue-700 hover:bg-blue-800 p-3 rounded-lg font-bold"
        >
          Add Announcement
        </button>
      </form>

      <ul className="mt-10 space-y-4">
        {announcements.map((item) => (
          <li
            key={item.id}
            className="bg-gray-800 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-md text-gray-400">{item.date}</p>
              <p className="mt-2 text-gray-300 whitespace-pre-line">
                {item.description}
              </p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl text-md font-bold self-start md:self-auto"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Announcements;
