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
  FiLayers,
  FiCalendar,
  FiUsers,
  FiSend,
  FiDollarSign,
  FiSmartphone,
  FiSettings,
  FiTarget,
  FiTrendingUp,
  FiZap,
  FiHelpCircle,
  FiPackage,
  FiAlertTriangle,
  FiCreditCard,
  FiMapPin,
  FiCoffee,
  FiAlertOctagon,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaRocket,
  FaChartLine,
  FaClock,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaRegSmileWink,
  FaCheckSquare,
  FaBolt,
  FaFilter,
  FaUserFriends,
  FaCheck,
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
import {
  HeroImg,
  logo1,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
} from "../assets";

const { Panel } = Collapse;
const { Option } = Select;

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [leadsProcessed, setLeadsProcessed] = useState(17842);
  const [businessesAutomated, setBusinessesAutomated] = useState(1000);
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

  // form
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const colors = {
  //   darkBlue: "#0a0a2a",
  //   deepPurple: "#2b0d3a",
  //   deepPurpleLight: "#3d1b4d",
  //   neonViolet: "#9d4edd",
  // };

  // Handle iframe form submission
  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the message is from your form domain
      if (
        event.origin === "https://admin.masteraix.io" &&
        event.data === "formSubmitted"
      ) {
        setIsSubmitted(true);
        document
          .getElementById("thank-you-message")
          .scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
      icon: <FiMessageSquare className="text-3xl text-indigo-600" />,
      title: "AI Lead Capture",
      description:
        "Automatically grabs leads from your website, Facebook, Instagram & even walk-ins - before they go cold",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-600" />,
      title: "Smart WhatsApp Automation",
      description:
        "Send personalized bulk messages that don't look spammy (Meta-approved templates)",
    },
    {
      icon: <FiShoppingCart className="text-3xl text-blue-600" />,
      title: "Sales-Ready Mini Stores",
      description:
        "Create a beautiful product catalog in 5 minutes - share via WhatsApp/Insta link",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-purple-600" />,
      title: "Killer Analytics",
      description:
        "See exactly which leads to call TODAY (and which to auto-nurture)",
    },
    {
      icon: <FiShoppingCart className="text-3xl text-red-600" />,
      title: "Shop Builder",
      description:
        "Create beautiful online stores with our drag-and-drop Shop Builder. No coding required - launch your ecommerce business in minutes.",
    },
    {
      icon: <FiLayers className="text-3xl text-amber-600" />,
      title: "Form Builder",
      description:
        "Create powerful forms, surveys, and questionnaires with our intuitive Form Builder. Collect data effortlessly.",
    },
    {
      icon: <FiLayers className="text-3xl text-emerald-600" />,
      title: "Landing Page Builder",
      description:
        "Create high-converting landing pages without coding. Drag, drop, and publish in minutes.",
    },
    {
      icon: <FiCalendar className="text-3xl text-pink-600" />,
      title: "Calendar Booking",
      description:
        "Let clients book appointments 24/7 with your automated scheduling system.",
    },
    {
      icon: <FiUsers className="text-3xl text-cyan-600" />,
      title: "CRM System",
      description:
        "Manage customer relationships effectively with our all-in-one CRM platform.",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
      title: "WhatsApp Sender",
      description:
        "Send bulk WhatsApp messages with our powerful messaging platform.",
    },
    {
      icon: <FaFacebook className="text-3xl text-blue-500" />,
      title: "Ad Launcher",
      description:
        "Create, manage, and optimize ads across multiple platforms from one dashboard.",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-400" />,
      title: "WhatsApp Cloud API",
      description:
        "Integrate WhatsApp messaging directly into your business applications.",
    },
    {
      icon: <FiSettings className="text-3xl text-gray-600" />,
      title: "Automation Workflow",
      description:
        "Automate repetitive tasks and business processes with our visual workflow builder.",
    },
    {
      icon: <FiDollarSign className="text-3xl text-yellow-600" />,
      title: "Sales & Finance",
      description:
        "Complete sales tracking and financial management in one platform.",
    },
    {
      icon: <FiSmartphone className="text-3xl text-teal-600" />,
      title: "SMS Automation",
      description: "Automate SMS communications with customers at scale.",
    },
  ];

  // winsdata
  const winsData = [
    {
      icon: <FaRocket className="text-2xl" />,
      text: "One client doubled lead response rates within 3 weeks",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-600",
      textColor: "text-blue-900",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      text: "Boosted conversions by 30% through automated follow-ups",
      bgColor: "bg-green-50",
      iconBg: "bg-green-600",
      textColor: "text-green-900",
    },
    {
      icon: <FiTarget className="text-2xl" />,
      text: "Cut DNPs by 42% with smart call nudges",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-600",
      textColor: "text-amber-900",
    },
    {
      icon: <FaClock className="text-2xl" />,
      text: "Saved 15+ hours/week by automating lead engagement",
      bgColor: "bg-red-50",
      iconBg: "bg-red-600",
      textColor: "text-red-900",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      text: "Increased customer retention by 25% with timely messaging",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-600",
      textColor: "text-purple-900",
    },
    {
      icon: <FaUserCheck className="text-2xl" />,
      text: "Improved lead qualification accuracy by 35%",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-600",
      textColor: "text-teal-900",
    },
  ];

  const logos = [
    { type: "image", src: logo1, alt: "Tata" },
    { type: "image", src: logo2, alt: "Demo" },
    { type: "image", src: logo3, alt: "" },
    { type: "image", src: logo4, alt: "" },
    { type: "image", src: logo5, alt: "" },
    { type: "image", src: logo6, alt: "" },
    { type: "image", src: logo7, alt: "" },
    { type: "image", src: logo8, alt: "" },
    { type: "image", src: logo9, alt: "" },
    { type: "image", src: logo10, alt: "" },
    { type: "image", src: logo11, alt: "" },
    { type: "image", src: logo12, alt: "" },
    { type: "image", src: logo13, alt: "" },
    { type: "image", src: logo14, alt: "" },
    { type: "image", src: logo15, alt: "" },
  ];
  const faqs = [
    {
      question: "We already have a CRM?",
      answer:
        "MASTERaiX SUPERCHARGES your existing tools with AI automation - we'll show you how!",
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
      answer: "Yes, at the cost of a good coffee.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and PayPal",
    },
    {
      question: "Who is this for?",
      answer:
        "This is for anyone who wants to acquire more customers on the internet with REVERSE FUNNELS. Coaches, consultants, agency owners, artists, professional service providers, influencers, and content creators.",
    },
    {
      question: "How is this different from other products?",
      answer:
        "It works. We have a proven track record of utilizing this for ourselves and our private clients. You don’t need to be an expert to implement these strategies.",
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

  //Industries section
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: "Real Estate",
      icon: "🏠",
      steps: [
        "Capture property inquiries from website/ads",
        "Auto WhatsApp follow-up",
        "Site visit booking",
      ],
      bg: "from-[#2b0d3a] to-[#1c1c3c]",
    },
    {
      name: "Tours & Travels",
      icon: "✈️",
      steps: [
        "Enquiry from travel ad",
        "Automated brochure via WhatsApp",
        "Payment & itinerary flow",
      ],
      bg: "from-[#1c1c3c] to-[#0a0a23]",
    },
    {
      name: "Coaching Institute",
      icon: "🎓",
      steps: [
        "Lead from seminar form",
        "Auto send course details",
        "LMS access + demo booking",
      ],
      bg: "from-[#2b0d3a] to-[#6a0dad]",
    },
    {
      name: "Wellness & Fitness",
      icon: "💪",
      steps: [
        "Gym enquiry via ad",
        "Auto send packages",
        "Calendar booking for visit",
      ],
      bg: "from-[#1c1c3c] to-[#b94dff]",
    },
    {
      name: "Automobile Sales",
      icon: "🚗",
      steps: [
        "Brochure + Test drive booking",
        "Finance option auto-replies",
        "Final deal flow",
      ],
      bg: "from-[#6a0dad] to-[#ff00ff]",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      steps: [
        "B2B lead from trade portal",
        "Product catalog on WhatsApp",
        "Sales rep follow-up",
      ],
      bg: "from-[#2b0d3a] to-[#1c1c3c]",
    },
    {
      name: "Consultants",
      icon: "📊",
      steps: [
        "Lead fills form",
        "Auto send portfolio & case studies",
        "Booking link for 1-on-1 call",
      ],
      bg: "from-[#1c1c3c] to-[#0a0a23]",
    },
    {
      name: "Service Providers",
      icon: "🔧",
      steps: [
        "Form fill for AC repair",
        "WhatsApp quote",
        "Technician assignment & updates",
      ],
      bg: "from-[#2b0d3a] to-[#6a0dad]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Comparison section

  const smartWayFeatures = [
    {
      title: "Lead Capture",
      description:
        "Auto-sync leads from WA/ads/website → tagged in CRM. Zero leaks with 24/7 AI chatbots.",
    },
    {
      title: "Follow-Ups",
      description:
        'Personalized drip campaigns (e.g., "Hey [Name], saw you checked out [Product]!"). 4x more replies with AI-timed messages.',
    },
    {
      title: "Scaling",
      description:
        "1-person team manages 10,000+ leads. Ad budgets cut by 50% (targets hot leads only).",
    },
    {
      title: "Closing Sales",
      description:
        "Auto-send brochures/contracts after interest detected. 20%+ conversion rate with LMS/calendar integrations.",
    },
  ];

  const oldWayFeatures = [
    {
      title: "Lead Capture",
      description:
        "Scattered leads across WhatsApp, DMs, emails—no central tracking. 80% lost due to missed follow-ups.",
    },
    {
      title: "Follow-Ups",
      description:
        "Copy-pasting the same messages like a robot. Clients feel spammed → block/ignore you.",
    },
    {
      title: "Scaling",
      description:
        "Hiring cheap VA teams = errors & delays. $10,000+/month wasted on ads with no CRM sync.",
    },
    {
      title: "Closing Sales",
      description:
        'Begging for replies with "Hi, interested?" texts. 3% conversion rate (industry average).',
    },
  ];

  // Comparison section Featurescard
  const FeatureCard = ({ title, description, isSmartWay, index }) => {
    return (
      <motion.div
        // initial={{ opacity: 0, y: 0 }}
        // animate={{ opacity: 1, y: 1 }}
        // transition={{ duration: 0 }}
        className={`p-6 rounded-xl ${
          isSmartWay
            ? "bg-gradient-to-br from-[#2b0d3a] to-[#1c1c3c] border border-[#b94dff]"
            : "bg-[#0a0a23] border border-[#a8a8a8]"
        } shadow-lg`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`p-1 rounded-full ${
              isSmartWay ? "bg-[#6a0dad]" : "bg-[#a8a8a8]"
            }`}
          >
            {isSmartWay ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div>
            <h3
              className={`text-lg font-bold ${
                isSmartWay ? "text-[#c684ff]" : "text-[#a8a8a8]"
              }`}
            >
              {title}
            </h3>
            <p className="text-[#bfbfbf] mt-1">{description}</p>
          </div>
        </div>
      </motion.div>
    );
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

  // AI Automation Flow
  const flows = [
    {
      icon: <FiZap className="text-white text-xl" />,
      title: "Instant Lead Response",
      description:
        "Customer messages 'Interested in Product X' → AI replies in 5 secs with pricing/brochure.",
      hook: "NLP detects intent → auto-sends relevant info",
    },
    {
      icon: <FiShoppingCart className="text-white text-xl" />,
      title: "Abandoned Cart Recovery",
      description:
        "User leaves cart → AI WhatsApp message: 'Complete your order! Here's 10% off 🎁' + checkout link.",
      hook: "Behavioral trigger → personalized incentive",
    },
    {
      icon: <FiHelpCircle className="text-white text-xl" />,
      title: "24/7 FAQ Bot",
      description:
        "Customer asks 'Return policy?' → AI fetches answer → sends policy doc + return form.",
      hook: "Knowledge base integration → instant resolution",
    },
    {
      icon: <FiCalendar className="text-white text-xl" />,
      title: "Appointment Booking",
      description:
        "Patient types 'Book dentist slot' → AI shows calendar → confirms via WhatsApp.",
      hook: "Calendar sync → automated scheduling",
    },
    {
      icon: <FiPackage className="text-white text-xl" />,
      title: "Order Tracking",
      description:
        "Customer asks 'Where's my order?' → AI pulls logistics data → shares live tracking link.",
      hook: "API integration → real-time updates",
    },
    {
      icon: <FiAlertTriangle className="text-white text-xl" />,
      title: "Flash Sale Alerts",
      description:
        "AI segments contacts → blasts 'VIP Sneaker Drop LIVE! Shop now 👟' with limited link.",
      hook: "Audience segmentation → timed campaigns",
    },
    {
      icon: <FiDollarSign className="text-white text-xl" />,
      title: "Payment Reminders",
      description:
        "Invoice due → AI sends WhatsApp payment link → 'Clear dues in 1 tap 💰'.",
      hook: "Payment system integration → automated collections",
    },
    {
      icon: <FiMessageSquare className="text-white text-xl" />,
      title: "Feedback Collection",
      description:
        "Post-purchase → AI asks for rating → auto-forwards complaints to support.",
      hook: "Sentiment analysis → smart routing",
    },
    {
      icon: <FiTrendingUp className="text-white text-xl" />,
      title: "Upsell/Cross-Sell",
      description:
        "Buys laptop → AI suggests: 'Add warranty? 20% off today!' → payment link.",
      hook: "Purchase history → personalized offers",
    },
    {
      icon: <FiUsers className="text-white text-xl" />,
      title: "Event RSVP",
      description:
        "'Join our webinar!' → AI registers replies → sends Zoom link 1hr before.",
      hook: "Event management → automated follow-ups",
    },
    {
      icon: <FiCreditCard className="text-white text-xl" />,
      title: "Membership Renewal",
      description:
        "Gym membership expires → AI texts: 'Renew now—free PT session! 🏋' + payment button.",
      hook: "Subscription tracking → retention offers",
    },

    {
      icon: <FiCoffee className="text-white text-xl" />,
      title: "Group Order Coordination",
      description:
        "Office orders food → AI collects votes → confirms order via WhatsApp group.",
      hook: "Collaborative decision → bulk ordering",
    },
  ];

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
                MASTERaiX
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
                href="#automation"
                className="text-gray-300 hover:text-white transition"
              >
                How It Works
              </a>

              <a
                href="#result"
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
                  Grow My Business <FiArrowRight className="inline ml-1" />
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#automation"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#result"
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
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
                  onClick={() => {
                    setIsMenuOpen(false);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start", // aligns top of element with top of visible area
                      });
                    } else {
                      // Fallback to navigation if section not found
                      navigate("/contact");
                    }
                  }}
                >
                  SkyRocket My Business <FiArrowRight className="inline ml-1" />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 text-center md:text-left">
          {/* Header Section - Full Width */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              YOUR{" "}
              <span className="text-red-500 hover:text-green-500 transition-colors duration-300">
                24/7 MARKETING & SALES
              </span>{" "}
              <span className="text-white">TEAM</span> - Powered by AI
            </h2>
          </motion.div>

          {/* Two Column Layout - Stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Column - Text Content */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center md:text-left leading-tight"
                variants={heroItemVariants}
              >
                <span
                  className="block"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  Struggling to Convert Leads?
                </span>
                <motion.span
                  className="block bg-clip-text text-transparent"
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
                className="text-lg md:text-xl text-gray-300 mb-8 text-center md:text-left max-w-md md:max-w-none"
                variants={heroItemVariants}
              >
                MASTERaiX captures, nurtures, and converts leads across
                WhatsApp, SMS & email - so you never lose another sale to
                follow-up fatigue
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center md:justify-start"
                variants={heroItemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
                      border: "none",
                      boxShadow: `0 0 15px ${colors.glowEffect}`,
                    }}
                    className="font-semibold h-12 md:h-14 text-base md:text-lg w-full"
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Get Your FREE Lead Recovery Audit
                    <FiArrowRight className="inline ml-1 md:ml-2" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="large"
                    className="h-12 md:h-14 text-base md:text-lg flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-white border-opacity-30 w-full"
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
                className="flex flex-col gap-3 mb-8 items-center md:items-start w-full"
                variants={heroItemVariants}
              >
                <div className="flex items-center text-gray-300">
                  <FiCheck className="text-green-300 mr-2 text-xl" />
                  <span>Officially Meta-Approved WhatsApp API Partner</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCheck className="text-green-300 mr-2 text-xl" />
                  <span>Trusted by 1,000+ Indian Businesses</span>
                </div>
              </motion.div>

              <motion.div
                className="p-3 rounded-lg text-center md:text-left"
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

            {/* Right Column - Image with Notification and CTA */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                }}
                className="relative"
              >
                <div
                  className="rounded-2xl p-1 shadow-xl overflow-hidden mx-auto max-w-md md:max-w-none"
                  style={{
                    backgroundColor: colors.neonViolet,
                    boxShadow: `0 0 30px ${colors.glowEffect}`,
                  }}
                >
                  <div className="bg-white rounded-xl overflow-hidden relative">
                    <img
                      src={HeroImg}
                      alt="Dashboard preview"
                      className="w-full h-auto"
                    />
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
                  className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-200"
                  style={{
                    boxShadow: `0 0 15px ${colors.glowEffect}`,
                  }}
                >
                  <div className="flex items-center">
                    <div
                      className="p-2 rounded-full mr-2 md:mr-3"
                      style={{
                        backgroundColor: `${colors.neonViolet}20`,
                        boxShadow: `0 0 10px ${colors.neonViolet}`,
                      }}
                    >
                      <FiMessageSquare
                        className="text-sm md:text-base"
                        style={{ color: colors.neonViolet }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm md:text-base"
                        style={{ color: colors.darkBlue }}
                      >
                        New lead captured!
                      </p>
                      <p
                        className="text-xs md:text-sm"
                        style={{ color: colors.softGray }}
                      >
                        Just now
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button Below Image */}
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-md"
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#ff0000",
                      border: "none",
                      boxShadow: `0 0 10px rgba(255, 0, 0, 0.5)`,
                      transition: "background-color 0.3s ease",
                    }}
                    className="font-semibold hover:!bg-green-500 w-full"
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    SkyRocket My Business
                    <FiArrowRight className="inline ml-1" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
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
                <div className="flex items-start">
                  <FiCheck
                    className="mt-1 mr-2 flex-shrink-0"
                    style={{ color: colors.neonViolet }}
                  />
                  <p className="text-gray-300">
                    <span className="font-medium">Call only hot </span>
                    customer that too (If you wish)
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
                SkyRocket My Business <FiArrowRight className="inline ml-1" />
              </Button>
            </motion.div>
          </div>
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
                MASTERaiX
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
                SkyRocket My Business <FiArrowRight className="inline ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IndustriesUse Cases */}

      <section
        id="automation"
        className=" py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a23]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              <span className="text-[#b94dff]">Automation</span> For All
              Industries
            </h2>
            <p className="text-[#bfbfbf] max-w-2xl mx-auto text-sm md:text-base">
              Customized workflows that match your specific business needs
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            {/* Industry Selector - 2 columns on mobile */}
            <div className="lg:w-1/4">
              <div className="bg-[#1c1c3c] rounded-xl p-2 border border-[#6a0dad]">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  {industries.map((industry, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveIndustry(index)}
                      className={`w-full text-left p-3 md:p-4 rounded-lg transition-all ${
                        activeIndustry === index
                          ? "bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] text-white"
                          : "bg-[#0a0a23] text-[#bfbfbf] hover:bg-[#2b0d3a]"
                      }`}
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-xl md:text-2xl">
                          {industry.icon}
                        </span>
                        <span className="font-medium text-sm md:text-base">
                          {industry.name}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Workflow Display */}
            <div className="lg:w-3/4">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${industries[activeIndustry].bg} rounded-xl p-4 md:p-8 border-2 border-[#6a0dad] shadow-lg h-full`}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl md:text-5xl"
                  >
                    {industries[activeIndustry].icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {industries[activeIndustry].name} Workflow
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {industries[activeIndustry].steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 md:gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#6a0dad] to-[#ff00ff] flex items-center justify-center">
                          <span className="text-xs md:text-sm font-bold text-white">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-sm md:text-base">
                          {step}
                        </p>
                        {index <
                          industries[activeIndustry].steps.length - 1 && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 20 }}
                            transition={{ delay: 0.3 }}
                            className="w-0.5 bg-[#b94dff] ml-3 my-1"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#6a0dad]"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(214, 93, 249, 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-green-600 hover:to-green-500 text-white font-bold rounded-full text-sm md:text-base transition-colors duration-300"
                  >
                    Get {industries[activeIndustry].name} Automation
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>

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
                SkyRocket My Business <FiArrowRight className="inline ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16" style={{ background: colors.darkBlue }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ color: colors.white }}
          >
            Why <span style={{ color: colors.electricPurple }}>MasteraiX</span>{" "}
            Outperforms
            <br />
            Other Sales Tools
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Content replacing images */}
            <motion.div
              className="flex flex-col justify-center p-6 md:p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                background: `linear-gradient(135deg, ${colors.deepPurple} 0%, ${colors.navy} 100%)`,
                border: `1px solid ${colors.electricPurple}`,
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: colors.white }}
              >
                Close Deals Faster — With Zero Follow-Up Stress
              </h3>

              <p
                className="text-lg mb-6"
                style={{ color: colors.secondaryText }}
              >
                Your team never misses a follow-up, automated workflows handle
                it all.
              </p>

              <ul className="space-y-4 mb-6">
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaCheck
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>Smart messages</strong> go out based on each lead's
                    stage
                  </span>
                </motion.li>
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaCheck
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>Bump-ups</strong> remind silent leads to respond
                  </span>
                </motion.li>
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaCheck
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>All replies tracked</strong> — your team steps in
                    only when needed
                  </span>
                </motion.li>
              </ul>

              <div className="p-4 rounded-lg bg-black bg-opacity-30 border border-purple-900">
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: colors.glowEffect }}
                >
                  THE RESULT
                </p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: colors.white }}
                >
                  More replies, faster decisions, and less chasing.
                </p>
              </div>
            </motion.div>

            {/* Right: Text (unchanged) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ color: colors.neonViolet }}
              >
                <FaBolt className="inline mr-2" />
                Never Let Hot Leads Go Cold Again
              </h3>
              <p className="mb-6" style={{ color: colors.secondaryText }}>
                While other tools make you wait, Masteraix's AI engages leads
                instantly - the moment they show interest.
              </p>

              {/* Points */}
              <ul className="space-y-4 mb-8">
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaCheckSquare
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>Instant responses</strong> - AI talks to leads
                    within seconds, not hours
                  </span>
                </motion.li>
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaFilter
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>Smart qualification</strong> - Filters based on your
                    specific business rules
                  </span>
                </motion.li>
                <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                  <FaUserFriends
                    className="mt-1 mr-3 text-lg"
                    style={{ color: colors.hotPink }}
                  />
                  <span style={{ color: colors.white }}>
                    <strong>Seamless handoff</strong> - Routes only sales-ready
                    leads to your team
                  </span>
                </motion.li>
              </ul>

              {/* Result Card */}
              <motion.div
                className="p-4 rounded-lg border"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: `linear-gradient(135deg, ${colors.deepPurple} 0%, ${colors.navy} 100%)`,
                  borderColor: colors.electricPurple,
                }}
              >
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: colors.glowEffect }}
                >
                  THE RESULT
                </p>
                <p
                  className="font-semibold text-lg"
                  style={{ color: colors.white }}
                >
                  Zero lost opportunities. Only qualified leads that convert.
                </p>
              </motion.div>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#ff0000",
                      border: "none",
                      boxShadow: `0 0 10px rgba(255, 0, 0, 0.5)`,
                      transition: "background-color 0.3s ease",
                    }}
                    className="font-semibold hover:!bg-green-500"
                    onClick={() => {
                      const formSection = document.getElementById("contact");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    SkyRocket My Business{" "}
                    <FiArrowRight className="inline ml-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white px-2">
              Why{" "}
              <span
                style={{
                  color: colors.neonViolet,
                  textShadow: `0 0 10px ${colors.glowEffect}`,
                }}
                className="whitespace-nowrap"
              >
                1,000+ Businesses
              </span>{" "}
              Choose MASTERaiX
            </h2>
          </motion.div>

          {/* Logo Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="text-center mb-6 md:mb-8 text-gray-400 text-sm md:text-base">
              Trusted by market leaders across India:
            </p>

            {/* Logo Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-[#1c1c3c] p-3 md:p-4 rounded-lg shadow-sm border border-[#2b0d3a] flex items-center justify-center h-16 md:h-20"
                >
                  {logo.type === "image" ? (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-8 md:max-h-12 max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-medium text-white text-sm md:text-base">
                      {logo.content}
                    </span>
                  )}
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
            className="mt-8 md:mt-16 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-[#2b0d3a] mx-2 md:mx-0"
            style={{
              background: `linear-gradient(135deg, ${colors.deepPurple}, ${colors.deepPurpleLight})`,
              boxShadow: `0 0 30px ${colors.deepPurple}`,
            }}
          >
            <p className="text-base md:text-xl mb-3 md:mb-4 text-white">
              {/* <span className="font-bold">
                {businessesAutomated.toLocaleString()}+
              </span>{" "} */}
              1000+ Business Automated in last year
            </p>
            <p className="text-base md:text-xl mb-3 md:mb-4 text-white">
              <span className="text-green-400 md:text-green-600">
                300000 + Messages
              </span>{" "}
              Automated Using AI on WhatsApp
            </p>
            <p className="text-base md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-white bg-gradient-to-r from-green-500 to-emerald-600 py-2 md:py-3 px-4 md:px-6 rounded-lg shadow-lg inline-block">
              Increase business by <span className="text-yellow-300">30%</span>{" "}
              in just <span className="text-yellow-300">30 days</span>
            </p>
            {/* <p className="text-sm md:text-base text-gray-300">
              Next onboarding slot opens in:{" "}
              <span className="font-bold ml-1 md:ml-2 text-white">
                {timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Wins Section */}
      <section
        id="result"
        className="py-16"
        style={{ backgroundColor: colors.darkBlue }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.primaryText }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Transformative Results from Clients
            </motion.h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.secondaryText }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how businesses like yours achieved remarkable results
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winsData.map((win, index) => (
              <motion.div
                key={index}
                className={`flex flex-col p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
                style={{
                  backgroundColor: colors.navy,
                  boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4`}
                    style={{
                      backgroundColor: colors.electricPurple,
                      color: colors.white,
                    }}
                  >
                    {win.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: colors.primaryText }}
                  >
                    {win.text.split(" ")[0]} {win.text.split(" ")[1]}
                  </h3>
                </div>
                <p style={{ color: colors.secondaryText }}>{win.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mt-8">
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
                    boxShadow: `0 0 15px ${colors.glowEffect}`,
                    color: colors.white,
                    transition: "all 0.3s ease",
                  }}
                  className="font-semibold"
                  onClick={() => {
                    const formSection = document.getElementById("contact");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  SkyRocket My Business <FiArrowRight className="inline ml-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a23]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The <span className="text-green-400">Smart Way</span> vs The{" "}
              <span className="text-red-400">Old Way</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your lead management with AI-powered automation that
              works 24/7 while you sleep
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Old Way Column */}
            <div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-4 bg-red-900 rounded-lg border border-red-400"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Old Way
                </h3>
                <p className="text-red-300">(Manual Chaos)</p>
              </motion.div>

              <div className="space-y-4">
                {oldWayFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    isSmartWay={false}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Smart Way Column */}
            <div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 p-4 bg-green-900 rounded-lg border border-green-400"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Smart Way
                </h3>
                <p className="text-green-300">(Master AIX Automation)</p>
              </motion.div>

              <div className="space-y-4">
                {smartWayFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    isSmartWay={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => {
                const formSection = document.getElementById("contact");
                if (formSection) {
                  formSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Get Started with AIX Automation
            </button>
          </motion.div>
        </div>
      </section>

      {/* AI Conversation Flow */}

      <section className="relative bg-gray-900 py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                AI-Powered Conversion Flows
              </span>{" "}
              That Work 24/7
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              15 automated sequences that capture, nurture, and convert leads
              while you sleep
            </p>
          </div>

          {/* Flows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flows.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                    {flow.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{flow.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-purple-300">Flow:</span>{" "}
                  {flow.description}
                </p>
                <div className="bg-black bg-opacity-30 rounded-lg p-3 border border-gray-700">
                  <p className="text-sm text-purple-200 font-mono">
                    <span className="font-bold">Automation Logic:</span>{" "}
                    {flow.hook}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
                SkyRocket My Business <FiArrowRight className="inline ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      {/* Contact Form Section */}
      {!isSubmitted && (
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
                        Scale your business 10x
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
                        Your Automated Marketing & sales manager
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
                      <span className="font-semibold">⚠ Final Warning:</span>{" "}
                      These is only for people who want to grow there business
                      for real
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 bg-[#1c1c3c]">
                  <iframe
                    src="https://admin.masteraix.io/widget/form/689b14dc9521c"
                    style={{
                      width: "100%",
                      height: "600px",
                      border: "none",
                      borderRadius: "3px",
                    }}
                    id="inline-689b14dc9521c"
                    data-form-name="MasteraiX 95875lpkjh,numgkhnvum"
                    data-layout-iframe-id="inline-689b14dc9521c"
                    data-form-id="689b14dc9521c"
                    data-height="600"
                    title="MasteraiX 95875lpkjh,numgkhnvum"
                  />

                  <div className="mt-4 flex items-center text-sm text-gray-400">
                    <FiLock className="mr-2" />
                    <span>Your data is 100% secure - We hate spam too</span>
                  </div>

                  <div className="mt-2 flex items-center text-sm text-gray-400">
                    <FiClock className="mr-2" />
                    <span className="font-bold">
                      Experience business automation{" "}
                      <span className="text-green-600">right now</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Thank You Message */}
      {isSubmitted && (
        <section
          id="thank-you-message"
          className="min-h-[60vh] flex items-center justify-center"
          style={{ backgroundColor: colors.darkBlue }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 max-w-2xl mx-auto"
          >
            <div className="mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mx-auto text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white">
              Thank You For Your Submission!
            </h2>

            <p className="text-lg mb-8 text-gray-300">
              We've received your information and our team will contact you
              within 24 hours. Meanwhile, check your email for our welcome kit.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium"
              onClick={() => {
                setIsSubmitted(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Submit Another Response
            </motion.button>
          </motion.div>
        </section>
      )}

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
              <h3 className="text-xl font-bold mb-4">MASTERaiX</h3>
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
                  <a href="#contact" className="hover:text-white transition">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2b0d3a] mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MASTERaiX. All rights reserved.</p>
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
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4"
          >
            {/* Click outside to close */}
            <div
              className="absolute inset-0"
              onClick={() => setShowPopup(false)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1c1c3c] rounded-xl w-full max-w-md relative border border-[#2b0d3a] mx-4"
              style={{
                boxShadow: `0 0 30px ${colors.deepPurple}`,
                maxHeight: "90vh",
                overflowY: "auto", // Added for mobile scrolling
                WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                aria-label="Close popup"
              >
                <FiX className="text-xl" />
              </button>

              <div className="p-4 sm:p-6">
                {" "}
                {/* Reduced padding on mobile */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 sm:mb-6 bg-gradient-to-r from-amber-200 via-amber-50 to-amber-100 bg-clip-text text-transparent">
                  Get Free Demo
                </h1>
                <div className="overflow-hidden">
                  <iframe
                    src="https://admin.masteraix.io/widget/form/689b14dc9521c"
                    className="w-full h-[400px] sm:h-[550px] border-none rounded-lg" // Reduced height on mobile
                    id="inline-689b14dc9521c"
                    title="MasteraiX Form"
                    allow="geolocation; microphone; camera"
                    loading="lazy"
                    style={{
                      minHeight: "400px", // Ensure minimum height
                      WebkitOverflowScrolling: "touch", // For iOS
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
