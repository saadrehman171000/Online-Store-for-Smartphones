import Image from "next/image";
import React from "react";
import logo from "@/public/logo2.jpg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto p-5 px-10 w-full">
        <div className="flex flex-col md:flex-row py-10 items-center justify-between gap-10">
          <div>
            <Link
              href={"/"}
              className="tracking-tight font-bold text-lg text-white"
            >
              Handphone
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <div>
              <Link href={"#"} className="font-bold">
                Product
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"#"}>Services</Link>
              <Link href={"#"}>Solutions</Link>
              <Link href={"#"}>Pricing</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <div>
              <Link href={"#"} className="font-bold">
                Resources
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>User guides</Link>
              <Link href={"#"}>Webinars</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <div>
              <h1 className="font-bold">Company</h1>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Join us</Link>
              <Link href={"#"}>Be with us</Link>
            </div>
          </div>
          <div>
            <div className="md:flex md:flex-col md:gap-3 md:text-white hidden">
              <h1 className="font-bold text-lg">Subscribe to our newsletter</h1>
              <h1>For product announcements and exclusive insights</h1>
              <div className="flex gap-2">
                <Input />
                <Button className="border-2 border-white rounded-md hover:bg-white hover:text-black transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
