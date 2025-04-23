import { useState } from "react";
import { db } from "../../services/api"; // Adjust path as per your project structure
import { collection, addDoc } from "firebase/firestore";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const defaultFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate input lengths
    if (
      formData.name.length > 50 ||
      formData.subject.length > 100 ||
      formData.message.length > 500
    ) {
      alert("Please ensure inputs are within allowed length limits.");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData);
      const docRef = await addDoc(collection(db, "contactMessages"), formData);
      console.log("Document written with ID:", docRef.id);
      alert("Message sent successfully!");
      setFormData(defaultFormData);
    } catch (err) {
      console.error("Error adding document:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-blue-700 text-white p-8 rounded-xl min-w-full mx-auto mt-10 flex justify-center items-start gap-6 md:gap-12">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full md:w-auto">
          <p className="text-xl mb-3 text-center font-bold md:text-left">Contact Us</p>
          <h1 className="whitespace-nowrap text-4xl py-6 md:text-5xl font-bold mb-6 text-center md:text-left">
            If You Have Any Query,<br /> Please Contact Us
          </h1>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 bg-white rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Your Name"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="p-3 bg-white rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Your Email"
              />
            </div>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-3 rounded-lg bg-white w-full text-black focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Subject"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 rounded-lg bg-white w-full h-32 text-black focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Message"
            />
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-blue text-white-600 px-6 py-2 rounded-full border-2 border-white font-semibold hover:bg-purple-100 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>

     
    {/* Vertical Divider */}
<div className="hidden md:block w-[1px] bg-white  h-96 self-center -translate-x-10 " aria-hidden="true" />

{/* Right Side: Contact Info */}
<div className="flex flex-col justify-center translate-y-17 -translate-x-20 pl-4 space-y-6 min-w-[200px]">

        <div className="flex  ">
          <FiPhone size={20} />
          <span className="font-bold ml-2">+91 8570950954</span>
        </div>
        <div className="flex  gap-3">
          <FiMail size={20} />
          <a href="mailto:sample@gmail.com" className="underline font-bold">
            sample@gmail.com
          </a>
        </div>
        <div className="flex  gap-3">
          <FiMapPin size={20} />
          <span className="font-bold ml-2">College of Engineering, Trivandrum</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;