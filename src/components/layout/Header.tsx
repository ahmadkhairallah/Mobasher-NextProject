"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiHome, FiGrid } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <header className="bg-primary text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 items-center ml-auto">
          <Link href="/" className="flex items-center space-x-2 hover:underline">
            <FiHome />
            <span>Home</span>
          </Link>
          <Link
            href="/categories"
            className="flex items-center space-x-2 hover:underline"
          >
            <FiGrid />
            <span>Categories</span>
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-2xl focus:outline-none md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-14 right-4 bg-primary text-white rounded shadow-md z-50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  href="/"
                  className="flex items-center space-x-2 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="flex items-center space-x-2 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiGrid />
                  <span>Categories</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
