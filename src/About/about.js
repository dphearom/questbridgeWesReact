import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import overhead from "./overhead.jpg";

export default function about() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap text-4xl mx-auto container px-4">
        <div className="mb-3">
          <div className="overflow-hidden container w-full top-0">
            <img
              src={overhead}
              alt="Campus Cover"
              className="h-96 w-full object-cover"
            />
          </div>
          <h1 className="mt-3">Our Statement</h1>
          <div className="mt-5 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="mt-10 w-full">
          <h1 className="pb-5">Our Members</h1>
          <div className="flex flex-wrap gap-9 justify-evenly justify-items-center h-12">
            <div className="shrink-0 border-2 rounded-lg basis-1/4 min-w-0">
              <h3 className="text-center">Lorep Ipsum</h3>
            </div>
            <div className="shrink-0 border-2 rounded-lg basis-1/4 min-w-0">
                <h3 className="text-center">Lorep Ipsum</h3>
            </div>
            <div className="shrink-0 border-2 rounded-lg basis-1/4 min-w-0">
                <h3 className="text-center">Lorep Ipsum</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
