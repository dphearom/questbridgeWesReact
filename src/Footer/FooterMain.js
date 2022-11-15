import logo from "../Navigation/image2vector.svg";
import mail from "../Contact/mail.svg";
import location from "../Contact/location.svg";

export default function footer() {
  return (
    <div className=" bg-gray-100">
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600 container mx-auto">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social network:</span>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/wesleyan_qsn/?igshid=YmMyMTA2M2Y%3D"
              className="mr-6 text-gray-600"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <img
                  className="h-10 w-10 mr-3"
                  src={logo}
                  alt="SVG for Questbridge"
                />
                WESLEYAN UNIVERSITY QUESTBRIDGE
              </h6>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <div className="grid grid-cols-2">
                <div>
                  <p className="mb-4">
                    <a href="/" className="text-gray-600">
                      Home
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <a href="/about" className="text-gray-600">
                      About Us
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <a href="/blog" className="text-gray-600">
                      Our Blogs
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <a href="/alumniinsights" className="text-gray-600">
                      Alumni Insights
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <a href="/events" className="text-gray-600">
                      Events
                    </a>
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    <a href="/contact" className="text-gray-600">
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <img
                  src={location}
                  alt="Location icon"
                  className="w-5 mx-auto"
                />
                <span className="md:pl-3 sm:pl-2">
                  45 Wyllys Ave., Middletown, CT 06459
                </span>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <img src={mail} alt="Mail icon" className="w-5 mx-auto" />
                <span className="md:pl-3 sm:pl-2">
                  wesleyan.chapter@questbridge.org
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
