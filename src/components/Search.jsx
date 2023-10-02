import { memo } from "react";

const Search = ({ handleChange }) => {
  console.log("search rendered");
  return (
    <input
      type="text"
      className="p-2 bg-transparent ring-blue-600 ring-2 rounded-lg outline-none text-white"
      onChange={handleChange}
    />
  );
};

export default memo(Search);
