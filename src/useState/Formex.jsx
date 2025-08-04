import React, { useState } from 'react';

const Formex = () => {
  const [formData, setFormData] = useState(""); // for input field
  const [displayText, setDisplayText] = useState(""); // for showing above

  const handleChange = (e) => {
    setFormData(e.target.value); // update input
    setDisplayText(e.target.value); // update display
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refresh
    setFormData(""); // clear input
  };

  return (
    <div className="form-example">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>{displayText}</h1> {/* Shows live typed name */}
          <input
            type="text"
            placeholder="Type something..."
            value={formData}
            onChange={handleChange}
          />
        </form>
        <br />
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Formex;
