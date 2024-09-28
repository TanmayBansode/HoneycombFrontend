'use client'

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Lightbulb } from "lucide-react"
import CodeSnippet from "../components/CodeSnippet"

export default function Component() {
  const [activeTab, setActiveTab] = useState("developer")
  const [formData, setFormData] = useState({
    yourName: "",
    categoryOfTheTool: "",
    titleOfTheIdea: "",
    detailedIdea: ""
  })
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const developerRef = useRef(null);
  const ideaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Object.values(formData).every(val => val.trim() !== "")) {
      try {
        // Sending the form data to the backend
        const response = await fetch("/api/submit-idea", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setSuccessMessage("Your idea has been submitted successfully!");
          setErrorMessage("");
          setFormData({ yourName: "", categoryOfTheTool: "", titleOfTheIdea: "", detailedIdea: "" });
        } else {
          setErrorMessage("Submission failed. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting idea:", error);
        setErrorMessage("An error occurred while submitting your idea.");
      }
    } else {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    }
  };
  

  const contributionSteps = [
    {
      text: "Clone Both Repositories.",
      code: `git clone https://github.com/TanmayBansode/HoneycombFrontend.git\ngit clone https://github.com/TanmayBansode/HoneycombFrontend.git`
    },
    {
      text: "Create a New Folder for the Frontend Feature.",
      code: `mkdir calendar\ncd calendar\ntouch page.js`
    },
    {
      text: "Ensure Code Modularity.",
      code: `mkdir components/yourToolName`
    },
    {
      text: "Write Backend Controller Code.",
      code: `mkdir src/controllers/yourToolName\ncd src/controllers/yourToolName\ntouch controller.js`
    },
    {
      text: "Add Routes to the Backend.",
      code: `// In src/routes/index.js\nrouter.get('/your-route', yourToolController.yourFunction);`
    },
    {
      text: "Commit Your Changes.",
      code: `git add .\ngit commit -m "Add [your feature] to frontend and backend"`
    },
    {
      text: "Push Your Changes.",
      code: `git push origin your-branch-name`
    },
    {
      text: "Create Pull Requests.",
    },
    {
      text: "Notify the Team via Email.",
      code: `tanmaysbansode@gmail.com`
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-slate-800 to-black text-white px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contribute to Our Project</h1>
        
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-l-lg ${activeTab === "developer" ? "bg-indigo-600" : "bg-gray-700"}`}
            onClick={() => handleTabClick("developer")}
          >
            <Code className="inline-block mr-2" />
            As a Developer
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg ${activeTab === "idea" ? "bg-purple-600" : "bg-gray-700"}`}
            onClick={() => handleTabClick("idea")}
          >
            <Lightbulb className="inline-block mr-2" />
            Share an Idea
          </button>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Developer section */}
          {(activeTab === "developer" || typeof window !== "undefined" && window.innerWidth > 768) && (
            <motion.div
              ref={developerRef}
              onClick={() => handleTabClick("developer")}
              className={`flex-1 p-8 rounded-lg shadow-lg transition-opacity duration-300 ${activeTab === "developer" ? "border border-md border-gray-400 opacity-100" : "opacity-30"}`}
            >
              <h2 className="text-3xl font-bold mb-6">How to Contribute as a Developer</h2>
              <ol className="space-y-4">
                {contributionSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full mr-3">
                      {index + 1}
                    </span>
                    <span>
                      {step.text}
                      {step.code && (
                        <CodeSnippet code={step.code} />
                      )}
                      {step.image && <img src={step.image} alt={step.text} className="mt-2 w-full h-auto rounded-md" />}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          )}

          {/* Idea section */}
          {(activeTab === "idea" || typeof window !== "undefined" && window.innerWidth > 768) && (
            <motion.div
              ref={ideaRef}
              onClick={() => handleTabClick("idea")}
              className={`flex-1 p-8 rounded-lg shadow-lg transition-opacity duration-300 ${activeTab === "idea" ? "border border-md border-gray-400 opacity-100" : "opacity-30"}`}
            >
              <h2 className="text-3xl font-bold mb-6">Share Your Idea</h2>
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-1 text-gray-200" htmlFor={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    {key === "detailedIdea" ? (
                      <textarea
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleInputChange}
                        placeholder={`Enter The Idea in Detail`}
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    ) : (
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={value}
                        onChange={handleInputChange}
                        placeholder={`Enter ${key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
                        }`}
                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Idea
                </button>
              </form>

              {successMessage && <p className="mt-4 text-green-400">{successMessage}</p>}
              {errorMessage && <p className="mt-4 text-red-400">{errorMessage}</p>}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
