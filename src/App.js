import React, { useState, useEffect } from "react";
import PostalCodeInput from "./Components/PostalCodeInput";
import Location from "./Components/Location";
import "./App.css";

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [postalCode, setPostalCode] = useState("");

  useEffect(() => {
    if (postalCode) {
      setLoading(true);
      setLocation(null);
      setError(null);

      fetch(`https://api.zippopotam.us/in/${postalCode}`)
        .then((response) => response.json())
        .then((data) => {
          setLocation({
            country: data.country,
            state: data.places[0].state,
            placeName: data.places[0]["place name"],
          });
        })
        .catch((err) => {
          setError("Unable to fetch location information");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [postalCode]);

  const fetchLocationInfo = (enteredPostalCode) => {
    setPostalCode(enteredPostalCode);
  };

  const clearLocationInfo = () => {
    setLocation(null);
    setError(null);
    setPostalCode("");
  };

  return (
    <div className="App h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Postal Code Location Information
      </h1>
      <PostalCodeInput onSubmit={fetchLocationInfo} />

      <Location
        location={location}
        error={error}
        isLoading={isLoading}
        onClear={clearLocationInfo}
      />
    </div>
  );
}

export default App;
