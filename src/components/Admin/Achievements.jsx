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

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const q = query(collection(db, "Achievements"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAchievements(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl || !content) {
      alert("All fields are required.");
      return;
    }
    try {
      await addDoc(collection(db, "Achievements"), {
        title,
        date,
        imageUrl,
        content,
      });
      setTitle("");
      setDate("");
      setImageUrl("");
      setContent("");
    } catch (error) {
      alert("Error adding achievement: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this achievement?")) return;
    try {
      await deleteDoc(doc(db, "Achievements", id));
    } catch (error) {
      alert("Error deleting achievement: " + error.message);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>

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
        <textarea
          placeholder="Content"
          className="w-full p-3 bg-white rounded-lg text-black resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
        />
        <button
          type="submit"
          className="w-44 bg-blue-700 hover:bg-blue-800 p-3 rounded-lg font-bold"
        >
          Add Achievement
        </button>
      </form>

      <ul className="mt-10 space-y-4">
        {achievements.map((item) => (
          <li
            key={item.id}
            className="bg-gray-800 p-4 rounded-xl flex flex-col md:flex-row items-start  justify-between gap-1 "
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-md text-gray-400">{item.date}</p>
              <p className="mt-2 text-gray-300 whitespace--line">
                {item.content}
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

export default Achievements;
