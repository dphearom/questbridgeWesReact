import React from "react";
import rome from "../image/rome.JPG";

export default function Rome() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-0">
      <div className="flex flex-col bg-gray-100 justify-between text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <div className=" font-semibold ">
          <img
            class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover"
            src={rome}
            alt="Pelumi Tayo-Orisadare Profile"
          />
          <h1 class="text-lg text-gray-700"> Phearom (Rome) Duong </h1>
          <h3 class="text-sm text-gray-400 "> Web developer </h3>
          <p class="text-xs text-left text-gray-400 mt-4">
            <span className="font-bold">Fun Fact:</span> I used to perform on
            horsebacks for four years.
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
                      <h3 className="text-3xl font-semibold">
                        Phearom (Rome) Duong
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className=" text-black ">×</span>
                      </button>
                    </div>
                    <div className="relative p-4 flex-auto">
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold">Hometown:</span>{" "}
                          <span className="text-slate-500">
                            {" "}
                            Siem Reap, Cambodia{" "}
                          </span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Email:</span>{" "}
                          <span className="text-blue-500 underline">
                            rduong@wesleyan.edu
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Class Year:</span>
                          <span className="text-slate-500"> 2023</span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Major\Minor:</span>
                          <span className="text-slate-500">
                            {" "}
                            Computer Science\Integrated Design, Engineering,
                            Arts & Society Minor
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-left mt-4 font-bold">
                        What does QuestBridge mean to you?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        QuestBridge helps open the door to many amazing
                        opportunities that I have never thought would be
                        possible. Growing up in a rural community, I have never
                        thought about the possibility of studying in a
                        prestigious college in another country. QuestBridge
                        makes this possible while giving me the chance to meet
                        and collaborate with amazing people from diverse
                        backgrounds.
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Why are you excited about this role?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        QuestBridge has given me the gift to learn and challenge
                        myself and I would like to apply my web development
                        knowledge to help build a platform and resources for
                        other QuestBridge scholars. Additionally, I am excited
                        to work with prospective web developers to help keep the
                        website up and running in the near future as well.
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Word of Advice?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        It is ok to not know everything, but that doesn't mean
                        giving yourself an excuse not to try to learn and
                        improve your understanding on the subjects. It takes
                        time, consistency, and patience to grow so it is
                        important to not put yourself down and be overly
                        critical of yourself.
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
