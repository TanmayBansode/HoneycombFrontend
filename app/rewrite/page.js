"use client"

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Display } from "../components/Display";
import HomeButton from "../components/HomeButton";

const Rewrite = () => {
    const [prompt, setPrompt] = useState("");
    const [content, setContent] = useState();
    const [mode, setMode] = useState("Professional");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const textareaRef = useRef(null);

    const backendUrl = process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL;

    const fetchData = async () => {
        setIsLoading(true);
        setError(null); 
        try {
            const { data } = await axios.post(backendUrl + "/api/rewrite", {
                prompt: prompt,
                mode: mode === "Custom" ? customMode : mode
            });

            const text = data.text;
            setContent(text);
        } catch (error) {
            console.error("Error fetching content:", error);
            setError("Error fetching content. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleButtonClick = () => {
        fetchData();
    };

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleModeChange = (e) => {
        setMode(e.target.value);
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; 
        textarea.style.height = textarea.scrollHeight + "px"; 
    };

    useEffect(() => {
        adjustTextareaHeight(); 
    }, [prompt]);

    return (
      <div className="bg-gradient-to-r from-black via-slate-800 to-black min-h-screen px-6 md:px-20 lg:px-32 pt-20 justify-center items-center">
        <HomeButton />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Rewriter
        </h1>
        <p className="mt-8 text-center text-gray-500">
          Generate rewritten content to avoid plagiarism
        </p>

        <div className="flex flex-col items-center justify-center mt-12 pb-12">
          <div className="relative w-full">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => {
                  handlePromptChange(e);
                  adjustTextareaHeight();
              }}
              className="p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-hidden"
              placeholder="Enter the text to rewrite"
              rows="1"
            ></textarea>
          </div>

    <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-center">
      <form className="hidden md:block lg:block max-w-sm md:mr-4">
        <select
          id="mode"
          value={mode}
          onChange={handleModeChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Professional">Professional</option>
          <option value="Casual">Casual</option>
          <option value="Technical">Technical</option>
          <option value="Romantic">Romantic</option>
          <option value="African Accent">African Accent</option>
          <option value="German">German</option>
          <option value="Rap">Rap</option>
          <option value="Snoop Dog">Snoop Dog</option>
        </select>
      </form>
<div className="flex flex-row items-center justify-center md:mr-4 space-x-2">

      <input
        type="text"
        value={mode}
        onChange={handleModeChange}
        placeholder="Enter custom mode"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:w-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        onClick={handleButtonClick}
        className="text-white bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-purple-500  focus:outline-none font-medium rounded-lg text-sm px-6 py-2 dark:bg-transparent dark:hover:bg-gradient-to-tr from-indigo-600 to-purple-500"
      >
        <FaRegPenToSquare className="w-6 mb-1 h-6" />
      </button>

      </div>
    </div>
          {error && (
            <div className="max-w-lg my-12">
              <p className="text-red-100 text-center p-4 bg-red-900 rounded-lg">
                {error}
              </p>
            </div>
          )}
          {isLoading && <p className="text-white text-xl my-12">Loading...</p>}
        </div>

        {/* Display the rewritten content */}
        {!isLoading && content && <Display text={content} />}
      </div>
    );
};

export default Rewrite;
