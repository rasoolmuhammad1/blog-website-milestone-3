import React from "react";
import Link from "next/link"
const Header = () => {
  return (
    <>
      <div className="h-2 p-10 w-full bg-teal-600 flex justify-between">
        <h1 className="flex gap-5 items-center text-4xl text-white font-semibold">
          Bloger
        </h1>
        <div className="flex gap-5 items-center text-4xl text-white font-semibold">
          <Link href="/" className="hover:text-red-900 transition-all">
            Home
          </Link>
          <a href="#" className="hover:text-red-900 transition-all">
            About
          </a>
          <a href="#" className="hover:text-red-900 transition-all">
            Blogs
          </a>
          <a href="#" className="hover:text-red-900 transition-all">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
