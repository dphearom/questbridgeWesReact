import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import overhead from "./overhead.jpg";
import Bella from "./bella";
import Pin from "./pin";
import Pelumi from "./pelumi";
import Melanie from "./melanie";
import Justin from "./justin";
import Ahmed from "./ahmed";
import Darling from "./darling";
import Kelleigh from "./kelleigh";
import Rome from "./rome";
import Elizabeth from "./elizabeth";

export default function About() {
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
          <h1 className="mt-3 font-bold">Our Statement</h1>
          <div className="mt-5 text-base">
            <p>
              We value transparency and authenticity; in the past, the
              Quesbridge Chapter at Wesleyan has struggled to provide an
              inclusive space, social events, and sense of community. Our board
              aims to change that narrative; each member of the executive board
              is highly motivated, excited, and focused on bringing this change
              to life. We value your voice, so please contact us or any member
              below if you have any suggestions, comments, or concerns or if you
              would like to hear more about what projects we are working on.
            </p>
          </div>
        </div>

        {/* About page cards for all members, indentations to represent the row separation*/}

        <div className="mt-10 w-full pb-12">
          <h1 className="pb-5 font-bold">Our Boards</h1>
          <div className=" container flex flex-wrap md:flex-row sm:flex-col justify-between max-w-full">
            <Bella />
            <Pin />
            <Elizabeth />
            <Pelumi />
            <Melanie />
            <Kelleigh />
            <Justin />
            <Ahmed />
            <Darling />
            <Rome />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
