import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

function WhatsAppPopup() {
  const [show, setShow] = useState(false);

  // Color variables from your theme
  const colors = {
    deepPurple: "#2b0d3a",
    deepPurpleLight: "#6a0dad",
    electricPurple: "#b94dff",
    neonViolet: "#c684ff",
    darkBlue: "#0a0a23",
    navy: "#1c1c3c",
    white: "#ffffff",
    offWhite: "#f5f5f5",
    softGray: "#a8a8a8",
    hotPink: "#ff4dd2",
    buttonGradientStart: "#6a0dad",
    buttonGradientEnd: "#ff00ff",
    glowEffect: "#d65df9",
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (show && !e.target.closest(".whatsapp-popup-container")) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]);

  return (
    <div className="fixed bottom-20  right-4 z-100">
      {/* Popup - positioned absolutely above the button */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="whatsapp-popup-container absolute bottom-full right-0 mb-4 w-72 sm:w-80 rounded-xl overflow-hidden border border-[#2b0d3a]"
            style={{
              background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.navy})`,
              boxShadow: `0 0 20px ${colors.glowEffect}`,
            }}
          >
            <div
              className="flex items-center justify-between p-4"
              style={{
                background: `linear-gradient(90deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
                borderBottom: `1px solid ${colors.neonViolet}`,
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-[#b94dff] opacity-20 blur-md"></div>
                  <div
                    className="relative w-10 h-10 flex items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colors.neonViolet}, ${colors.deepPurple})`,
                      boxShadow: `0 0 10px ${colors.glowEffect}`,
                    }}
                  >
                    <FaWhatsapp className="text-xl text-white" />
                  </div>
                </div>
                <div className="text-white">
                  <h4 className="font-semibold">AI Support</h4>
                  <p className="text-xs" style={{ color: colors.softGray }}>
                    Hi! How can we help?
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShow(false)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Close popup"
              >
                <RxCross2 className="text-xl" />
              </button>
            </div>

            <div className="p-4 text-center">
              <div className="flex justify-center mb-4">
                <motion.div
                  className="relative w-24 h-24"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#b94dff] opacity-20 blur-md"></div>
                  <div
                    className="relative w-24 h-24 flex items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colors.neonViolet}, ${colors.deepPurple})`,
                      boxShadow: `0 0 20px ${colors.glowEffect}`,
                    }}
                  >
                    <span className="text-white text-4xl">🤖</span>
                  </div>
                </motion.div>
              </div>

              <p className="text-sm mb-4" style={{ color: colors.softGray }}>
                Our AI assistant is ready to help you 24/7
              </p>
              <a
                href="https://wa.me/919595902006?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors w-full mb-3"
                style={{
                  background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                  color: colors.white,
                  boxShadow: `0 0 10px ${colors.glowEffect}`,
                }}
              >
                <FaWhatsapp className="mr-2" />
                Chat with AI Assistant
              </a>
              <a
                href="tel:+919595902006"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg transition-colors w-full"
                style={{
                  background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
                  color: colors.white,
                  boxShadow: `0 0 10px ${colors.deepPurple}`,
                }}
              >
                <Phone className="mr-2" size={18} />
                Connect with Team
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with AI animation */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShow(!show)}
          className="p-3 rounded-full shadow-lg transition-all relative"
          aria-label="WhatsApp support"
          style={{
            background: `linear-gradient(135deg, ${colors.electricPurple}, ${colors.neonViolet})`,
            boxShadow: `0 0 15px ${colors.glowEffect}`,
          }}
        >
          <div className="absolute top-2 right-2">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 rounded-full bg-[#b94dff] opacity-20 blur-sm"></div>
              <div
                className="relative w-6 h-6 flex items-center justify-center rounded-full"
                style={{
                  background: `radial-gradient(circle, ${colors.neonViolet}, ${colors.deepPurple})`,
                  boxShadow: `0 0 5px ${colors.glowEffect}`,
                }}
              >
                <span className="text-white text-xs">AI</span>
              </div>
            </div>
          </div>
          <FaWhatsapp className="text-3xl text-white" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default WhatsAppPopup;
