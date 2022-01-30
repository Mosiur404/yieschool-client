import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import { assesments, subjects, classesList, sections } from "../dummyData";

function DueAssessmentAdmin({ menuOpen, toggleMenu }) {
  const navigate = useNavigate();

  const [subjectSelect, setSubjectSelect] = useState("");
  const [sectionSelect, setSectionSelect] = useState("");
  const [classSelect, setClassSelect] = useState("");

  const [filteredData, setFilteredData] = useState([...assesments]);

  // link from select top right
  const handleSelectLink = (e) => {
    if (e.target.value === "teacher") navigate("/assessment/teacher");
  };

  useEffect(() => {
    let temp = [...assesments];
    if (subjectSelect !== "")
      temp = temp.filter((a) => a.subject === subjectSelect);

    if (classSelect !== "")
      temp = temp.filter((a) => a.class === parseInt(classSelect));

    setFilteredData(temp);
  }, [subjectSelect, classSelect]);

  const handleClear = () => {
    setSubjectSelect("");
    setSectionSelect("");
    setClassSelect("");
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar menuOpen={menuOpen} />
      {/* section right */}
      <div className="flex-grow bg-green-200 p-4 space-y-4">
        <div className="flex justify-between mb-6 pb-4">
          <div className="flex flex-row">
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

            <h1 className="font-semibold base">Due Assessments</h1>
          </div>
          <select
            onChange={handleSelectLink}
            className="ml-2 w-64 bg-transparent border border-purple-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div className="flex space-x-4">
          {/* Filters  */}
          <div className="flex flex-col space-y-4">
            <Filter
              title="Subject"
              options={subjects}
              selected={subjectSelect}
              handleSelected={setSubjectSelect}
            />
            <Filter
              title="Class"
              options={classesList}
              selected={classSelect}
              handleSelected={setClassSelect}
            />
            <Filter
              title="Section"
              options={sections}
              selected={sectionSelect}
              handleSelected={setSectionSelect}
            />
            <div>
              <button
                onClick={handleClear}
                type="button"
                className=" text-gray-900 bg-gray-50 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex-grow p-4 bg-gray-50 rounded">
            <h2 className="font-semibold base mb-2">Completion Summery</h2>
            <p className="leading">Teacher Name: Hawking</p>
            <p className="leading">Assessment Completion: 40%</p>
            <div className="flex">
              <span className="leading mr-2">Aggregate of Completion: </span>
              <div className="w-40 bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="flex items-center justify-center h-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "45%" }}
                >
                  <span> 45%</span>
                </div>
              </div>
            </div>
            <p className="leading">Classes Taught: 41</p>
          </div>
        </div>
        {/* Table  */}
        <div className="flex flex-col">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Class
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Due Date
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                >
                  Assessment
                </th>
              </tr>
            </thead>
            <tbody>
              {/* table item */}
              {filteredData &&
                filteredData.map((assesment, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {assesment.subject}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Class {assesment.class}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {assesment.dueDate}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="/"
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex space-x-4 mt-6">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View Completed Assessments
              </span>
            </button>
            <Link to="/assessment/create">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Create Assessment
                </span>
              </button>
            </Link>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Notify Assessment
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DueAssessmentAdmin;
