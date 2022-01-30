import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center space-x-4">
      <Link to="/assessment/admin">
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Admin
        </button>
      </Link>
      <Link to="/assessment/teacher">
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Teacher
        </button>
      </Link>
      <Link to="/assessment/create">
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Create
        </button>
      </Link>
    </div>
  );
}
