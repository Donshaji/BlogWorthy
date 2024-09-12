import React from "react";

import Create from "./Create";

import { Header, Sidebar } from "../common";

const Post = () => (
  <div className="flex h-screen">
    <Sidebar username="John Doe" />
    <div className="ml-28 flex w-full flex-col">
      {" "}
      {/* Ensure content starts after the sidebar */}
      <Header buttonText="View All Posts" heading="Blog" slug="/main" />
      <main className="flex-grow p-6 pt-20">
        <Create />
      </main>
    </div>
  </div>
);

export default Post;
