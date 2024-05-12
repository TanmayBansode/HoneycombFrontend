import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = (roadmap, name) => {
  const pdf = new jsPDF("p", "px", "a4"); // Set PDF format to A4

  // Select the Checklist component by its ID
  const checklist = document.getElementById("checklist");

  // Convert the component to an image
  html2canvas(checklist, { scale: 2 }).then((canvas) => {
    // Adjust scale if needed
    const imgData = canvas.toDataURL("image/png");

    // Calculate width and height of the image
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add image to PDF with margins
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");

    // Save the PDF with the provided name
    pdf.save(`${name}.pdf`);
  });
};

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
    generatePDF(roadmap, name);
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
        <div id="checklist" className="pb-24 p-2 md:p-6 lg:p-8 rounded shadow-xl relative border border-md border-gray-700">
          <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-center">
            {name}
          </h1>
          {roadmap.map((phase, index) => (
            <ChecklistPhase
              key={index}
              title={phase.title}
              items={phase.steps}
            />
          ))}
          <div
            onClick={handlePrint}
            className="w-32 py-1 rounded-md bg-gradient-to-tr from-indigo-600 to-purple-500 p-0.5 absolute bottom-2 right-8"
          >
            <div className="h-full rounded-md  flex items-center justify-center">
              <button className="text-2xl font-manrope font-bold text-white">
                Print
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white">No roadmap available.</p>
      )}
    </>
  );
};

export default Checklist;
