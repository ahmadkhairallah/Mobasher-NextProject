"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiHome, FiGrid } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle the sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-2 left-4 z-50 text-textDark bg-secondary p-2 rounded-md shadow-md hover:bg-secondary/80"
      >
        {isOpen ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
      </button>

      {/* Sidebar with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full bg-background text-textDark w-64 p-4 shadow-lg z-40"
          >
            <h1 className="text-xl font-bold mb-6 text-primary">Navigation</h1>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-textMedium hover:text-primary"
                  >
                    <FiHome size={20} /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="flex items-center gap-2 text-textMedium hover:text-primary"
                  >
                    <FiGrid size={20} /> Categories
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for closing sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black z-30"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
