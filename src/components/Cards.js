import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiBolt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa6";
const Cards = () => {
  return (
    <div>
      <div className="w-full max-w-6xl mx-auto mt-11 py-6">
        <p className="text-center text-primary font-medium">SOLUTIONS</p>
        <div className="py-4 mt-4 mx-auto">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-secondary">
            Calendly can solve your specific pain points
          </h1>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-6 mt-6 lg:mx-0 mx-8 lg:ml-4">

            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <TbTargetArrow size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Sales</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 h-[20vh]">
                  Spend more time selling, and less time on admin. Shorten your
                  sales cycle by letting prospects schedule while they're in
                  peak buying mode.
                </p>
                <div className="flex items-center py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-1">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <HiOutlineUserGroup size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Recruiting</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 h-[20vh]">
                  Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.
                </p>
                <div className="flex items-center py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-1">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <GiTeacher size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Education</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 lg:h-[20vh] md:h-[22vh]">
                  Control your office hours, and empower students and parents to schedule appointments easily.
                </p>
                <div className="flex items-center py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-1">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4 mt-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <BsGraphUpArrow size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Revenue Operations</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 h-[20vh]">
                  Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting.
                </p>
                <div className="flex items-cente6 py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-2">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4 mt-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <TfiBolt size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Marketing</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 h-[20vh]">
                  Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.
                </p>
                <div className="flex items-center py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-1">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-md border-slate-100 border-2 rounded-lg w-[93%] bg-white py-4 mt-4">
            <div className="flex flex-col gap-4 ml-6 py-4">
                <span className="text-primary">
                  <FaUsers size={30} />
                </span>
                <h1 className="text-xl font-semibold text-secondary">Customer Success</h1>
                <p className="text-[17px] w-[90%] text-gray leading-7 h-[20vh]">
                  Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness.
                </p>
                <div className="flex items-center py-2 text-primary text-lg gap-2 font-bold">
                  <button>Learn more</button>
                  <span className="mt-1">
                    <IoIosArrowForward size={15}/>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
