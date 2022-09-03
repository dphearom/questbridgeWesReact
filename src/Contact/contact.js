import Nav from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import mail from "./mail.svg";
import location from "./location.svg";
import instagram from "./logo-instagram.svg";
import logo from "../Navigation/QBLogo.png";

export default function contact() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mx-auto bg-contact-back bg-cover ">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6 sm:w-full md:w-1/2 lg:w-1/3 max-w-4xl p-10 items-center rounded-xl shadow-lg text-gray-600 bg-white bg-opacity-[90%]">
            <div className="flex flex-col space-y-8 justify-between">
              <div className="w-full content-center">
                <img
                  src={logo}
                  alt="Wesleyan QSN logo"
                  className="w-44 mx-auto"
                />
              </div>
              <div>
                <h1 className="font-bold text-5xl tracking-tight border-b-2 pb-4 border-black">Contact Us</h1>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2 ">
                  <img src={mail} className="h-6 w-6" alt="Mail logo" />
                  <span className="text-xl">
                    wesleyan.chapter@questbridge.org
                  </span>
                </div>
                <div className="flex items-center space-x-2 ">
                  <img src={location} className="h-6 w-6" alt="Location logo" />
                  <span className="text-xl">
                    45 Wyllys Ave., Middletown, CT 06459
                  </span>
                </div>
              </div>
              <div className="flex">
                <a href="https://www.instagram.com/wesleyan_qsn/?igshid=YmMyMTA2M2Y%3D">
                  <img
                    src={instagram}
                    className="w-5 h-5"
                    alt="Instagram logo"
                  />
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
