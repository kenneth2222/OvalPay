import { navbarItems } from "@/data/navbar";
import { Button } from "./button";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent mx-90">
      <a href="/" className="">
        <img src={logo} alt="" />
      </a>
      <div>
        <ul className="sm:flex gap-8 items-center">
          {navbarItems.map((item) => (
            <li>
              <a className="text-surface text-sm" href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <Button
          variant={"outline"}
          className="border border-secondary text-surface hover:text-surface hover:bg-transparent cursor-pointer"
        >
          Get App
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
