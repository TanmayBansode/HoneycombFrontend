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
      className="fixed z-10 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out focus:outline-none"
      style={{ bottom: "4%", right: "4%" }}
      aria-label="Go to Home"
    >
      <FaHome className="w-8 h-8" />
    </button>
  );
};

export default HomeButton;
