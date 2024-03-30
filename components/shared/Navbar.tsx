"use client";
import React, { useState, useEffect } from "react";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
const Navbar = ({ dashboard }: { dashboard: boolean }) => {
  const TOP_OFFSET = 50;
  const { isAuthenticated } = useKindeBrowserClient();

  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-5 px-10 w-full font-extralight fixed ${
        showBackground ? "bg-white shadow-lg ring-1 ring-black/5" : "bg-white"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link href={"/"} className="tracking-tight font-bold text-lg">
            Handphone
          </Link>
        </div>
        <div className="flex gap-10">
          <Link
            className={`${pathname === "/" ? "font-bold" : "text-black"}`}
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className={`${pathname === "/page" ? "font-bold" : "text-black"}`}
            href={"/page"}
          >
            PAGE
          </Link>
          <Link
            className={`${pathname === "/brand" ? "font-bold" : "text-black"}`}
            href={"/brand"}
          >
            BRAND
          </Link>
          <Link
            className={`${pathname === "/blog" ? "font-bold" : "text-black"}`}
            href={"/blog"}
          >
            BLOG
          </Link>
          <Link
            className={`${pathname === "/about" ? "font-bold" : "text-black"}`}
            href={"/about"}
          >
            ABOUT
          </Link>
          <Link
            className={`${
              pathname === "/contact" ? "font-bold" : "text-black"
            }`}
            href={"/contact"}
          >
            CONTACT
          </Link>
        </div>
        <div className="flex gap-4">
          <Search />
          <ShoppingCart />
          <div>
            {!isAuthenticated ? (
              <div className="flex gap-2">
                <LoginLink className="rounded-2xl border px-3 py-1">
                  Sign In
                </LoginLink>
                <RegisterLink className="rounded-2xl border bg-black px-3 py-1 text-white">
                  {" "}
                  Sign up
                </RegisterLink>
              </div>
            ) : (
              <div className="flex gap-2 items-center justify-center">
                {!dashboard ? (
                  <h1 className="font-bold tracking-tight text-lg">Welcome!</h1>
                ) : (
                  <Link
                    href={"/dashboard"}
                    className="bg-black rounded-2xl text-white px-3 py-1"
                  >
                    Dashboard
                  </Link>
                )}

                <LogoutLink className="rounded-2xl border px-3 py-1 bg-black text-white">
                  Logout
                </LogoutLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
