import React from "react";

import { getFromLocalStorage } from "utils/storage";

import Dashboard from "./Dashboard";

import { Header, Sidebar } from "../common";

const Post = () => {
  const userName = getFromLocalStorage("authUserName");

  return (
    <div className="flex h-screen">
      <Sidebar username={userName} />
      <div className="ml-28 flex w-full flex-col">
        {" "}
        {/* Ensure content starts after the sidebar */}
        <Header
          buttonText="Create New Post"
          heading="Blog"
          slug="/main/create"
        />
        <main className="flex-grow p-6 pt-20">
          {" "}
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Post;
