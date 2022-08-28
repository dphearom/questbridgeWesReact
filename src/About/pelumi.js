import React from "react";
import pelumi from "../image/pelumi.jpg"

export default function Pelumi() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-0">
      <div className="flex flex-col bg-gray-100 justify-between text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <div className=" font-semibold ">
          <img
            class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover"
            src={pelumi}
            alt="Pelumi Tayo-Orisadare Profile"
          />
          <h1 class="text-lg text-gray-700"> Pelumi Tayo-Orisadare </h1>
          <h3 class="text-sm text-gray-400 "> Event Coordinator </h3>
          <p class="text-xs text-left text-gray-400 mt-4">
            <span className="font-bold">Fun Fact:</span> I enjoy crocheting and
            playing tennis in my free time.
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
                        Pelumi Tayo-Orisadare
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
                        <div className="md:w-1/3 text-base">
                          <span className="font-bold">Hometown:</span>{" "}
                          <span className="text-slate-500">
                            {" "}
                            Lagos, Nigeria{" "}
                          </span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Email:</span>{" "}
                          <span className="text-blue-500 underline">
                            pelumi.tayoorisadare@gmail.com
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/3 text-base">
                          <span className="font-bold ">Class Year:</span>
                          <span className="text-slate-500"> 2025</span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Major\Minor:</span>
                          <span className="text-slate-500">
                            {" "}
                            Computer Science (Prospective)
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-left mt-4 font-bold">
                        What does QuestBridge mean to you?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        Questbridge meant a way for me to receive an excellent
                        education, at a great institution, without having to
                        worry about the financial obstacles that come with a
                        great education at a great institution. For me, my dream
                        school was a school I didn't have to pay for, and
                        QuestBridge helped me reach my goal and helped me meet
                        different people from different backgrounds at the same
                        time. I appreciate all that it has done for me!
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Why are you excited about this role?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        It is something I have never done before and I would
                        love to push myself out of my comfort zone and try new
                        things. As an avid enjoyed of going to events, I
                        thought, why not try to be a part of the
                        behind-the-scenes process, and here I am today.
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Word of Advice?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        Do not let anyone try to bring you down and make you
                        feel less than because of your financial status. You
                        came into this school on your own excellent merit and
                        you DESERVE a spot just like everyone else. Take
                        advantage of the school's resources because college is a
                        once-in-a-lifetime thing that can and will change your
                        life at the end of it all. Do your best to have it
                        create your own path and have college be a positive
                        impact on your life after school!
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
