import React from 'react';

const CopyableCodeBlock = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const lines = code.split('\n');

  return (
    <div className="my-4 mx-auto w-full border border-gray-600 rounded-md overflow-hidden bg-gray-800">
      <pre 
        className="cursor-pointer p-4 bg-gray-900"
        onClick={handleCopy}  
      >
        <code className="block w-full">
          {lines.map((line, index) => (
            <div key={index} className="flex flex-col sm:flex-row min-w-[300px]">
              <span className="text-gray-500 pr-2">{index + 1}</span>
              <span className="whitespace-pre-wrap text-white break-words">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

export default CopyableCodeBlock;
