import React from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <button
    onClick={goToHome}
    className="fixed z-10 top-4 left-4 md:bottom-4 md:right-4 md:top-auto md:left-auto bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none"
    aria-label="Go to Home"
  >
    <FaHome className="w-8 h-8" />
  </button>
  );
};

export default HomeButton;
