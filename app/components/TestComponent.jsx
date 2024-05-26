import React, { useState } from 'react';

const TestComponent = ({ questionNumber, question, options, answer, correct, displayAnswers }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    answer(index);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-8 rounded-lg shadow-lg mb-4 md:w-96 lg:w-120">
      <p className="text-xl font-semibold mb-4">{`${questionNumber}) ${question}`}</p>
      <div className="grid grid-cols-1 gap-4 mb-4">
        {options.map((option, index) => (
 <button
 key={index}
 onClick={() => handleOptionSelect(index)}
 className={`py-2 px-4 rounded-lg text-sm focus:outline-none ${
   displayAnswers && correct === index
     ? 'bg-green-500 text-white' // Display correct option in green
     : selectedOption === index
     ? displayAnswers
       ? 'bg-red-500 text-white' // Display selected incorrect option in red if displayAnswers is true
       : 'bg-blue-500 text-white' // Otherwise, display selected option in blue
     : 'bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-white' // Display unselected option
 }`}
>
 {option}
</button>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
