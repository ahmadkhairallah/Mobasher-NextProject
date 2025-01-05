"use client";

import React from "react";
import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-textDark py-6">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight hover:text-primary"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight hover:text-primary"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight hover:text-primary"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight hover:text-primary"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-textLight mt-8">
          © 2025 MyStore. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
