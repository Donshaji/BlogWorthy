import React from "react";

import { Button } from "@bigbinary/neetoui";
import { useHistory } from "react-router-dom";

const Card = ({ title, author, content, upvotes, downvotes, slug }) => {
  const history = useHistory();
  const handleRedirect = () => {
    if (slug) {
      history.push(`posts/${slug}/show`);
    }
  };

  return (
    <div
      className="max-h-md m-8 max-w-full rounded-lg bg-white p-4 shadow-md"
      onClick={handleRedirect}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-gray-500">{author}</span>
      </div>
      <p className="text-gray-700">{content}</p>
      <div className="mt-4 flex items-center justify-end">
        <Button
          className="flex-column flex items-center rounded-full bg-green-300 p-2"
          label="UpVotes"
          onClick={e => {
            e.stopPropagation(); // Prevent navigation
            e.preventDefault(); // Prevent default button behavior
          }}
        >
          {upvotes}
        </Button>
        <Button
          className="flex-column ml-2 flex items-center rounded-full bg-red-300 p-2"
          label="DownVotes"
          onClick={e => {
            e.stopPropagation(); // Prevent navigation
            e.preventDefault(); // Prevent default button behavior
          }}
        >
          <span>{downvotes}</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
