import React from "react";

import profilePic from "../../resources/profilePic.png";

const Sidebar = (
  { username = "User" } // Default value for username
) => (
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
      {/* Margin for spacing */}
    </div>
  </aside>
);

export default Sidebar;
