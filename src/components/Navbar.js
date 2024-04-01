import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <nav className="top-0 fixed z-20 shadow-md w-full bg-white">
        <div className="flex justify-between items-center  p-4 mt-2 lg:mx-14">
          <div>
            <img
              src="https://marketing-assets.calendly.com/media/logo.svg"
              alt="logo"
              width={170}
            />
          </div>
          <div>
            <ul className="lg:flex lg:gap-8 gap-4 font-bold font-mulish hidden">
              <li>Individuals</li>
              <li>Teams</li>
              <li>Enterprise</li>
              <li className="group flex cursor-pointer">
                Product{" "}
                <span>
                  <RiArrowDropDownLine
                    size={25}
                    className="group-hover:rotate-180 duration-200"
                  />
                </span>
              </li>
              <li>Pricing</li>
              <li className="group flex cursor-pointer">
                Resources{" "}
                <span>
                  <RiArrowDropDownLine
                    size={25}
                    className="group-hover:rotate-180 duration-200"
                  />
                </span>
              </li>
            </ul>
          </div>
          <div className="space-x-4 flex">
            <button className="font-bold hidden md:block">Log In</button>
            <button className="bg-primary hidden md:block text-white font-semibold px-6 py-3 rounded-full text-sm">
              Get started
            </button>
            <span
              className="lg:hidden transition-all duration-300"
              onClick={handleToggle}
            >
              {!isToggle ? (
                <HiBars3CenterLeft
                  size={42}
                  className="text-black font-semibold"
                />
              ) : (
                <RxCross1 size={38} className="text-black font-semibold" />
              )}
            </span>
          </div>
        </div>
        {/* mobile device */}
        <div
          className={` ${
            isToggle ? "-translate-x-0" : "-translate-x-full"
          } absolute w-full bg-white
         z-40 transform transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div>
            <ul className="flex-col  font-bold font-mulish text-secondary text-xl mx-4 mt-4">
              <li className="border-t border-slate-200 py-4">Individuals</li>
              <li className="border-t border-slate-200 py-4">Teams</li>
              <li className="border-t border-slate-200 py-4">Enterprise</li>
              <li className="group flex cursor-pointer border-t border-slate-200 py-4">
                Product{" "}
                <span>
                  <RiArrowDropDownLine
                    size={25}
                    className="group-hover:rotate-180 duration-200"
                  />
                </span>
              </li>
              <li className="border-t border-slate-200 py-4">Pricing</li>
              <li className="group flex cursor-pointer border-t border-b border-slate-200 py-4">
                Resources{" "}
                <span>
                  <RiArrowDropDownLine
                    size={25}
                    className="group-hover:rotate-180 duration-200"
                  />
                </span>
              </li>
            </ul>
          </div>
          <div className="p-4 flex flex-col space-y-4 mt-4">
            <button className="font-bold md:hidden text-secondary">
              Log In
            </button>
            <button className="bg-primary md:hidden py-4 text-white font-semibold rounded-md text-md">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
