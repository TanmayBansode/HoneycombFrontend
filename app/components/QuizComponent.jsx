import React, { useState } from 'react';
import TestComponent from './TestComponent';

const QuizComponent = ({ quizName, questions }) => {
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
  

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleAnswer = (optionIndex) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionIndex]: optionIndex,
    }));
  
    const isCorrect = questions[currentQuestionIndex].answer === optionIndex;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  

    setSubmitted(false);
  };
  
  const handleSubmission = () => {
    let calculatedScore = 0;
    Object.keys(userResponses).forEach((questionIndex) => {
      const selectedOptionIndex = userResponses[questionIndex];
      const correctOptionIndex = questions[questionIndex].answer;
      if (selectedOptionIndex === correctOptionIndex) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    console.log('Submitted user responses:', userResponses);
    console.log('Score:', calculatedScore);
    setSubmitted(true);
  };

  return (
    <div className="mt-4 md:pt-6 lg:pt-8 flex flex-col items-center justify-center min-h-screen px-0 md:px-20 lg:px-32 pb-8">
      <div className="pb-4 p-2 py-4 md:py-6 lg:py-8 md:px-12 lg:px-16 rounded shadow-xl relative md:border border-md border-gray-700">
        <h1 className="mb-6 max-w-sm text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
          {quizName} Quiz
        </h1>
        <div className="max-w-lg mx-auto">
          {questions.map((question, index) => (
            <div key={index} style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}>
              <TestComponent
                questionNumber={index + 1}
                question={question.question}
                correct={question.answer}
                displayAnswers={submitted}
                options={question.options}
                answer={handleAnswer}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-lg py-2 px-6 text-sm font-medium focus:outline-none"
          >
            Previous
          </button>
          <button
            onClick={
              currentQuestionIndex === questions.length - 1 ? handleSubmission : handleNext
            }
            className="bg-gradient-to-tr from-indigo-600 to-purple-500 text-white rounded-lg py-2 px-6 text-sm font-medium focus:outline-none"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
        {submitted && (
          <div className="mt-8 text-gray-900 dark:text-white font-semibold text-center">
            Score : {score} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
