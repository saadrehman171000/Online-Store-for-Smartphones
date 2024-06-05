"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="px-10 flex flex-col gap-8 pb-20">
      <Link
        href={"/dashboard"}
        className={`${
          pathname === "/dashboard"
            ? "bg-black text-white rounded-2xl px-5 py-2"
            : "hover:bg-black hover:text-white hover:rounded-2xl "
        }  tracking-tighter text-xl transition-all duration-300 px-5 py-2 font-extralight`}
      >
        Add Products
      </Link>
      <Link
        href={"/view-products"}
        className={`${
          pathname === "/view-products"
            ? "bg-black text-white rounded-2xl px-5 py-2"
            : "hover:bg-black hover:text-white hover:rounded-2xl "
        } font-extralight tracking-tighter text-xl transition-all duration-300 px-5 py-2`}
      >
        View Products
      </Link>
      <Link
        href={"/view-orders"}
        className={`${
          pathname === "/view-orders"
            ? "bg-black text-white rounded-2xl px-5 py-2"
            : "hover:bg-black hover:text-white hover:rounded-2xl "
        } font-extralight tracking-tighter text-xl transition-all duration-300 px-5 py-2`}
      >
        View Orders
      </Link>
      <Link
        href={"/add-blog"}
        className={`${
          pathname === "/add-blog"
            ? "bg-black text-white rounded-2xl px-5 py-2"
            : "hover:bg-black hover:text-white hover:rounded-2xl "
        } font-extralight tracking-tighter text-xl transition-all duration-300 px-5 py-2`}
      >
        Add Blog
      </Link>
      <Link
        href={"/edit-contact"}
        className={`${
          pathname === "/edit-contact"
            ? "bg-black text-white rounded-2xl px-5 py-2"
            : "hover:bg-black hover:text-white hover:rounded-2xl "
        } font-extralight tracking-tighter text-xl transition-all duration-300 px-5 py-2`}
      >
        View Contact Details
      </Link>
    </div>
  );
};

export default Sidebar;
