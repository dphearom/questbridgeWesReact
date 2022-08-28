import Navbar from "../Navigation/Navbar.js";
import FooterMain from "../Footer/FooterMain.js";
import post1head from "./post1heading.jpg";
import post2head from "./post2head.jpg";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto">
        <div className="flex w-full">
          <h1 className="text-4xl border-b-black border-b-2 w-full pb-4 pt-4 font-bold font-sans mb-10">
            Blogs
          </h1>
        </div>
        <div>
          <div className="bg-white rounded-xl border shadow-md overflow-hidden w-full mx-auto">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={post1head}
                  alt="place holder"
                ></img>
              </div>
              <div className="p-8">
                <div class="uppercase tracking-wide text-sm text-wescolor font-semibold">
                  Tips
                </div>
                <Link
                  to="/blog/post1"
                  className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline"
                >
                  3 Things You Need to Do Before Starting a Work-Study Job
                </Link>
                <p className="text-gray-500">
                  {" "}
                  Melanie Garcia | August 2, 2022
                </p>
                <p className="mt-2 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border shadow-md overflow-hidden w-full mx-auto mt-5">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={post2head}
                  alt="place holder"
                ></img>
              </div>
              <div className="p-8">
                <div class="uppercase tracking-wide text-sm text-wescolor font-semibold">
                  Tips
                </div>
                <Link
                  to="/blog/post2"
                  className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline"
                >
                  Looking Ahead: 3 FGLI Resources That Are Worth Your Time
                </Link>
                <p className="text-gray-500">
                  {" "}
                  Melanie Garcia | August 2, 2022
                </p>
                <p className="mt-2 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
              </div>
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
