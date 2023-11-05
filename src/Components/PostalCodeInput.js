import React, { useState } from "react";

function PostalCodeInput({ onSubmit }) {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postalCode);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Enter Postal Code "
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="w-fit px-4 py-2 border rounded-md border-black "
      />
      <button
        className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer "
        type="submit"
      >
        Get Location Info
      </button>
    </form>
  );
}

export default PostalCodeInput;
