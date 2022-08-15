import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/FooterMain";
import overhead from "./overhead.jpg";
import melanie from "../image/melanie.png"
import bella from "../image/bella.png"
import darling from "../image/darling.png"
import pin from "../image/pin.png"

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
          <div className="mt-5 text-base">
            <p>
              We value transparency and authenticity; in the past, the Quesbridge Chapter at Wesleyan has struggled to provide an inclusive space,
              social events, and sense of community. Our board aims to change that narrative; each member of the executive board is highly motivated,
              excited, and focused on bringing this change to life. We value your voice, so please contact us or any member below if you have any suggestions,
              comments, or concerns or if you would like to hear more about what projects we are working on.
            </p>
          </div>
        </div>

        {/* About page cards for all members, indentations to represent the row separation*/}

        <div className="mt-10 w-full pb-12">
          <h1 className="pb-5">Our Members</h1>
          <div className=" container flex flex-wrap md:flex-row sm:flex-col justify-between">
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={bella} alt="product designer" />
                <h1 class="text-lg text-gray-700"> Bella Nunn </h1>
                <h3 class="text-sm text-gray-400 ">  President/Liaison  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  For me, QuestBridge is a really great community of FGLI students that come from similar backgrounds that work together to navigate everything college and career related. We're really just a giant group of friends that all look out for each other! </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"  src={melanie} alt="product designer" />
                <h1 class="text-lg text-gray-700"> Melanie Garcia </h1>
                <h3 class="text-sm text-gray-400 ">   Publicity Chair  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  QuestBridge means possibilities. Without QB, I don’t know where I’d be today, and I’m grateful for all the people I’ve met along my FGLI  journey. I will dream big, forever and always.  </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                <h1 class="text-lg text-gray-700"> Pelumi Tayo-Orisadare </h1>
                <h3 class="text-sm text-gray-400 ">  Event Coordinator  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  It is something I have never done before and I would love to push myself out of my comfort zone and try new things. As an avid enjoyed of going to events, I thought, why not try to be a part of the behind-the-scenes process, and here I am today. </p>
              </div>
            </div>
          </div>

          <div className=" container flex flex-wrap md:flex-row sm:flex-col justify-between">
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={darling} alt="product designer" />
                <h1 class="text-lg text-gray-700"> Darling Rodriguez </h1>
                <h3 class="text-sm text-gray-400 ">  Class of 2025 Representative  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  QuestBride to me has been everything, it’s the reason as to why I attend this amazing school and it allows me to help other students as well in navigating the journey that College life attains.  </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={pin} alt="product designer" />
                <h1 class="text-lg text-gray-700"> Pin-Hsuan Chen </h1>
                <h3 class="text-sm text-gray-400 ">  President/Liaison  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  For me, QuestBridge is a really great community of FGLI students that come from similar backgrounds that work together to navigate everything college and career related. We're really just a giant group of friends that all look out for each other! </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center md:w-1/3 md:p-5 sm:p-2 flex-1">
              <div className="bg-gray-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                <h1 class="text-lg text-gray-700"> Bella Nunn </h1>
                <h3 class="text-sm text-gray-400 ">  President/Liaison  </h3>
                <p class="text-xs text-left text-gray-400 mt-4">  For me, milar backgrounds that work together to navigate everything college and career related. We're really just a giant group of friends that all look out for each other! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
