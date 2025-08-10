import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";

const teamMembers = [
  {
    name: "Ajith Kumar",
    role: "Founder & Full-Stack Developer",
    img: "/images/Ajith.jpg",
    bio: "Passionate about building scalable web apps and sleek UI experiences.",
  },
  {
    name: "Arun Krishna",
    role: "UI/UX Designer",
    img: "/images/Arun.jpg",
    bio: "Designs intuitive and beautiful interfaces with focus on usability.",
  },
  // Add more team members as needed
];

const AboutUs = () => {
  const navigate = useNavigate(); // ✅ must be inside component

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* Background Stars */}
      <StarBackground />

      {/* Fixed Topbar */}
      <Navbar />
      <ThemeToggle />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-36 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl w-full text-center shadow-lg"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20 transition duration-300 shadow-lg"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-white/80 text-lg mb-8">
            We are a passionate team at{" "}
            <span className="text-purple-400 font-semibold">ctrlA.labs</span>{" "}
            crafting cutting-edge web experiences. From sleek interfaces to
            robust backends, we bring ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full border-2 border-white/30 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-green-300">{member.role}</p>
                <p className="text-white/80 mt-2 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
