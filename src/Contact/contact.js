import Nav from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import call from "./call.svg"
import mail from "./mail.svg"
import location from "./location.svg"
import facebook from "./logo-facebook.svg"
import instagram from "./logo-instagram.svg"
import linkedIn from "./logo-linkedin.svg"

export default function contact() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mx-auto bg-contact-back bg-cover ">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col space-y-6 sm:w-full md:w-1/2 lg:w-1/3 max-w-4xl p-10 items-center rounded-xl shadow-lg text-white bg-wescolor1 bg-opacity-75">
            <div className="flex flex-col space-y-8 justify-between">
              <div>
                <h1 className="font-bold text-5xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-sm">
                  Loredafsa saf sa sad sadsadas sa dsad sa
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2 ">
                  <img src={mail} className="h-6 w-6" alt="Mail logo"/>
                  <span className="text-xl">lorep ipsum</span>
                </div><div className="flex items-center space-x-2 ">
                  <img src={location} className="h-6 w-6" alt="Location logo"/>
                  <span className="text-xl">45 Wyllys Ave., Middletown, CT 06459</span>
                </div>
              </div>
              <div className="flex space-x-5">
                <a href="#"><img src={instagram} className="w-5 h-5" alt="Instagram logo"/></a>
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
