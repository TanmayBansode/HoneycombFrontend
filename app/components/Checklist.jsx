import React, { useEffect } from "react";
import { IoPrint } from "react-icons/io5";

const ChecklistItem = ({ text }) => {
  return (
    <div className="flex items-center py-2">
      <input
        type="checkbox"
        className="form-checkbox border border-white text-green-400 h-5 w-5 mr-2 bg-transparent rounded"
      />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

const ChecklistPhase = ({ title, items }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold text-green-400 mb-2">{title}</h2>
      {items.map((item, index) => (
        <ChecklistItem key={index} text={item} />
      ))}
    </div>
  );
};

const Checklist = ({ roadmap, name }) => {
  const handlePrint = () => {
window.print();
  };

  useEffect(() => {
    const handleBeforePrint = () => {
      const printButton = document.getElementById("printButton");
      if (printButton) {
        printButton.style.display = "none";
      }
    };

    const handleAfterPrint = () => {
      const printButton = document.getElementById("printButton");
      if (printButton) {
        printButton.style.display = "block";
      }
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <>
      {roadmap ? (
      <div id="checklist" className="pb-4 p-2 md:p-6 lg:p-8 rounded shadow-xl relative border border-md border-gray-700">

      <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        {name}
      </h1>
      {roadmap.map((phase, index) => (
        <ChecklistPhase
          key={index}
          title={phase.title}
          items={phase.steps}
        />
      ))}


        <div className="absolute top-2 right-2">
          <button onClick={handlePrint}
              className="text-white bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-purple-500 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 md:px-2 md:py-2 dark:bg-transparent dark:hover:bg-gradient-to-tr from-indigo-600 to-purple-500"
            >
                       <IoPrint className="w-6 h-6 md:w-8 lg:w-8" />
            </button>
        </div>

    
    </div>
    
      ) : (
        <p className="text-white">No roadmap available.</p>
      )}
    </>
  );
};

export default Checklist;
