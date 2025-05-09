import React from "react";
import { motion } from "framer-motion";

// Fade-in-up variant for scroll-triggered animation
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 1 },
  transition: { duration: 0.6 },
};

function Feedback() {
  return (
    <motion.section
      {...fadeInUp}
      className="w-full font-grotesk bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1200px] space-y-6">

        <motion.h2
          {...fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0732EF] mb-4 text-left"
        >
          Member Feedback
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="relative w-full"
        >
          <motion.div
            {...fadeInUp}
            className="border-2 border-[#0732EF] rounded-lg p-3 sm:p-4 md:p-6 bg-white shadow-sm"
          >
            <motion.p
              {...fadeInUp}
              className="text-sm sm:text-base md:text-lg font-medium text-center"
            >
              "I found my passion and purpose through this club!"
            </motion.p>
            <motion.div
              {...fadeInUp}
              className="text-right mt-2 sm:mt-3 md:mt-4"
            >
              <p className="text-sm sm:text-base font-medium">- Mark Smith</p>
              <p className="text-xs md:text-sm text-gray-600">
                Chief Marketing Officer
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Feedback;
