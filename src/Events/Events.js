import Nav from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import img0 from "./img0.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.JPG";
import img10 from "./img10.JPG";
import img11 from "./img11.jpg";
import img12 from "./img12.png";
import img13 from "./img13.png";
import img14 from "./img14.png";
import img15 from "./img15.png";

export default function Events() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col pb-10">
          <div className="flex w-full">
            <h1 className="text-4xl border-b-black border-b-2 w-full pb-4 pt-10 font-bold font-sans">
              Events
            </h1>
          </div>
          <div className="pt-10 text-center text-[1.3rem] ">
            <h1>Chapter Collective Meeting Fall 2021</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:items-start">
            <div className="md:w-1/4 sm:w-full">
              <img
                src={img0}
                alt="A QB scholaris grabbing food."
                className="md:h-full sm:object-contain md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img1}
                alt="QB scholars sitting in circle for conversations "
                className="md:h-full sm:object-contain md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img2}
                alt="A QB scholars discussion group"
                className="md:h-full sm:object-contain md:object-fill"
              />
            </div>
          </div>
          <div className="pt-10 text-center text-[1.3rem]">
            <h1>Executive Board Meeting Fall 2021</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:justify-center">
            <div className="md:w-[40%] sm:w-full">
              <img
                src={img3}
                alt="QB Executive board meeting"
                className="md:h-full sm:object-contain md:object-fill md:w-[90%]"
              />
            </div>
          </div>
          <div className="pt-10 text-center text-[1.3rem]">
            <h1>Halloween Event | October 31, 2021</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:items-center">
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img4}
                alt="QB Scholars in halloween costume"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img5}
                alt="QB Scholars in halloween costume"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img6}
                alt="QB Scholars in halloween costume"
                className="md:h-full md:w-[90%] sm:object-contain md:object-fill"
              />
            </div>
          </div>
          <div className="flex pt-4 justify-start md:flex-row sm:flex-col sm:items-center md:items-center">
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img7}
                alt="QB Scholars in halloween costume"
                className="md:h-full sm:object-contain md:object-fill md:w-[90%]"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img8}
                alt="QB Scholars in halloween costume"
                className="md:h-full sm:object-contain md:object-fill md:w-[90%]"
              />
            </div>
          </div>
          <div className="pt-10 text-center text-[1.3rem]">
            <h1>National Quest Day | November 6, 2021</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:items-center">
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img9}
                alt="QB Scholars gather in front of the resource center"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img10}
                alt="students gathering"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img11}
                alt="students gathering"
                className="md:h-full md:w-[90%] sm:object-contain md:object-fill"
              />
            </div>
          </div>
          <div className="pt-10 text-center text-[1.3rem]">
            <h1>Winter Send Off | December 9, 2021</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:justify-center">
            <div className="md:w-[40%] sm:w-full">
              <img
                src={img12}
                alt="students gathering"
                className="md:h-full sm:object-contain md:object-fill md:w-[90%]"
              />
            </div>
          </div>
          <div className="pt-10 text-center text-[1.3rem]">
            <h1>Study Break | May 9, 2022</h1>
          </div>
          <div className="flex pt-4 justify-between md:flex-row sm:flex-col sm:items-center md:items-center">
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img13}
                alt="students gathering"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img14}
                alt="students gathering"
                className=" sm:object-contain md:w-[90%] md:object-fill"
              />
            </div>
            <div className="md:w-1/3 sm:w-full">
              <img
                src={img15}
                alt="students gathering"
                className="md:h-full md:w-[90%] sm:object-contain md:object-fill"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
