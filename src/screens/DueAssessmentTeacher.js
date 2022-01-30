import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/Filter";
import Sidebar from "../components/Sidebar";
import { assesments, subjects, classesList, teachers } from "../dummyData";

function DueAssessmentTeacher({ menuOpen, toggleMenu }) {
  const navigate = useNavigate();
  const [subjectSelect, setSubjectSelect] = useState("");
  const [teacherSelect, setTeacherSelect] = useState("");
  const [classSelect, setClassSelect] = useState("");

  const [filteredData, setFilteredData] = useState([...assesments]);

  // link from select top right
  const handleSelectLink = (e) => {
    if (e.target.value === "admin") navigate("/assessment/admin");
  };

  useEffect(() => {
    let temp = [...assesments];
    if (subjectSelect !== "")
      temp = temp.filter((a) => a.subject === subjectSelect);

    if (teacherSelect !== "")
      temp = temp.filter((a) => a.teacher.id === parseInt(teacherSelect));

    if (classSelect !== "")
      temp = temp.filter((a) => a.class === parseInt(classSelect));

    setFilteredData(temp);
  }, [subjectSelect, teacherSelect, classSelect]);

  const handleClear = () => {
    setSubjectSelect("");
    setTeacherSelect("");
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
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {/* Filters  */}
        <div className="flex space-x-4">
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
          <div>
            <select
              value={teacherSelect}
              onChange={(e) => setTeacherSelect(e.target.value)}
              className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Teacher</option>
              {teachers?.length &&
                teachers.map((t, index) => (
                  <option key={index} value={t.id}>
                    {t.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            onClick={handleClear}
            type="button"
            className="text-gray-900 bg-gray-50 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
          >
            Clear
          </button>
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
                  Teacher
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
              {/* <!-- items --> */}
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
                      {assesment.teacher.name}
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
                Notify Assessemnt
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DueAssessmentTeacher;
