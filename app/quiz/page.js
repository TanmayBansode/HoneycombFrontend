"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import HomeButton from "../components/HomeButton";
import QuizComponent from "../components/QuizComponent";

const QuizPage = () => {
  const [prompt, setPrompt] = useState("");
  const [number, setNumber] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL;

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(backendUrl + "/api/quiz", {
        prompt,
        number,
        difficulty,
      });
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      setError("Error fetching quiz. Please try again later.");
    }
    setIsLoading(false);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };


  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleDecrement = () => {
    setNumber((prev) => Math.max(1, prev - 1));
  };
  
  const handleIncrement = () => {
    setNumber((prev) => Math.min(15, prev + 1));
  };
  

  return (
    <div className="bg-gradient-to-r from-black via-slate-800 to-black min-h-screen px-6 md:px-20 lg:px-32 pt-20 pb-8 justify-center items-center">
      <HomeButton />
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Quiz Generator
      </h1>
      <p className="mt-8 text-center text-gray-500">
        Generate a quiz based on the following topic
      </p>
      <div className="flex flex-col items-center justify-center my-12">
        <div className="relative w-full max-w-lg">
          <input
            value={prompt}
            onChange={handlePromptChange}
            className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="German History, Python, Current Electricity ..."
            required
          />

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center mt-4 justify-between w-full">
            <div className="flex flex-row space-x-4 items-center">
              <div className="relative flex items-center space-x-2">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  onClick={handleDecrement}
                  className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  id="counter-input"
                  data-input-counter
                  className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 w-12 text-center"
                  value={number}
                  required
                  disabled
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  onClick={handleIncrement}
                  className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-6 w-6 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                     

                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={handleDifficultyChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="easy">Beginners</option>
                  <option value="medium">Intermediate</option>
                  <option value="difficult">Advanced</option>
                  <option value="very difficult">Expert</option>
                </select>
              </div>
            </div>
            <div>
              <button
                onClick={handleButtonClick}
                className="flex items-center justify-center text-white bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-purple-500 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 dark:bg-transparent dark:hover:bg-gradient-to-tr from-indigo-600 to-purple-500"
              >
                <BsSearch className="w-6 h-6" />
              </button>
            </div>
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
        {/* Render QuizComponent only if prompt is entered, data is fetched, and there is data */}

{!isLoading && questions.length > 0 &&  <QuizComponent quizName={prompt} questions={questions} />}


      </div>
    </div>
  );
};

export default QuizPage;
