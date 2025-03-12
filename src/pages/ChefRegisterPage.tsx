import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const ChefRegisterPage = () => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => setShowSuccess(true);
  const handleSuccessOk = () => {
    setShowSuccess(false);
    setStep(1);
    navigate('/');

  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white relative">
      {/* Animated background pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 bg-[url('')] bg-cover bg-center blur-sm z-0"
      />

      {/* Main container with wider width */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl w-full z-10 overflow-hidden"
      >
        {/* Enhanced Progress Bar */}
        <div className="relative mb-8">
          {/* Background Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded-full" />

          {/* Animated Progress Bar */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-0 left-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
          />

          {/* Progress Indicators with Labels */}
          <div className="relative z-10 flex justify-between px-4 mt-3">
            {/* Personal Step */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative flex items-center">
                <span className="w-6 h-6 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Personal</span>
            </div>

            {/* Kitchen Step */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative flex items-center">
                <span className={`w-6 h-6 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-orange-500  animate-pulse' : 'bg-gray-300'}`} />
              </div>
              <span className="text-sm font-semibold text-gray-700">Kitchen</span>
            </div>

            {/* Upload Step */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative flex items-center">
                <span className={`w-6 h-6 rounded-full transition-all duration-500 ${step >= 3 ? 'bg-orange-500  animate-pulse' : 'bg-gray-300'}`} />
              </div>
              <span className="text-sm font-semibold text-gray-700">Upload</span>
            </div>
          </div>
        </div>



        {/* Form content with staggered animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-orange-500">🧑‍🍳</span>
                  Personal Details
                </h2>

                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ borderColor: '#FF8C00' }}
                  className="relative"
                >
                  <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      placeholder="Enter your password"
                      type="password"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      placeholder="Confirm your password"
                      type="password"
                    />
                  </motion.div>
                </div>
              </div>

            )}

            {/* Step 2: Kitchen Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-orange-500">🍽️</span>
                  Kitchen Details
                </h2>

                {/* Kitchen Name */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ borderColor: '#FF8C00' }}
                  className="relative"
                >
                  <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                    Kitchen Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                    placeholder="Enter kitchen name"
                    type="text"
                  />
                </motion.div>

                {/* Kitchen Timings */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Opening Time
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      type="time"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileFocus={{ borderColor: '#FF8C00' }}
                    className="relative"
                  >
                    <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                      Closing Time
                    </label>
                    <input
                      className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300"
                      type="time"
                    />
                  </motion.div>
                </div>

                {/* Kitchen Specifications */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileFocus={{ borderColor: '#FF8C00' }}
                  className="relative"
                >
                  <label className="absolute -top-4 left-4 px-2 bg-white text-sm font-medium text-gray-600">
                    Specifications
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 rounded-lg bg-gray-50 focus:border-orange-400 transition-all duration-300 resize-none"
                    placeholder="Describe your kitchen (e.g., Special Dishes, Capacity, Equipment)"
                    rows={3}
                  ></textarea>
                </motion.div>
              </div>

            )}

            {/* Step 3: Upload Pictures */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-orange-500">📸</span>
                  Upload Pictures
                </h2>

                {/* Upload Your Picture */}
                <motion.div
                  initial={{ opacity: 0.8, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col items-center justify-center border-2 border-dashed border-orange-500 rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-orange-50 transition-all duration-300 shadow-lg"
                >
                  <label htmlFor="upload-picture" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-orange-500 text-4xl">📷</span>
                      <p className="text-gray-700 font-medium">Upload Your Picture</p>
                      <p className="text-sm text-gray-500">Click or Drag & Drop</p>
                    </div>
                  </label>
                  <input type="file" className="hidden" id="upload-picture" />
                </motion.div>

                {/* Upload Kitchen Image (Logo) */}
                <motion.div
                  initial={{ opacity: 0.8, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex flex-col items-center justify-center border-2 border-dashed border-orange-500 rounded-xl p-6 text-center cursor-pointer bg-gray-50 hover:bg-orange-50 transition-all duration-300 shadow-lg"
                >
                  <label htmlFor="upload-kitchen-image" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-orange-500 text-4xl">🏠</span>
                      <p className="text-gray-700 font-medium">Upload Kitchen Image (Logo)</p>
                      <p className="text-sm text-gray-500">Click or Drag & Drop</p>
                    </div>
                  </label>
                  <input type="file" className="hidden" id="upload-kitchen-image" />
                </motion.div>
              </div>

            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-lg transition-all duration-300"
            >
              Back
            </motion.button>
          )}

          {step < 3 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg transition-all duration-300 hover:from-green-600 hover:to-green-700"
            >
              Submit
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-4xl text-green-500">✅</span>
                <h2 className="text-2xl font-bold text-gray-900">Information Submitted!</h2>
                <p className="text-gray-600 text-center">
                  Your application has been received and is under review by our team.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSuccessOk}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl transition-all duration-300 hover:from-green-600 hover:to-green-700 mt-4"
                >
                  OK
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .input-style {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ChefRegisterPage;