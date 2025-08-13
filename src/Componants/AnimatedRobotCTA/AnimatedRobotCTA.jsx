import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

const AnimatedRobotCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Animated Robot */}
      <motion.div
        className="relative cursor-pointer mb-8"
        onClick={scrollToContact}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ y: 0 }}
        animate={{
          y: isHovered ? [-5, 5, -5] : [0, -10, 0],
          rotate: isHovered ? [0, 5, -5, 0] : [0, 3, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Robot Body */}
        <div className="relative w-40 h-48 bg-gray-800 rounded-xl flex flex-col items-center p-4 z-10">
          {/* Robot Head */}
          <div className="w-24 h-24 bg-gray-700 rounded-full mb-2 flex justify-center items-center">
            {/* Eyes */}
            <div className="flex space-x-4">
              <motion.div
                className="w-6 h-6 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="w-6 h-6 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </div>

          {/* Robot Antenna */}
          <div className="absolute top-0 w-2 h-8 bg-gray-600 rounded-t-full" />
          <div className="absolute top-0 w-4 h-4 bg-red-500 rounded-full" />

          {/* Robot Body Details */}
          <div className="w-full h-16 bg-gray-900 rounded-lg flex justify-center items-center">
            <div className="text-white font-mono text-sm">AI BOT 3000</div>
          </div>
        </div>

        {/* Robot Arms */}
        <motion.div
          className="absolute top-16 -left-6 w-6 h-16 bg-gray-700 rounded-full"
          animate={{
            rotate: isHovered ? [0, 20, -20, 0] : [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-16 -right-6 w-6 h-16 bg-gray-700 rounded-full"
          animate={{
            rotate: isHovered ? [0, -20, 20, 0] : [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4"
      >
        <button
          className="px-8 py-4 bg-red-500 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 flex items-center"
          onClick={scrollToContact}
        >
          SkyRocket Growth <FiArrowRight className="ml-2" />
        </button>
      </motion.div>

      {/* Floating Tech Elements */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400 opacity-30"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {[
              "</>",
              "{ }",
              "AI",
              "1010",
              "automate()",
              "API",
              "bot();",
              "AI",
            ].map((tech, techIndex) => (i === techIndex ? tech : null))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedRobotCTA;
