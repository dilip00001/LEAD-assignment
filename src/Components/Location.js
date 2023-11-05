import React from "react";

function Location({ location, error, isLoading, onClear }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!location) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2>Location Information:</h2>
      <p>Country: {location.country}</p>
      <p>State: {location.state}</p>
      <p>Place Name: {location.placeName}</p>
      <button
        onClick={onClear}
        className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer"
      >
        Clear
      </button>
    </div>
  );
}

export default Location;
