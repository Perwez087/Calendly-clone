import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-around py-10 mt-12">
        <div className="flex flex-col gap-2 lg:w-[55%] lg:mx-0 mx-4">
          <h1 className="text-4xl text-secondary font-bold">Easy</h1>
          <span className="text-4xl text-primary font-bold">ahead</span>
          <p className="py-4 w-[60%] text-lg">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>

          <form>
            <select className="w-[70%] border border-slate-300 rounded-md outline-none py-2 text-md font-bold px-2">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </form>

          <div className="flex gap-4">
            <img src="app-store.png" alt="apple" width={110} />
            <img src="google-play.png" alt="google" width={110} />
          </div>

          <div className="flex gap-4">
            <span>
              <FaTwitter size={20} />
            </span>
            <span>
              <FaFacebookF size={20} />
            </span>
            <span>
              <FaInstagram size={20} />
            </span>
            <span>
              <FaLinkedinIn size={20} />
            </span>
            <span>
              <FiYoutube size={20} />
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 w-[80%] lg:mt-0 mt-8 lg:mx-0 mx-4">
          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">About</h1>
            <ul className="space-y-4 text-secondary">
              <li>About Calendly</li>
              <li>Contact Sales</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Security</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">Solutions</h1>
            <ul className="space-y-4 text-secondary">
              <li>Customer Success</li>
              <li>Sales</li>
              <li>Recruiting</li>
              <li>Information Technology</li>
              <li>Marketing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">
              Popular Features
            </h1>
            <ul className="space-y-4 text-secondary">
              <li>Embed Calendly</li>
              <li>Availability</li>
              <li>Sending Notifications</li>
              <li>Using Calendly Mobile</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">Support</h1>
            <ul className="space-y-4 text-secondary">
              <li>Help Center</li>
              <li>Video Tutorials</li>
              <li>Cookie Settings</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">Add-Ons</h1>
            <ul className="space-y-4 text-secondary">
              <li>Download for Chrome</li>
              <li>Download for Firefox</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-secondary text-xl font-extrabold">
              Developers
            </h1>
            <ul className="space-y-4 text-secondary">
              <li>Developers Tools</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:mx-0 mx-4">
        <div className="py-4 text-xs text-gray">
          <p>Copyright Calendly 2022</p>
        </div>
        <div className="py-4 text-xs text-gray">
          <p>Privacy / Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
