import React from "react";
import Image from "next/image";
import { LuDot } from "react-icons/lu";

const comments = [
  {
    id: 1,
    name: "Annette Black",
    date: "26 Apr, 2021",
    text: "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
    profileImage: "/comment/user1.svg",
  },
  {
    id: 2,
    name: "Devon Lane",
    date: "24 Apr, 2021",
    text: "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
    profileImage: "/comment/user2.svg",
  },
  {
    id: 3,
    name: "Jacob Jones",
    date: "20 Apr, 2021",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    profileImage: "/comment/user3.svg",
  },
  {
    id: 4,
    name: "Jane Cooper",
    date: "18 Apr, 2021",
    text: "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
    profileImage: "/comment/user4.svg",
  },
  {
    id: 5,
    name: "Darrell Steward",
    date: "7 Apr, 2021",
    text: "Nulla molestie interdum ultricies. ",
    profileImage: "/comment/user5.svg",
  },
];

const Comment = () => {
  return (
    <div className="w-full py-10 gap-5">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex items-start space-x-4 p-4 bg-white"
        >
          <Image
            src={comment.profileImage}
            alt={comment.name}
            width={40}
            height={40}
          />
          <div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold">{comment.name}</p>
              <span>
                <LuDot />
              </span>
              <span className="text-gray-500 text-sm">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
