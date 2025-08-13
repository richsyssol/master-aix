import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight, FiClock } from "react-icons/fi";
import { Form, Input, Button, message, Progress } from "antd";

const EmailCapturePopup = ({ onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [countdown, setCountdown] = useState(5);

  const colors = {
    deepPurple: "#2b0d3a",
    buttonGradientStart: "#6a0dad",
    buttonGradientEnd: "#ff00ff",
    glowEffect: "#d65df9",
  };

  // const steps = [
  //   {
  //     title: "Before we continue...",
  //     content:
  //       "Take 5 seconds to reflect: What's your biggest lead generation challenge right now?",
  //     progress: 25,
  //   },
  //   {
  //     title: "Quick Thought Exercise",
  //     content:
  //       "Imagine doubling your leads. What would that mean for your business?",
  //     progress: 50,
  //   },
  //   {
  //     title: "Almost Ready!",
  //     content:
  //       "Our guide will show you exactly how to achieve this transformation.",
  //     progress: 75,
  //   },
  // ];

  React.useEffect(() => {
    if (currentStep <= steps.length && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setCountdown(5);
    }
  }, [countdown, currentStep]);

  const saveToGoogleSheets = async (email) => {
    try {
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbwBZs-2WdmBBeGPJFy_AYVWl64SMMWPJQQD1QHvryrDmGifPlsMS9F3Yqc0eloic-jC/exec";

      const submissionData = {
        email: email,
        timestamp: new Date().toISOString(),
        source: "email_capture_popup",
      };

      const response = await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      return true;
    } catch (error) {
      console.error("Error saving to Google Sheets:", error);
      return false;
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const savedToSheet = await saveToGoogleSheets(values.email);

      if (!savedToSheet) {
        throw new Error("Failed to save to Google Sheets");
      }

      message.success("Thank you! Your guide is on its way.");

      // Optional: Add any post-submission logic here
      // For example, you might want to close the popup after submission
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      message.error("Failed to submit. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      className="bg-[#1c1c3c] rounded-xl p-6 max-w-md w-full relative border border-[#2b0d3a]"
      style={{ boxShadow: `0 0 30px ${colors.deepPurple}` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <FiX className="text-xl" />
      </button>

      <Progress
        percent={steps[currentStep - 1]?.progress || 100}
        showInfo={false}
        strokeColor={colors.glowEffect}
        className="mb-4"
      />

      <AnimatePresence mode="wait">
        {currentStep <= steps.length ? (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              {steps[currentStep - 1].title}
            </h3>
            <div className="flex items-start mb-6 p-4 bg-[#2b0d3a] rounded-lg">
              <FiClock
                className="text-lg mt-0.5 mr-3"
                style={{ color: colors.glowEffect }}
              />
              <div>
                <p className="text-gray-300">
                  {steps[currentStep - 1].content}
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  Auto-continuing in {countdown}s...
                </div>
              </div>
            </div>
            <Button
              type="text"
              block
              onClick={() => {
                if (currentStep < steps.length) {
                  setCurrentStep(currentStep + 1);
                  setCountdown(5);
                } else {
                  setCurrentStep(steps.length + 1);
                }
              }}
              className="text-gray-400 hover:text-white mb-4"
            >
              Continue Early <FiArrowRight className="inline ml-2" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="email-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">
              Get Your FREE Guide
            </h3>
            <p className="mb-6 text-gray-400">
              "5 Automation Hacks to Double Your Leads"
            </p>

            <Form form={form} onFinish={onFinish}>
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
                loading={loading}
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
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EmailCapturePopup;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiX, FiArrowRight, FiCheck, FiClock } from "react-icons/fi";
// import { Form, Input, Button, message, Progress } from "antd";
// import emailjs from "emailjs-com";

// const EmailCapturePopup = ({ onClose }) => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [countdown, setCountdown] = useState(5);

//   const colors = {
//     deepPurple: "#2b0d3a",
//     buttonGradientStart: "#6a0dad",
//     buttonGradientEnd: "#ff00ff",
//     glowEffect: "#d65df9",
//   };

//   // Reflection steps content
//   const steps = [
//     {
//       title: "Before we continue...",
//       content:
//         "Take 5 seconds to reflect: What's your biggest lead generation challenge right now?",
//       progress: 25,
//     },
//     {
//       title: "Quick Thought Exercise",
//       content:
//         "Imagine doubling your leads. What would that mean for your business?",
//       progress: 50,
//     },
//     {
//       title: "Almost Ready!",
//       content:
//         "Our guide will show you exactly how to achieve this transformation.",
//       progress: 75,
//     },
//   ];

//   // Handle countdown timer
//   React.useEffect(() => {
//     if (currentStep <= steps.length && countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (countdown === 0 && currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//       setCountdown(5);
//     }
//   }, [countdown, currentStep]);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       await emailjs.send(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         {
//           to_email: "your-email@example.com",
//           from_email: values.email,
//           message: "New lead downloaded the guide after reflection steps",
//         },
//         "YOUR_USER_ID"
//       );
//       message.success("Guide sent! Check your email");
//       form.resetFields();
//       onClose();
//     } catch (error) {
//       message.error("Failed to send. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ scale: 0.9, y: 20 }}
//       animate={{ scale: 1, y: 0 }}
//       className="bg-[#1c1c3c] rounded-xl p-6 max-w-md w-full relative border border-[#2b0d3a]"
//       style={{ boxShadow: `0 0 30px ${colors.deepPurple}` }}
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-400 hover:text-white"
//       >
//         <FiX className="text-xl" />
//       </button>

//       <Progress
//         percent={steps[currentStep - 1]?.progress || 100}
//         showInfo={false}
//         strokeColor={colors.glowEffect}
//         className="mb-4"
//       />

//       <AnimatePresence mode="wait">
//         {currentStep <= steps.length ? (
//           <motion.div
//             key={`step-${currentStep}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="text-xl font-bold mb-4 text-white">
//               {steps[currentStep - 1].title}
//             </h3>
//             <div className="flex items-start mb-6 p-4 bg-[#2b0d3a] rounded-lg">
//               <FiClock
//                 className="text-lg mt-0.5 mr-3"
//                 style={{ color: colors.glowEffect }}
//               />
//               <div>
//                 <p className="text-gray-300">
//                   {steps[currentStep - 1].content}
//                 </p>
//                 <div className="mt-3 text-xs text-gray-500">
//                   Auto-continuing in {countdown}s...
//                 </div>
//               </div>
//             </div>
//             <Button
//               type="text"
//               block
//               onClick={() => {
//                 if (currentStep < steps.length) {
//                   setCurrentStep(currentStep + 1);
//                   setCountdown(5);
//                 } else {
//                   setCurrentStep(steps.length + 1);
//                 }
//               }}
//               className="text-gray-400 hover:text-white mb-4"
//             >
//               Continue Early <FiArrowRight className="inline ml-2" />
//             </Button>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="email-form"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <h3 className="text-xl font-bold mb-4 text-white">
//               Get Your FREE Guide
//             </h3>
//             <p className="mb-6 text-gray-400">
//               "5 Automation Hacks to Double Your Leads"
//             </p>

//             <Form form={form} onFinish={onFinish}>
//               <Form.Item
//                 name="email"
//                 rules={[
//                   {
//                     required: true,
//                     type: "email",
//                     message: "Please enter a valid email",
//                   },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Your Email Address"
//                   className="bg-[#0a0a23] border-[#2b0d3a] text-white"
//                 />
//               </Form.Item>

//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 size="large"
//                 block
//                 loading={loading}
//                 style={{
//                   background: `linear-gradient(135deg, ${colors.buttonGradientStart}, ${colors.buttonGradientEnd})`,
//                   border: "none",
//                   boxShadow: `0 0 15px ${colors.glowEffect}`,
//                 }}
//                 className="font-semibold"
//               >
//                 Send Me the Guide <FiArrowRight className="inline ml-2" />
//               </Button>
//             </Form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default EmailCapturePopup;
