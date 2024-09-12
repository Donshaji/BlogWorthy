import React from "react";

import { Up, Down } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui";

const Card = ({ title, author, content, upvotes, downvotes }) => (
  <div className="max-h-md m-8 max-w-full rounded-lg bg-white p-4 shadow-md">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-bold">{title}</h3>
      <span className="text-gray-500">{author}</span>
    </div>
    <p className="text-gray-700">{content}</p>
    <div className="mt-4 flex items-center justify-end">
      <Button className="flex-column flex items-center rounded-full bg-green-300 p-2">
        <Up className="text-green-700" />
        <span>{upvotes}</span>
      </Button>
      <Button className=" flex-column ml-2 flex items-center rounded-full bg-red-300 p-2">
        <Down className="text-red-700" />
        <span>{downvotes}</span>
      </Button>
    </div>
  </div>
);

export default Card;
