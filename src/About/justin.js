import React from "react";
import justin from "../image/justin.JPG";

export default function Justin() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-0">
      <div className="flex flex-col bg-gray-100 justify-between text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <div className=" font-semibold ">
          <img
            class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover"
            src={justin}
            alt="Justin Profile"
          />
          <h1 class="text-lg text-gray-700"> Justin Nguyen </h1>
          <h3 class="text-sm text-gray-400 "> Class of 2023 Representative </h3>
          <p class="text-xs text-left text-gray-400 mt-4">
            <span className="font-bold">Fun Fact:</span> My fastest WPM is 135.<span className="text-transparent">This is white out to give the width more space.</span> 
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
                      <h3 className="text-3xl font-semibold">Justin Nguyen</h3>
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
                          <span className="text-slate-500"> Gardner, CT </span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Email:</span>{" "}
                          <span className="text-blue-500 underline">
                            jnguyen01@wesleyan.edu
                          </span>
                        </div>
                      </div>
                      <div className="flex md:flex-row sm:flex-col text-sm justify-start text-left">
                        <div className="md:w-1/3 text-base">
                          <span className="font-bold ">Class Year:</span>
                          <span className="text-slate-500"> 2023</span>
                        </div>
                        <div className="md:w-1/2 text-base">
                          <span className="font-bold ">Major\Minor:</span>
                          <span className="text-slate-500">
                            MB&B\Quantitative Data Analysis Minor, Molecular
                            Biophysics Minor
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-left mt-4 font-bold">
                        What does QuestBridge mean to you?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        Questbridge is a sign of hope, perseverance, and
                        community. Our generation, especially those of
                        underrepresented minorities, sons and daughters of
                        first-generation immigrants, or those stuck in
                        generational poverty, look towards education as a
                        solution for financial security. We preserved through
                        the tough times, we put in the extra mile to get to
                        where we need to be, and we made sacrifices to be the
                        person we may or may not have envisioned. Questbridge
                        gave us a blessing and an opportunity to connect with
                        fellow students and to work together in pursuing a
                        financially-secure reality.
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Why are you excited about this role?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        I love Wesleyan University. I think the college life
                        that I am currently experiencing here is amazing so far.
                        However, having met some QB scholars, to be truthful
                        with you, they seemed to feel disconnected, homesick, or
                        not welcomed at Wes; I had felt in those moments that we
                        were missing the inclusivity and connectedness among our
                        QB peers. My goal is to establish this place as a home
                        for all of the Questbridge scholars, both prospective,
                        incoming, and current, but to do that, we need
                        passionate voices that understand the wants and needs of
                        our peers. I believe I can represent that voice for the
                        QB class of 2023. I am dedicated, hopeful, and excited
                        to bring a new era to the QB chapter at Wesleyan and I
                        invite you to join us in this pursuit!
                      </p>
                      <p className="text-base text-left mt-4 font-bold">
                        Word of Advice?
                      </p>
                      <p className="text-slate-500 text-base text-left">
                        I had always silently laughed at the wisdom of adults
                        that kept telling us that "time flies by fast, enjoy it
                        while you can", but now that I am a rising senior, I
                        understand that wisdom all too well. College is a time
                        for discovery, learning, and independence. Take
                        advantage of the time here, work hard, and have fun!
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
