import React, { useState } from "react";
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
        <footer id="contact" className="bg-base-200 text-base-content py-5 mt-12 border-t">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    
                    <div className="space-y-4 text-left">
                        <h2 className="text-3xl font-bold mb-4">
                            Cont<span className="text-primary">act</span>
                        </h2>
                        <p className="text-base opacity-80">
                            Have a project in mind or just want to say hi?
                            Feel free to drop a message. I'll get back to you soon.
                        </p>
                        <div className="space-y-2 text-sm">
                            <p>📍 Rangpur, Bangladesh</p>
                            <p>📧 millatsarker224@gmail.com</p>
                            <p>📞 +880 1405-688224</p>
                        </div>
                    </div>

                    
                    <div className=" bg-gradient-to-br from-[#e3f2fd] via-[#e8f5e9] to-[#fffde7] p-2 rounded-xl shadow-lg   transform transition duration-300 hover:scale-105 cursor-pointer hover:shadow-amber-600np">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input input-bordered w-full"
                                placeholder="Your Email"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="textarea textarea-bordered w-full"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {success && (
                                <p className="mt-2 text-center text-green-500 font-medium">
                                    {success}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
