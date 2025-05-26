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

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const q = query(collection(db, "Gallery"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setImages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("Image URL is required.");
      return;
    }
    try {
      await addDoc(collection(db, "Gallery"), {
        imageUrl,
        createdAt: new Date(),
      });
      setImageUrl("");
    } catch (error) {
      alert("Error adding image: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this image?")) return;
    try {
      await deleteDoc(doc(db, "Gallery", id));
    } catch (error) {
      alert("Error deleting image: " + error.message);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>

      <form
        onSubmit={handleAdd}
        className="space-y-6 bg-gray-800 p-8 rounded-xl"
      >
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
          Add Image
        </button>
      </form>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.id} className="relative rounded-xl overflow-hidden">
            <img
              src={img.imageUrl}
              alt="Gallery image"
              className="w-full h-48 object-cover rounded-xl"
            />
            <button
              onClick={() => handleDelete(img.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-800 px-3 py-1 rounded text-white font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
