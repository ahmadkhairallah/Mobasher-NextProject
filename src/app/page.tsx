"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      router.push("/categories");
    }, 3000); // Display duration: 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  if (!showSplash) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-textDark">
      <motion.div
        className="absolute inset-0 bg-secondary bg-opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <motion.div
        className="relative flex flex-col items-center text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Welcome to MyStore
        </h1>
        <p className="text-lg md:text-xl text-textMuted">
          Discover curated products just for you.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-center text-textLight text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>Loading, please wait...</p>
      </motion.div>
    </div>
  );
}
