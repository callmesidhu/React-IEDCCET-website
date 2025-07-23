import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

// Fade-in-up scroll-triggered variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 1 },
  transition: { duration: 0.6 },
};
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const defaultFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "#00092C" : "#FFFFFF";
  const textColor = darkMode ? "#FFFFFF" : "#000000";
  const inputBg = darkMode ? "bg-gray-800" : "bg-white";
  const inputText = darkMode ? "text-white" : "text-black";
  const focusRing = darkMode ? "focus:ring-blue-300" : "focus:ring-blue-500";
  const buttonBg = darkMode ? "bg-white text-blue-700 hover:bg-gray-200" : "bg-white text-blue-700 hover:bg-purple-100";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (
      formData.name.length > 50 ||
      formData.subject.length > 100 ||
      formData.message.length > 500
    ) {
      toast.error("Please ensure inputs are within allowed length limits.");
      return;
    }

    setIsSubmitting(true);

    try {
      const form = new FormData(e.target);
      form.append("access_key", "YOUR_ACCESS_KEY_HERE");
      const object = Object.fromEntries(form);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!");
        setFormData(defaultFormData);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.section
        {...fadeUp}
        className={`${
          darkMode ? "bg-[#00092C] text-white" : "bg-blue-700 text-white"
        } p-6 md:p-8 min-w-full mx-auto mt-6 md:mt-10 flex flex-col items-center md:flex-row justify-center gap-6 md:gap-12`}
      >
        {/* Left Side: Form */}
        <motion.div
          {...fadeInUp}
          className="flex-1 flex flex-col items-center w-full md:max-w-xl"
        >
          <p className="text-xl md:text-2xl mb-3 text-center md:text-left font-bold">Contact Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl py-4 md:py-6 font-bold mb-4 md:mb-6 text-center md:text-left">
            If You Have Any Query,<br className="hidden md:block" /> Please Contact Us
          </h1>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.input
                {...fadeInUp}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`p-3 rounded-lg w-full sm:w-1/2 ${inputBg} ${inputText} ${focusRing}`}
                required
              />
              <motion.input
                {...fadeInUp}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`p-3 rounded-lg w-full sm:w-1/2 ${inputBg} ${inputText} ${focusRing}`}
                required
              />
            </div>
            <motion.input
              {...fadeInUp}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`p-3 rounded-lg w-full ${inputBg} ${inputText} ${focusRing}`}
              required
            />
            <motion.textarea
              {...fadeInUp}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={`p-3 rounded-lg w-full h-32 ${inputBg} ${inputText} ${focusRing}`}
              required
            />
            <motion.div {...fadeInUp} className="flex justify-center md:justify-end">
              <button
                type="submit"
                className={`px-6 py-2 rounded-full border-2 font-semibold transition ${
    darkMode
      ? "bg-[#00092C] text-white border-white hover:bg-[#001144]"
      : "bg-white text-blue-700 border-white hover:bg-purple-100"
  }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeInUp} className="hidden md:flex items-center justify-center">
          <div className="w-px bg-white h-64 md:h-80 mx-4" aria-hidden="true" />
        </motion.div>

        {/* Right Side: Contact Info */}
        <motion.div
          {...fadeInUp}
          className="w-full sm:w-auto flex flex-col items-center md:items-start pl-0 md:pl-4 space-y-4 md:space-y-6 min-w-[200px]"
        >
          <motion.div {...fadeInUp} className="flex items-center">
            <FiPhone size={20} className="mr-2" />
            <span className="font-bold">+91 88485 99467</span>
          </motion.div>
          <motion.div {...fadeInUp} className="flex items-center gap-3">
            <FiMail size={20} />
            <a href="mailto:ceoiedc@cet.ac.in" className=" font-bold">
              ceoiedc@cet.ac.in
            </a>
          </motion.div>
          <motion.div {...fadeInUp} className="flex items-center gap-3">
            <FiMapPin size={20} />
            <span className="font-bold ml-2 text-center md:text-left">
              College of Engineering, Trivandrum
            </span>
          </motion.div>
        </motion.div>
      </motion.section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        transition={Bounce}
      />


    </>
  );
};

export default Contact;
