
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

function Feedback() {
  const { darkMode } = useDarkMode();

  // Dark mode colors
  const bgColor = darkMode ? "#000414" : "white";
  const boxBgColor = darkMode ? "#152770" : "white";
  const boxBorder = darkMode ? "none" : "2px solid #0732EF";
  const textColor = darkMode ? "white" : "black";
  const accentColor = darkMode ? "white" : "#0732EF";
  const secondaryTextColor = darkMode ? "#A1A1AA" : "gray.600";

  return (
    <section
      className="w-full font-grotesk py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300"
      style={{ backgroundColor: bgColor,paddingBottom: "6rem",marginBottom: "-3rem" }}
    >
      <motion.div {...fadeInUp} className="mx-auto w-full max-w-[1200px] space-y-6">

        <motion.h2
          {...fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left transition-colors duration-300"
          style={{ color: accentColor }}
        >
          Member Feedback
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="relative w-full"
        >
          <motion.div
            {...fadeInUp}
            className="rounded-lg p-3 sm:p-4 md:p-6 shadow-sm transition-colors duration-300"
            style={{ 
              backgroundColor: boxBgColor,
              border: boxBorder
            }}
          >
            <motion.p
              {...fadeInUp}
              className="text-sm sm:text-base md:text-lg font-medium text-center transition-colors duration-300"
              style={{ color: textColor }}
            >
              "Helping students innovate has been my drive and IEDC CET helps  to fulfill it!"
            </motion.p>
            <motion.div
              {...fadeInUp}
              className="text-right mt-2 sm:mt-3 md:mt-4"
            >
              <p 
                className="text-sm sm:text-base font-medium transition-colors duration-300"
                style={{ color: textColor }}
              >
                - Abhinav A
              </p>
              <p 
                className="text-xs md:text-sm transition-colors duration-300"
                style={{ color: secondaryTextColor }}
              >
                Chief Marketing Officer
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Feedback;