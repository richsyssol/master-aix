import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmailCapturePopup from "../Componants/PopUp/EmailCapturePopup";
import {
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiClock,
  FiLock,
  FiMessageSquare,
  FiShoppingCart,
  FiBarChart2,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  Button,
  Form,
  Input,
  Select,
  Modal,
  Radio,
  Card,
  Collapse,
} from "antd";
import AIRobotAnimation from "../Componants/AIRobotAnimation.jsx/AIRobotAnimation";
import ScrollToTop from "../Componants/ScrollToTop/ScrollToTop";

const { Panel } = Collapse;
const { Option } = Select;

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [leadsProcessed, setLeadsProcessed] = useState(17842);
  const [businessesAutomated, setBusinessesAutomated] = useState(3291);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 33,
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePlan, setActivePlan] = useState("standard");
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  // Counters animation
  useEffect(() => {
    const leadsInterval = setInterval(() => {
      setLeadsProcessed((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const businessesInterval = setInterval(() => {
      setBusinessesAutomated((prev) => prev + 1);
    }, 15000);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds < 0) {
          const newMinutes = prev.minutes - 1;
          if (newMinutes < 0) {
            return {
              hours: prev.hours - 1,
              minutes: 59,
              seconds: 59,
            };
          }
          return {
            ...prev,
            minutes: newMinutes,
            seconds: 59,
          };
        }
        return {
          ...prev,
          seconds: newSeconds,
        };
      });
    }, 1000);

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(leadsInterval);
      clearInterval(businessesInterval);
      clearInterval(timerInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  // Exit intent popup
  useEffect(() => {
    const handleMouseOut = (e) => {
      if (!e.relatedTarget && e.clientY < 10) {
        setShowPopup(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, []);

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    Modal.success({
      title: "Thank You!",
      content: "Your free lead recovery plan will be sent within 1 hour.",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const businessTypes = [
    "Real Estate",
    "Coaching",
    "E-commerce",
    "Education",
    "Healthcare",
    "Retail",
    "Hospitality",
    "Other",
  ];

  const leadStruggles = [
    "Follow-ups",
    "Lead Capture",
    "Lead Nurturing",
    "Conversion",
    "Organization",
    "Other",
  ];

  <div>
    {/* Your other content */}
    <button onClick={() => setShowPopup(true)}>Show Popup</button>

    {showPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <EmailCapturePopup onClose={() => setShowPopup(false)} />
      </div>
    )}
  </div>;

  const testimonials = [
    {
      quote: "We recovered ₹2.8L in lost leads last month!",
      name: "Rajesh",
      business: "EduTech Startup",
      video: "https://www.youtube.com/embed/example1",
    },
    {
      quote: "Our sales team productivity tripled instantly!",
      name: "Priya",
      business: "Real Estate Agency",
      video: "https://www.youtube.com/embed/example2",
    },
    {
      quote: "Now I get 50+ qualified leads daily without lifting a finger",
      name: "Arjun",
      business: "Coaching Business",
      video: "https://www.youtube.com/embed/example3",
    },
  ];

  const features = [
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: "AI Lead Capture",
      description:
        "Automatically grabs leads from your website, Facebook, Instagram & even walk-ins - before they go cold",
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: "Smart WhatsApp Automation",
      description:
        "Send personalized bulk messages that don't look spammy (Meta-approved templates)",
    },
    {
      icon: <FiShoppingCart className="text-3xl" />,
      title: "Sales-Ready Mini Stores",
      description:
        "Create a beautiful product catalog in 5 minutes - share via WhatsApp/Insta link",
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: "Killer Analytics",
      description:
        "See exactly which leads to call TODAY (and which to auto-nurture)",
    },
  ];

  const pricingPlans = {
    standard: {
      name: "Starter",
      price: "₹9,999",
      period: "/month",
      description:
        "Perfect for small businesses getting started with automation",
      features: [
        "Up to 1,000 leads/month",
        "WhatsApp Automation",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 Workflows",
        "10 Projects",
        "50 GB Storage",
        "Basic AI Features",
        "Standard Reports",
      ],
      cta: "Start Free Trial",
    },
    professional: {
      name: "Professional",
      price: "₹24,999",
      period: "/month",
      description: "For growing businesses needing more automation",
      features: [
        "Up to 5,000 leads/month",
        "WhatsApp + SMS Automation",
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Workflows",
        "50 Projects",
        "250 GB Storage",
        "Advanced AI Features",
        "Custom Reports",
        "API Access",
        "3rd Party Integrations",
      ],
      cta: "Get Started",
      popular: true,
    },
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large businesses with complex automation needs",
      features: [
        "Unlimited leads",
        "Omnichannel Automation",
        "Dedicated Account Manager",
        "24/7 Support",
        "Custom Workflows",
        "Unlimited Projects",
        "1TB+ Storage",
        "Premium AI Features",
        "White-labeling",
        "Single Sign-On",
        "Custom Development",
        "Onboarding Session",
      ],
      cta: "Contact Sales",
    },
  };

  const logos = [
    "Tata",
    "Reliance",
    "HDFC",
    "ICICI",
    "Byju's",
    "Unacademy",
    "Oyo",
    "Zomato",
    "Swiggy",
    "Flipkart",
    "Amazon",
    "Myntra",
  ];

  const faqs = [
    {
      question: "We already have a CRM?",
      answer:
        "MASTER.aiX SUPERCHARGES your existing tools with AI automation - we'll show you how!",
    },
    {
      question: "What if it doesn't work for us?",
      answer:
        "We'll work FREE for 30 extra days until you're thrilled - that's our ironclad promise",
    },
    {
      question: "How fast can we start?",
      answer: "Go live in 48 hours! Our team handles everything",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All plans come with a 14-day free trial with full feature access",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and PayPal",
    },
  ];

  // Updated color scheme based on the provided theme
  const colors = {
    // Primary Colors
    deepPurple: "#2b0d3a",
    deepPurpleLight: "#6a0dad",
    electricPurple: "#b94dff",
    neonViolet: "#c684ff",
    darkBlue: "#0a0a23",
    navy: "#1c1c3c",

    // Accent Colors
    white: "#ffffff",
    offWhite: "#f5f5f5",
    softGray: "#a8a8a8",
    hotPink: "#ff4dd2",

    // UI Elements
    buttonGradientStart: "#6a0dad",
    buttonGradientEnd: "#ff00ff",
    glowEffect: "#d65df9",

    // Text Colors
    primaryText: "#ffffff",
    secondaryText: "#bfbfbf",
  };

  // Hero section animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.darkBlue }}>
      {/* Navigation */}
      <nav
        className="bg-[#0a0a23] shadow-sm sticky top-0 z-40 border-b border-[#1c1c3c]"
        style={{
          background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.navy})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className="text-xl font-bold"
                style={{
                  color: colors.white,
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
              >
                MASTER.aiX
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition"
              >
                How It Works
              </a>

              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition"
              >
                Results
              </a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                    border: "none",
                    boxShadow: `0 0 10px ${colors.glowEffect}`,
                  }}
                  className="font-semibold"
                  onClick={() => {
                    const formSection = document.getElementById("contact");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get Free Audit <FiArrowRight className="inline ml-1" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#1c1c3c] overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#features"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                >
                  Results
                </a>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{
                    background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                    border: "none",
                    boxShadow: `0 0 10px ${colors.glowEffect}`,
                  }}
                  className="font-semibold mt-2"
                >
                  Get Free Audit <FiArrowRight className="inline ml-1" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Animation */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, #b94dff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${colors.neonViolet}, transparent)`,
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          {/* Centered Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-[5.5rem] md:text-2xl font-bold text-white mb-6"
              style={{ fontSize: "4rem" }}
            >
              YOUR 24/7 Marketing & SALES TEAM - Powered by AI
            </h2>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              variants={heroItemVariants}
              style={{
                textShadow: `
      0 0 10px ${colors.glowEffect},
      2px 2px 4px rgba(0, 0, 0, 0.8)
    `,
              }}
            >
              <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
                Struggling to Convert Leads?{" "}
              </span>
              <motion.span
                className="bg-clip-text text-transparent"
                style={{
                  background: `linear-gradient(90deg, ${colors.hotPink}, ${colors.neonViolet})`,
                  WebkitBackgroundClip: "text",
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Our AI Closes Deals While You Sleep!
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              variants={heroItemVariants}
            >
              MASTER.aiX captures, nurtures, and converts leads across WhatsApp,
              SMS & email - so you never lose another sale to follow-up fatigue
            </motion.p>
          </motion.div>

          {/* Content with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                variants={heroItemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                      border: "none",
                      boxShadow: `0 0 15px ${colors.glowEffect}`,
                    }}
                    className="font-semibold h-14 text-lg"
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Get Your FREE Lead Recovery Audit{" "}
                    <FiArrowRight className="inline ml-2" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    size="large"
                    className="h-14 text-lg flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-white border-opacity-30"
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <FiPlay className="mr-2" />
                    See How It Works
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4 items-center"
                variants={heroItemVariants}
              >
                <div className="flex items-center text-gray-300">
                  <FiCheck className="text-green-300 mr-1" />
                  <span className="text-sm">
                    Officially Meta-Approved WhatsApp API Partner
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCheck className="text-green-300 mr-1" />
                  <span className="text-sm">
                    Trusted by 1,000+ Indian Businesses
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="mt-4 p-3 rounded-lg inline-block"
                style={{
                  backgroundColor: "rgba(107, 33, 168, 0.3)",
                  backdropFilter: "blur(5px)",
                }}
                variants={heroItemVariants}
              >
                <span className="font-semibold text-white">
                  {leadsProcessed.toLocaleString()} leads processed this week
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.2 },
              }}
              className="relative"
            >
              <div
                className="rounded-2xl p-1 shadow-xl overflow-hidden"
                style={{
                  backgroundColor: colors.neonViolet,
                  boxShadow: `0 0 30px ${colors.glowEffect}`,
                }}
              >
                <div className="bg-white rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt="Dashboard preview"
                    className="w-full h-auto"
                  />
                  {/* Animated overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(45deg, transparent 48%, ${colors.glowEffect} 50%, transparent 52%)`,
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200"
                style={{
                  boxShadow: `0 0 15px ${colors.glowEffect}`,
                }}
              >
                <div className="flex items-center">
                  <div
                    className="p-2 rounded-full mr-3"
                    style={{
                      backgroundColor: `${colors.neonViolet}20`,
                      boxShadow: `0 0 10px ${colors.neonViolet}`,
                    }}
                  >
                    <FiMessageSquare style={{ color: colors.neonViolet }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: colors.darkBlue }}
                    >
                      New lead captured!
                    </p>
                    <p className="text-sm" style={{ color: colors.softGray }}>
                      Just now
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating AI robot animation */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-[#b94dff] opacity-20 blur-md"></div>
                  <div
                    className="relative w-24 h-24 flex items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colors.neonViolet}, ${colors.deepPurple})`,
                      boxShadow: `0 0 20px ${colors.glowEffect}`,
                    }}
                  >
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Common Button */}
          <div className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#ff0000", // Use backgroundColor instead of background
                  border: "none",
                  boxShadow: `0 0 10px rgba(255, 0, 0, 0.5)`,
                  transition: "background-color 0.3s ease", // Transition specifically for backgroundColor
                }}
                className="font-semibold hover:!bg-green-500" // Important modifier to override inline style
                onClick={() => {
                  const formSection = document.getElementById("contact");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Free Audit <FiArrowRight className="inline ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Pain Point Section */}
      <section className="py-16" style={{ backgroundColor: colors.darkBlue }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Did You Know{" "}
              <span
                style={{
                  color: colors.neonViolet,
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
              >
                80% of Leads Go Cold Within 72 Hours?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#1c1c3c] p-6 rounded-xl shadow-sm border border-[#2b0d3a]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{
                    backgroundColor: `${colors.hotPink}20`,
                    boxShadow: `0 0 10px ${colors.hotPink}40`,
                  }}
                >
                  <FiX className="text-xl" style={{ color: colors.hotPink }} />
                </div>
                <p className="font-medium text-gray-300">
                  Leads forget about you after one WhatsApp message
                </p>
              </div>

              <div className="bg-[#1c1c3c] p-6 rounded-xl shadow-sm border border-[#2b0d3a]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{
                    backgroundColor: `${colors.neonViolet}20`,
                    boxShadow: `0 0 10px ${colors.neonViolet}40`,
                  }}
                >
                  <FiClock
                    className="text-xl"
                    style={{ color: colors.neonViolet }}
                  />
                </div>
                <p className="font-medium text-gray-300">
                  Your sales team can't manually follow up fast enough
                </p>
              </div>

              <div className="bg-[#1c1c3c] p-6 rounded-xl shadow-sm border border-[#2b0d3a]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{
                    backgroundColor: `${colors.electricPurple}20`,
                    boxShadow: `0 0 10px ${colors.electricPurple}40`,
                  }}
                >
                  <FiBarChart2
                    className="text-xl"
                    style={{ color: colors.electricPurple }}
                  />
                </div>
                <p className="font-medium text-gray-300">
                  No system to track which leads are sales-ready
                </p>
              </div>
            </div>

            <div className="mt-12 bg-[#1c1c3c] p-6 rounded-xl shadow-sm border border-[#2b0d3a] max-w-2xl mx-auto">
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  color: colors.neonViolet,
                  textShadow: `0 0 5px ${colors.glowEffect}`,
                }}
              >
                What if you could...
              </h3>

              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <FiCheck
                    className="mt-1 mr-2 flex-shrink-0"
                    style={{ color: colors.neonViolet }}
                  />
                  <p className="text-gray-300">
                    <span className="font-medium">Auto-respond</span> to every
                    lead within 12 seconds
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheck
                    className="mt-1 mr-2 flex-shrink-0"
                    style={{ color: colors.neonViolet }}
                  />
                  <p className="text-gray-300">
                    <span className="font-medium">Nurture</span> 500+ prospects
                    simultaneously
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheck
                    className="mt-1 mr-2 flex-shrink-0"
                    style={{ color: colors.neonViolet }}
                  />
                  <p className="text-gray-300">
                    <span className="font-medium">Close</span> deals without
                    constant sales calls
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6"
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                    border: "none",
                    boxShadow: `0 0 15px ${colors.glowEffect}`,
                  }}
                  className="font-semibold"
                  onClick={() => {
                    const formSection = document.getElementById("contact");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Show Me How <FiArrowRight className="inline ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              How{" "}
              <span
                style={{
                  color: colors.neonViolet,
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
              >
                MASTER.aiX
              </span>{" "}
              Works (While You Focus on Growth)
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Our AI handles the heavy lifting so you can focus on what matters
              most - growing your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-[#2b0d3a]"
                style={{
                  backgroundColor: colors.darkBlue,
                  boxShadow: `0 5px 15px rgba(0,0,0,0.3)`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${colors.neonViolet}20`,
                    boxShadow: `0 0 10px ${colors.neonViolet}40`,
                  }}
                >
                  {React.cloneElement(feature.icon, {
                    style: { color: colors.neonViolet },
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Slider */}
          <div
            className="mt-16 rounded-2xl p-8 border border-[#2b0d3a]"
            style={{
              backgroundColor: colors.darkBlue,
              boxShadow: `0 0 30px ${colors.deepPurple}`,
            }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <iframe
                      src={testimonials[activeTestimonial].video}
                      title="Testimonial video"
                      className="w-full h-64 rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-xl font-medium italic mb-4 text-white">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <p
                    className="font-semibold"
                    style={{
                      color: colors.neonViolet,
                      textShadow: `0 0 5px ${colors.glowEffect}`,
                    }}
                  >
                    {testimonials[activeTestimonial].name},{" "}
                    {testimonials[activeTestimonial].business}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeTestimonial === index
                        ? "bg-[#b94dff]"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Why{" "}
              <span
                style={{
                  color: colors.neonViolet,
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
              >
                1,000+ Businesses
              </span>{" "}
              Chose MASTER.aiX
            </h2>
          </motion.div>

          {/* Logo Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-center mb-8 text-gray-400">
              Trusted by market leaders across India:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-[#1c1c3c] p-4 rounded-lg shadow-sm border border-[#2b0d3a] flex items-center justify-center h-20"
                >
                  <span className="font-medium text-white">{logo}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Live Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl p-6 text-center border border-[#2b0d3a]"
            style={{
              background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
              boxShadow: `0 0 30px ${colors.deepPurple}`,
            }}
          >
            <p className="text-xl mb-4 text-white">
              <span className="font-bold">
                {businessesAutomated.toLocaleString()}
              </span>{" "}
              businesses automated last month
            </p>
            <p className="text-lg text-gray-300">
              Next onboarding slot opens in:
              <span className="font-bold ml-2 text-white">
                {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="contact"
        className="py-16"
        style={{ backgroundColor: colors.darkBlue }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-sm overflow-hidden border border-[#2b0d3a]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="p-8 md:p-12"
                style={{
                  background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
                  color: "white",
                }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  Get Your Personalized Automation Plan
                </h2>
                <p className="mb-6 text-gray-300">
                  Discover how many leads you're losing - FREE audit reveals:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div
                      className="rounded-full p-1 mr-3 mt-1"
                      style={{
                        backgroundColor: `${colors.neonViolet}20`,
                        boxShadow: `0 0 5px ${colors.neonViolet}`,
                      }}
                    >
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Where leads are slipping through
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="rounded-full p-1 mr-3 mt-1"
                      style={{
                        backgroundColor: `${colors.neonViolet}20`,
                        boxShadow: `0 0 5px ${colors.neonViolet}`,
                      }}
                    >
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Your estimated revenue recovery potential
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="rounded-full p-1 mr-3 mt-1"
                      style={{
                        backgroundColor: `${colors.neonViolet}20`,
                        boxShadow: `0 0 5px ${colors.neonViolet}`,
                      }}
                    >
                      <FiCheck className="text-white text-sm" />
                    </div>
                    <span className="text-gray-300">
                      Custom automation strategy
                    </span>
                  </li>
                </ul>

                <div
                  className="mt-8 p-4 rounded-lg"
                  style={{
                    backgroundColor: `${colors.neonViolet}20`,
                    backdropFilter: "blur(5px)",
                    border: `1px solid ${colors.neonViolet}`,
                  }}
                >
                  <p className="text-sm text-white">
                    <span className="font-semibold">⚠ Final Warning:</span> Last
                    3 Implementation Slots Available This Week
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-[#1c1c3c]">
                <Form
                  name="inquiry"
                  onFinish={onFinish}
                  layout="vertical"
                  requiredMark={false}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Your Name"
                      className="bg-[#0a0a23] border-[#2b0d3a] text-white"
                    />
                  </Form.Item>

                  <Form.Item
                    name="businessType"
                    rules={[
                      {
                        required: true,
                        message: "Please select your business type",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      placeholder="Business Type"
                      className="bg-[#0a0a23] border-[#2b0d3a] text-white"
                    >
                      {businessTypes.map((type, index) => (
                        <Option key={index} value={type}>
                          {type}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="leadStruggle"
                    rules={[
                      {
                        required: true,
                        message: "Please select your biggest struggle",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      placeholder="Biggest Lead Generation Struggle?"
                      className="bg-[#0a0a23] border-[#2b0d3a] text-white"
                    >
                      {leadStruggles.map((struggle, index) => (
                        <Option key={index} value={struggle}>
                          {struggle}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="whatsappNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your WhatsApp number",
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: "Please enter a valid number",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="WhatsApp Number"
                      prefix={<FaWhatsapp className="text-gray-400" />}
                      className="bg-[#0a0a23] border-[#2b0d3a] text-white"
                    />
                  </Form.Item>

                  <Form.Item>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        style={{
                          background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                          border: "none",
                          boxShadow: `0 0 15px ${colors.glowEffect}`,
                        }}
                        className="font-semibold h-12"
                      >
                        Get My FREE Lead Recovery Plan{" "}
                        <FiArrowRight className="inline ml-2" />
                      </Button>
                    </motion.div>
                  </Form.Item>
                </Form>

                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <FiLock className="mr-2" />
                  <span>Your data is 100% secure - We hate spam too</span>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-400">
                  <FiClock className="mr-2" />
                  <span>You'll get a custom report within 1 hour</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: colors.navy }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Collapse
            accordion
            bordered={false}
            className="bg-[#1c1c3c]"
            expandIconPosition="right"
          >
            {faqs.map((faq, index) => (
              <Panel
                header={
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>
                }
                key={index}
                className="text-lg border-b border-[#2b0d3a]"
              >
                <p className="text-gray-400">{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12"
        style={{ backgroundColor: colors.darkBlue, color: "white" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MASTER.aiX</h3>
              <p className="text-gray-400">
                Your 24/7 AI sales machine that never sleeps
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2b0d3a] mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MASTER.aiX. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#1c1c3c] rounded-xl p-6 max-w-md w-full relative border border-[#2b0d3a]"
              style={{ boxShadow: `0 0 30px ${colors.deepPurple}` }}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <FiX className="text-xl" />
              </button>

              <h3 className="text-xl font-bold mb-4 text-white">
                Wait! Get Our FREE Guide
              </h3>
              <p className="mb-6 text-gray-400">
                "5 Automation Hacks to Double Your Leads"
              </p>

              <Form>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Your Email Address"
                    className="bg-[#0a0a23] border-[#2b0d3a] text-white"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  style={{
                    background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                    border: "none",
                    boxShadow: `0 0 15px ${colors.glowEffect}`,
                  }}
                  className="font-semibold"
                >
                  Send Me the Guide <FiArrowRight className="inline ml-2" />
                </Button>
              </Form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
