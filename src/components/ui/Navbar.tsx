"use client";
import { navbarItems } from "@/data/navbar";
import { Button } from "./button";
import logo from "/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";

const MobileNav: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${className} bg-accent-foreground z-10 w-full flex flex-col gap-5 items-center absolute top-14 right-[50%] translate-x-[50%] p-4`}
    >
      <ul className={`${className} flex flex-col gap-[14px] items-center`}>
        {navbarItems.map((item) => (
          <li>
            <a className="text-surface text-sm" href={item.href}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <Button className="bg-secondary w-full font-bold">Get App</Button>
    </div>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNavBar = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent max-w-[1440px] mx-auto">
      <a href="/" className="">
        <img src={logo} alt="" />
      </a>

      <div>
        <MobileNav className={`${openNav ? "block" : "hidden"}`} />
        <ul className="hidden sm:flex gap-8 items-center">
          {navbarItems.map((item) => (
            <li>
              <a className="text-surface text-sm" href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNavBar}
        className="ml-auto sm:hidden right-0 top-0 size-6 font-extrabold cursor-pointer"
      >
        <Menu className={`${openNav ? "hidden" : "block"} siz-full`} />
        <X className={`${openNav ? "block" : "hidden"} siz-full`} />
      </div>
      <div className="">
        <Button
          variant={"outline"}
          className="hidden sm:block border border-secondary text-surface hover:text-surface hover:bg-transparent cursor-pointer"
        >
          Get App
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
