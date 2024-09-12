import React from "react";

import { Header, Sidebar } from "../common";

const Post = () => (
  <div className="flex h-screen">
    <Sidebar username="John Doe" />
    <div className="ml-28 flex w-full flex-col">
      {" "}
      {/* Ensure content starts after the sidebar */}
      <Header buttonText="Create New Post" heading="Blog" />
      <main className="flex-grow p-6 pt-20"> </main>
    </div>
  </div>
);

export default Post;
