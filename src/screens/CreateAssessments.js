import React, { useState } from "react";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import { subjects, classesList, fileTypes } from "../dummyData";

export default function CreateAssessments({ menuOpen, toggleMenu }) {
  const [subjectSelect, setSubjectSelect] = useState("");
  const [fileTypeSelect, setFileTypeSelect] = useState("");
  const [classSelect, setClassSelect] = useState("");
  return (
    <div className="flex flex-row h-screen">
      <Sidebar menuOpen={menuOpen} />
      {/* section right */}
      <div className="flex flex-col flex-grow bg-green-200 p-4 space-y-4">
        <div className="flex flex-row items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer p-0.5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <h1 className="font-semibold base">Upload Assessments</h1>
        </div>
        <div className="flex-grow w-full bg-white rounded p-4 space-y-4">
          <div className="flex space-x-4">
            <Filter
              title="Subject"
              options={subjects}
              selected={subjectSelect}
              handleSelected={setSubjectSelect}
              label="Select your subject"
            />
            <Filter
              title="Class"
              options={classesList}
              selected={classSelect}
              handleSelected={setClassSelect}
              label="Select your class"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label
                htmlFor="date"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Date of publishing
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <Filter
              title="Filetype"
              options={fileTypes}
              selected={fileTypeSelect}
              handleSelected={setFileTypeSelect}
              label="Select file type"
            />
          </div>
          <div>
            <label
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="attachFile"
            >
              Attach File
            </label>
            <input
              className=" w-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="Attach File"
              id="attachFile"
              type="file"
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="attachFile"
            >
              File type must match with the above given filetype.
            </div>
          </div>
          <div>
            <label
              htmlFor="notify-class"
              className="flex relative items-center mb-4 cursor-pointer"
            >
              <input type="checkbox" id="notify-class" className="sr-only" />
              <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Notify Class
              </span>
            </label>
          </div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          >
            Submit Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
