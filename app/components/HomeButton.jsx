import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  return (
    <Link href="/" aria-label="Go to Home">
      <button
        className="fixed z-10 top-4 left-4 md:bottom-4 md:right-4 md:top-auto md:left-auto bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none"
      >
        <FaHome className="w-8 h-8" />
      </button>
    </Link>
  );
};

export default HomeButton;
