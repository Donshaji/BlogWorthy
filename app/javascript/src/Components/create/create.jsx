import React, { useState } from "react";

import { Button, Input, Textarea } from "@bigbinary/neetoui";
import { useHistory } from "react-router-dom";

import postsApi from "apis/Posts";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    upvotes: 0,
    downvotes: 0,
    is_blog_worthy: true,
  });

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = event => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === "is_blog_worthy" ? checked : value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      await postsApi.create({ ...formData });
      setLoading(false);
      history.push("/main");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Title"
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <Textarea
        label="Description"
        name="description"
        placeholder="Post Content"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <Button loading={loading} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Create;
