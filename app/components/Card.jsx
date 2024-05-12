import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ title, description, imageLink, link }) => {
  return (
    <Link href={"/" + link}>
    <div className="max-w-xs my-4 rounded overflow-hidden shadow-lg border border-md border-gray-600 transition-transform duration-300 transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={"/" + imageLink}
          alt="Sunset in the mountains"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
    </Link>
  );
};
