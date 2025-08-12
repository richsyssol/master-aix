import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const AIRobotAnimation = ({ isTalking = false, isProcessing = false }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentAction, setCurrentAction] = useState("idle");

  // Robot parts variants
  const robotVariants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      y: [-10, -15, -10],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    talk: {
      y: [-5, -10, -5],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    process: {
      y: [-3, -8, -3],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const eyeVariants = {
    idle: {
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    talk: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
      },
    },
    process: {
      scale: [1, 0.9, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const antennaVariants = {
    idle: {
      y: [0, -3, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      y: [-5, -8, -5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    talk: {
      y: [-3, -6, -3],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    process: {
      y: [-3, -6, -3],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Handle action changes
  useEffect(() => {
    if (isProcessing) {
      setCurrentAction("process");
      controls.start("process");
    } else if (isTalking) {
      setCurrentAction("talk");
      controls.start("talk");
    } else if (isHovered) {
      setCurrentAction("hover");
      controls.start("hover");
    } else {
      setCurrentAction("idle");
      controls.start("idle");
    }
  }, [isHovered, isTalking, isProcessing, controls]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={controls}
        variants={robotVariants}
        initial="idle"
      >
        {/* Antenna */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          variants={antennaVariants}
        >
          <div className="w-2 h-8 bg-indigo-400 rounded-t-full mx-auto" />
          <div className="w-4 h-4 bg-indigo-500 rounded-full mx-auto -mt-1" />
        </motion.div>

        {/* Head */}
        <div className="w-24 h-24 bg-indigo-100 rounded-2xl shadow-md relative overflow-hidden">
          {/* Eyes */}
          <div className="flex justify-center space-x-4 pt-6">
            <motion.div
              className="w-4 h-4 bg-indigo-700 rounded-full"
              variants={eyeVariants}
            />
            <motion.div
              className="w-4 h-4 bg-indigo-700 rounded-full"
              variants={eyeVariants}
            />
          </div>

          {/* Mouth */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <AnimatePresence mode="wait">
              {currentAction === "idle" && (
                <motion.div
                  initial={{ width: 16 }}
                  animate={{ width: 24 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-2 bg-indigo-400 rounded-full mx-auto"
                />
              )}
              {currentAction === "hover" && (
                <motion.div
                  initial={{ width: 20 }}
                  animate={{ width: 28 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-2 bg-indigo-500 rounded-full mx-auto"
                />
              )}
              {currentAction === "talk" && (
                <motion.div
                  initial={{ height: 2, width: 24 }}
                  animate={{ height: [2, 6, 2], width: [24, 20, 24] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="bg-indigo-600 rounded-full mx-auto"
                />
              )}
              {currentAction === "process" && (
                <motion.div
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: [1, 0.5, 1, 0.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-24 h-2 bg-indigo-400 origin-center"
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Body */}
        <div className="w-32 h-32 bg-indigo-50 rounded-2xl shadow-md -mt-2 relative">
          {/* Screen */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-indigo-100 rounded-lg overflow-hidden">
            <AnimatePresence>
              {currentAction === "process" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="grid grid-cols-3 gap-1 w-12 h-12">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-indigo-400 rounded-sm"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.9, 1.1, 0.9],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              {currentAction === "talk" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-indigo-700 text-xs font-mono text-center px-1">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Hello!
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    >
                      How can I help?
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {(currentAction === "idle" || currentAction === "hover") && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-indigo-500 text-xs font-mono">
                    MASTER.aiX
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Arms */}
          <div className="absolute top-8 -left-4 w-4 h-16 bg-indigo-200 rounded-full origin-top">
            <motion.div
              animate={{
                rotate:
                  currentAction === "idle"
                    ? [0, 5, -5, 0]
                    : currentAction === "hover"
                    ? [0, 10, -10, 0]
                    : currentAction === "talk"
                    ? [0, 15, -15, 0]
                    : [0, 20, -20, 0],
              }}
              transition={{
                duration: currentAction === "process" ? 0.8 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-indigo-200 rounded-full"
            />
          </div>
          <div className="absolute top-8 -right-4 w-4 h-16 bg-indigo-200 rounded-full origin-top">
            <motion.div
              animate={{
                rotate:
                  currentAction === "idle"
                    ? [0, -5, 5, 0]
                    : currentAction === "hover"
                    ? [0, -10, 10, 0]
                    : currentAction === "talk"
                    ? [0, -15, 15, 0]
                    : [0, -20, 20, 0],
              }}
              transition={{
                duration: currentAction === "process" ? 0.8 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-indigo-200 rounded-full"
            />
          </div>
        </div>

        {/* Base */}
        <div className="w-40 h-6 bg-indigo-300 rounded-b-full mx-auto -mt-1" />
      </motion.div>

      {/* Interactive elements can be added here */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
        >
          Hi there! 👋
        </motion.div>
      )}
    </div>
  );
};

export default AIRobotAnimation;
