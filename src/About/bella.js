import React from "react";
import bella from "../image/bella.png";

export default function Bella() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-0">
      <div className="flex flex-col bg-gray-100 justify-between text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <div className=" font-semibold ">
          <img
            class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover"
            src={bella}
            alt="Bella Nun's profile "
          />
          <h1 class="text-lg text-gray-700"> Bella Nunn </h1>
          <h3 class="text-sm text-gray-400 "> President </h3>
          <p class="text-xs text-left text-gray-400 mt-4">
            <span className="font-bold">Fun Fact:</span> I didn't watch any of the Star Wars movies until I was 17!
          </p>
        </div>
        <div>
          <button
            className="bg-wescolor text-white active:bg-wescolordark font-bold uppercase text-sm mt-7 px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Read More
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Bella Nunn</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className=" text-black ">×</span>
                      </button>
                    </div>
                    <div className="relative p-4 flex-auto">
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/3 text-base">
                          <span className="font-bold">Hometown:</span>{" "}
                          <span className="text-slate-500">
                            {" "}
                            Austin, Texas{" "}
                          </span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Email:</span>{" "}
                          <span className="text-blue-500 underline">
                            bunn@wesleyan.edu
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/3 text-base">
                          <span className="font-bold ">Class Year:</span>
                          <span className="text-slate-500"> 2024</span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Major\Minor:</span>
                          <span className="text-slate-500">
                            {" "}
                            Earth & Environmental Science\Data Analysis Minor
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-left mt-4 font-bold">
                        What does QuestBridge mean to you?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        For me, QuestBridge is a really great community of FGLI
                        students that come from similar backgrounds that work
                        together to navigate everything college and career
                        related. We're really just a giant group of friends that
                        all look out for each other!
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Why are you excited about this role?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        I am really excited to continue building our chapter and
                        stay involved with the QB and Wesleyan communities!
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Word of Advice?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        Take advantage of all the resources available and don't
                        be afraid to ask questions!
                      </p>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-wescolor text-white active:bg-wescolordark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
