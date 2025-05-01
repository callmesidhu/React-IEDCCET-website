import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
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
        console.log("Success", res);
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setFormData(defaultFormData);
      } else {
        console.error("Submission failed:", res);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div  initial={{ opacity: 0,y:100}}
      transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1,y:0 }}
        viewport={{ once: true }}
       
      >
      <section className="bg-blue-700 text-white p-6 md:p-8 min-w-full mx-auto mt-6 md:mt-10 flex flex-col items-center md:flex-row justify-center gap-6 md:gap-12">
        {/* Left Side: Form */}
        <div className="flex-1 flex flex-col items-center w-full md:max-w-xl">
          <div className="w-full">
            <p className="text-xl md:text-2xl mb-3 text-center md:text-left font-bold">Contact Us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl py-4 md:py-6 font-bold mb-4 md:mb-6 text-center md:text-left">
              If You Have Any Query,<br className="hidden md:block" /> Please Contact Us
            </h1>
            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 bg-white rounded-lg w-full sm:w-1/2 text-black focus:ring-2 focus:ring-blue-500"
                  required
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 bg-white rounded-lg w-full sm:w-1/2 text-black focus:ring-2 focus:ring-blue-500"
                  required
                  aria-label="Your Email"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 rounded-lg bg-white w-full text-black focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Subject"
              />
              <textarea
                type="textarea"
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
                  className="bg-blue text-white px-6 py-2 rounded-full border-2 border-white font-semibold hover:bg-purple-100 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </div>
            </form>
          </div>
        </div>

         {/* Vertical Divider - Hide on small screens */}
         <div className="hidden md:flex items-center justify-center">
          <div className="w-px bg-white h-64 md:h-80 mx-4 lg:block md:hidden" aria-hidden="true" />
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full sm:w-auto flex lg:-translate-y-10 flex-col items-center mt-10 sm:mt-8 md:mt-0 md:translate-y-0 md:translate-x-0 pl-0 md:pl-4 space-y-4 md:space-y-6 min-w-[200px] md:items-start">
          <div className="flex items-center">
            <FiPhone size={20} className="mr-2" />
            <span className="font-bold">+91 8570950954</span>
          </div>
          <div className="flex items-center gap-3">
            <FiMail size={20} />
            <a href="mailto:sample@gmail.com" className="underline font-bold">
              sample@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin size={20} />
            <span className="font-bold ml-2 text-center md:text-left">College of Engineering, Trivandrum</span>
          </div>
        </div>

       
      </section>
      </motion.div>

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
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Contact;