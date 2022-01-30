import React from "react";

export default function Filter({
  label,
  title,
  options,
  selected,
  handleSelected,
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={title}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {label}
        </label>
      )}
      <select
        id={title}
        value={selected}
        onChange={(e) => handleSelected(e.target.value)}
        className=" w-64 
      bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{title}</option>
        {options?.length &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}
