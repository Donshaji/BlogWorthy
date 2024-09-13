import React from "react";

import { Button } from "@bigbinary/neetoui";
import { resetAuthTokens } from "src/apis/axios";

import authApi from "apis/auth";
import { setToLocalStorage } from "utils/storage";

import profilePic from "../../resources/profilePic.png";

const Sidebar = ({ username = "User" }) => {
  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        userName: null,
      });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      logger.error(error); // Log any errors
    }
  };

  return (
    <aside className="fixed bottom-0 top-0 w-28 bg-gray-50 shadow-md">
      <div className="mb-4 flex h-full flex-col items-center justify-end">
        <img
          alt={`${username}'s Profile`} // Improve alt text
          className="h-12 w-12 rounded-full"
          src={profilePic}
        />
        <h5 className="mb-4 mt-1 text-sm font-semibold text-gray-700">
          {username}
        </h5>
        <Button
          className="m-2"
          label="Log Out"
          style="danger"
          onClick={handleLogout} // Logout on button click
        />
      </div>
    </aside>
  );
};

export default Sidebar;
