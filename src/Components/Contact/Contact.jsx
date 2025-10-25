import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4auiqpr",
        "template_74au3g8",
        formData,
        "G3PjZdeyxilwfE2zd"
      )
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setSuccess("❌ Oops! Something went wrong.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.footer
      id="contact"
      className="bg-[#0F172A] w-full md:w-7xl mx-auto text-gray-200 py-10 sm:py-12 mt-12 rounded-2xl px-4 sm:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-[#3ebff6]">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Cards */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-300 opacity-80">
              Have a project in mind or just want to say hi? Feel free to reach out through any of the platforms below. I’ll get back to you soon.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {[
                { icon: "📧", text: "millatsarker224@gmail.com", link: "mailto:millatsarker224@gmail.com" },
                { icon: "📞", text: "+880 1405-688224", link: "tel:+8801405688224" },
                { icon: "💬", text: "WhatsApp", link: "https://wa.me/qr/BS5PX7NLZEQ2D1" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target={item.link.includes("wa.me") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="bg-[#1e293b] p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-3 text-sm sm:text-base"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(62,191,246,0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#1e293b] p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-700"
            whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(62,191,246,0.4)" }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input input-bordered w-full bg-gray-800 text-gray-200 border-gray-600 text-sm sm:text-base"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full bg-gray-800 text-gray-200 border-gray-600 text-sm sm:text-base"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea textarea-bordered w-full bg-gray-800 text-gray-200 border-gray-600 text-sm sm:text-base"
                placeholder="Your Message"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className={`btn bg-[#3ebff6] text-white w-full ${loading ? "loading" : ""}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="mt-2 text-center text-sm sm:text-base text-green-400 font-medium">
                  {success}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Contact;
