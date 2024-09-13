import React from "react";

import { getFromLocalStorage } from "utils/storage";

import Create from "./Create";

import { Header, Sidebar } from "../common";

const Post = () => {
  const userName = getFromLocalStorage("authUserName");

  return (
    <div className="flex h-screen">
      <Sidebar username={userName} />
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
};

export default Post;
