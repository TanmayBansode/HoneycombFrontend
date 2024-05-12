"use client";
import React, { useState } from "react";
import Checklist from "../components/Checklist";
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const App = () => {
  const [prompt, setPrompt] = useState("Dev Ops");
  const [roadmap, setRoadmap] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL;

  const fetchData = async () => {
    setIsLoading(true);
    setError(null); 
    try {
      const { data } = await axios.post(backendUrl + "/api/getResponse", {
        prompt: prompt
      });
      setRoadmap(data);
    } catch (error) {
      console.error("Error fetching roadmap:", error);
      setError("Error fetching roadmap. Please try again later.");
    }
    setIsLoading(false);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
  <div className="bg-gradient-to-r from-black via-slate-800 to-black min-h-screen px-12 md:px-20 lg:px-32 pt-20 justify-center items-center">
  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
    Roadmap Generator
  </h1>
  <p className="mt-8 text-center text-gray-500">See what it takes to learn the Topic/Skill you are interested in</p>

      <div className="flex flex-col items-center justify-center my-12">
        <div className="relative w-full max-w-lg">
          <input
            value={prompt}
            onChange={handlePromptChange}
            className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Chess, Backend, High School Algebra ..."
            required
          />
          <button
            onClick={handleButtonClick}
            className="text-white absolute right-2 mt-1.5 bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-purple-500 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 dark:bg-transparent dark:hover:bg-gradient-to-tr from-indigo-600 to-purple-500"
          >
            <BsSearch className="w-6 h-6" /> 
          </button>
        </div>
        {error && (
          <div className="max-w-lg my-12">
            <p className="text-red-100 text-center p-4 bg-red-900 rounded-lg">{error}</p>
          </div>
        )}
        {isLoading && (
          <p className="text-white text-xl my-12">Loading...</p>
        )}
      </div>
  
      {!isLoading && roadmap.length > 0 && <Checklist roadmap={roadmap} name={prompt} />}
      
    </div>
  );
};

export default App;
