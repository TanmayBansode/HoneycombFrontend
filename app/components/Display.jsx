import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from "react-icons/fa6";

export const Display = ({ text }) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="my-4 relative rounded overflow-hidden shadow-lg border border-md border-gray-600">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">Rewritten Material</div>
        
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          {copyStatus && <p className="text-sm text-green-200 mb-0">Copied!</p>}
          <CopyToClipboard text={text} onCopy={onCopyText}>
          <button
              className="text-white bg-transparent hover:bg-gradient-to-tr from-indigo-600 to-purple-500 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-transparent dark:hover:bg-gradient-to-tr from-indigo-600 to-purple-500"
            >
              <FaRegCopy className="w-6 h-6" />
            </button>
          </CopyToClipboard>
        </div>

        <div className="text-gray-400 text-md mt-4">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
