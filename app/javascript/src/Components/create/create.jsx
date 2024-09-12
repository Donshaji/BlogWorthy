import React, { useState } from "react";

const Create = ({ title, description }) => {
  const [formData, setFormData] = useState({
    title: title || "",
    description: description || "",
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to an API)

    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label>Description:</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
