import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4"
    >
      <div id="price" className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Pricing
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Pre-templates Plan */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Pre-templates
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-6"
            >
              Free
            </motion.p>
          </motion.div>

          {/* AI-powered Plan */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              AI-powered
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-6"
            >
              $10
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeIn("up", 1.1)} className="text-center mt-12">
          <motion.p
            variants={fadeIn("up", 1.2)}
            className="text-xl text-gray-600 mb-4"
          >
            Ready to get started?
          </motion.p>
          <Link to="/login">
            <motion.button
              variants={fadeIn("up", 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
