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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import menu from "@/public/menu.svg";

const Navbar = ({ dashboard }: { dashboard: boolean }) => {
  const TOP_OFFSET = 50;
  const { isAuthenticated, user } = useKindeBrowserClient();
  console.log(user);

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
          <Link href={"/"} className="tracking-tighter font-bold text-lg">
            Handphone
          </Link>
        </div>
        <div className="hidden md:block tracking-tighter">
          <div className="flex gap-10">
            <Link
              className={`${pathname === "/" ? "font-bold" : "text-black"}`}
              href={"/"}
            >
              HOME
            </Link>
            <Link
              className={`${
                pathname === "/products" ? "font-bold" : "text-black"
              }`}
              href={"/products"}
            >
              PRODUCTS
            </Link>

            <Link
              className={`${pathname === "/blog" ? "font-bold" : "text-black"}`}
              href={"/blog"}
            >
              BLOG
            </Link>
            <Link
              className={`${
                pathname === "/about" ? "font-bold" : "text-black"
              }`}
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
        </div>
        <div className="block md:hidden tracking-tighter">
          <Sheet>
            <SheetTrigger className="align-middle">
              <Image
                src={menu}
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
              <Link href={"/"} className="tracking-tight font-bold text-lg">
                Handphone
              </Link>
              <Separator className="border border-gray-50" />
              <div className="flex flex-col gap-5">
                <Link
                  className={`${pathname === "/" ? "font-bold" : "text-black"}`}
                  href={"/"}
                >
                  HOME
                </Link>
                <Link
                  className={`${
                    pathname === "/products" ? "font-bold" : "text-black"
                  }`}
                  href={"/products"}
                >
                  PRODUCTS
                </Link>

                <Link
                  className={`${
                    pathname === "/blog" ? "font-bold" : "text-black"
                  }`}
                  href={"/blog"}
                >
                  BLOG
                </Link>
                <Link
                  className={`${
                    pathname === "/about" ? "font-bold" : "text-black"
                  }`}
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
            </SheetContent>
          </Sheet>
        </div>

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
                  className="bg-black rounded-xl text-white px-3 py-1 tracking-tighter"
                >
                  DASHBOARD
                </Link>
              )}

              <LogoutLink className="rounded-xl border px-3 py-1 bg-black text-white tracking-tighter">
                LOGOUT
              </LogoutLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
