import React from "react";

const Table = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-20 py-10">
      <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green-700 text-white text-lg">
            <th className="border px-6 py-3 text-left">Web Form</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {[
            "Last Name",
            "Phone",
            "Email",
            "Subject",
            "Description",
            "Attachment",
          ].map((label, index) => (
            <tr key={index}>
              <td className="border px-4 py-3 font-medium">{label}</td>
              <td className="border px-4 py-3">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-green-700 text-white text-sm sm:text-base px-5 py-2 rounded-md hover:bg-green-800 transition-colors">
          Submit
        </button>
        <button className="bg-gray-500 text-white text-sm sm:text-base px-5 py-2 rounded-md hover:bg-gray-600 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Table;
