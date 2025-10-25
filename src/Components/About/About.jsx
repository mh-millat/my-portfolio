import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/Profile-image.png";

const About = () => {
    return (
        <section className="py-10 mt-5 rounded-2xl bg-gradient-to-br from-[#e3f2fd] via-[#e8f5e9] to-[#fffde7] min-h-[90vh] text-gray-800">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-indigo-200 group">
                        <motion.img
                            src={profile}
                            alt="Millat Sarker Himel"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-full"></div>
                    </div>
                </motion.div>

                <section className="py-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white text-gray-800">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        
                        <motion.h2
                            className="text-4xl font-extrabold text-gray-900 mb-6 relative inline-block"
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            About Me
                            <span className="block w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></span>
                        </motion.h2>

                        
                        <motion.div
                            className="text-lg leading-relaxed space-y-6 max-w-3xl mx-auto text-gray-700"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p>
                                I'm <span className="font-semibold text-indigo-600">Millat Sarker Himel</span>,
                                a passionate <strong>Frontend Developer</strong> currently studying at
                                <em> Rangpur Ideal Institute of Technology</em>. My journey started with HTML & CSS,
                                and now I specialize in <strong>JavaScript</strong> and <strong>React</strong>,
                                creating responsive, user-friendly, and accessible web experiences.
                            </p>

                            <p>
                                I love working on <strong>Full-Stack projects</strong> using
                                <span className="text-indigo-600 font-medium"> Node.js</span> and
                                <span className="text-indigo-600 font-medium"> MongoDB</span>, always focusing on
                                clean, optimized code and smooth UI/UX.
                            </p>

                            <p>
                                Outside of coding, I enjoy <em>football, photography, and learning new technologies</em>.
                                I believe growth comes from curiosity and consistency.
                            </p>

                            <p className="italic text-gray-600">
                                “Code is like poetry — it’s not just about logic, it's about style, clarity, and purpose.”
                            </p>
                        </motion.div>

                        
                        <motion.div
                            className="w-40 h-1 bg-indigo-400 mx-auto mt-10 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.6 }}
                        ></motion.div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
