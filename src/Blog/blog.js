import Navbar from "../Navigation/Navbar.js";
import FooterMain from "../Footer/FooterMain.js";
import holder from "./holder.jpg";

export default function Blog() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto pt-10">
        {/* <div className="flex">
          <div className="bg-gray-100 rounded-3xl border shadow-lg p-10 w-full md:flex-row flex flex-wrap sm:flex-col">
            <div className="">
              <img
                className="h-40 w-50"
                src={holder}
                alt="holder for blog post"
              ></img>
            </div>
            <div className="flex-1 pl-3 ">
              <h1 className="text-4xl text-gray-700 pt-6"> 3 Things You Need to Do Before Starting a Work-Study Job </h1>
              <h2 className="text-xl text-gray-400 pt-1">Melanie Garcia | August 2, 2022</h2> 
              <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-wescolor0 hover:bg-wescolor1 md:py-1 md:text-lg md:px-4 md:my-4">Read More</button>
            </div>
          </div>
        </div> */}
        <div className="bg-white rounded-xl border shadow-md overflow-hidden w-full mx-auto">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={holder}
                alt="place holder"
              ></img>
            </div>
            <div className="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Tips
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                3 Things You Need to Do Before Starting a Work-Study Job
              </a>
              <p className="text-gray-400"> Melanie Garcia | August 2, 2022</p>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border shadow-md overflow-hidden w-full mx-auto mt-5">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={holder}
                alt="place holder"
              ></img>
            </div>
            <div className="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Tips
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                3 Things You Need to Do Before Starting a Work-Study Job
              </a>
              <p className="text-gray-400"> Melanie Garcia | August 2, 2022</p>
              <p className="mt-2 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <FooterMain />
      </div>
    </>
  );
}
