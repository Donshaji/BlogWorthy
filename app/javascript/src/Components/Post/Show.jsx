import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";

import postsApi from "apis/posts";
import { PageLoader, Sidebar, Header } from "components/common";
import { getFromLocalStorage } from "utils/storage";

import Card from "./Card";

const Show = () => {
  const [post, setPost] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const { slug } = useParams();
  const history = useHistory();

  const userName = getFromLocalStorage("authUserName");

  const fetchPostDetails = async () => {
    try {
      const {
        data: { post },
      } = await postsApi.show(slug);
      setPost(post);
      setPageLoading(false);
    } catch (error) {
      logger.error(error);
      history.push("/");
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar username={userName} />
      <div className="ml-28 flex w-full flex-col">
        {" "}
        {/* Ensure content starts after the sidebar */}
        <Header buttonText="View All Posts" heading="Blog" slug="/main" />
        <main className="flex-grow p-6 pt-20">
          {" "}
          <Card
            author=""
            content={post.description}
            downvotes={post.downvotes}
            title={post.title}
            upvotes={post.upvotes}
          />
        </main>
      </div>
    </div>
  );
};

export default Show;
