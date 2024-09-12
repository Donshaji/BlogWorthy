import React, { useState, useEffect } from "react";

import { isNil, isEmpty, either } from "ramda";

import postApi from "apis/posts";

import Card from "./Card";

import { PageLoader } from "../common";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const {
        data: { posts },
      } = await postApi.fetch();
      setPosts(posts);
      setLoading(false);
      // eslint-disable-next-line no-console
      console.log(posts);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="item-center h-screen w-screen justify-center">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(posts)) {
    return (
      <div>
        <h1 className="my-5 text-center text-xl leading-5">
          You have not created or been assigned any tasks 🥳
        </h1>
      </div>
    );
  }

  return (
    <>
      {posts.map(post => (
        <Card
          // author={post.author}
          content={post.description}
          downvotes={post.downvotes}
          key={post.id}
          slug={post.slug}
          title={post.title}
          upvotes={post.upvotes}
        />
      ))}
    </>
  );
};

export default Dashboard;
