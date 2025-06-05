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

const Team = () => {
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const q = query(collection(db, "Team"), orderBy("name", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTeam(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !designation || !email || !phone || !imageUrl) {
      alert("All fields are required.");
      return;
    }
    try {
      await addDoc(collection(db, "Team"), {
        name,
        designation,
        email,
        phone,
        imageUrl,
      });
      setName("");
      setDesignation("");
      setEmail("");
      setPhone("");
      setImageUrl("");
    } catch (error) {
      alert("Error adding team member: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this team member?")) return;
    try {
      await deleteDoc(doc(db, "Team", id));
    } catch (error) {
      alert("Error deleting team member: " + error.message);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Team</h2>

      <form
        onSubmit={handleAdd}
        className="space-y-6 bg-gray-800 p-8 rounded-xl"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Designation"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 bg-white rounded-lg text-black"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <button
          type="submit"
          className="w-44 bg-blue-700 hover:bg-blue-800 p-3 rounded-lg font-bold"
        >
          Add Team Member
        </button>
      </form>

      <ul className="mt-10 space-y-4">
        {team.map((member) => (
          <li
            key={member.id}
            className="bg-gray-800 p-4 rounded-xl flex items-center justify-between gap-4"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.designation}</p>
              <p className="text-gray-400">{member.email}</p>
              <p className="text-gray-400">{member.phone}</p>
            </div>
            <button
              onClick={() => handleDelete(member.id)}
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

export default Team;
