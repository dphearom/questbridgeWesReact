import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/FooterMain"
import overhead from "./overhead.jpg"

export default function about () {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-wrap text-4xl mx-auto container px-4">
                <div className="mb-3">
                    <div className="overflow-hidden container w-full top-0">
                        <img src={overhead} alt="Campus Cover" className="h-96 w-full object-cover"/>
                    </div>
                    <h1 className="mt-3">
                        Our Statement
                    </h1>
                    <div className="mt-5 text-sm">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="pb-5">
                        Our Members
                    </h1>
                    <div className="grid grid-cols-3 gap-5 flex flex-wrap">
                        <div className="border-2 rounded-lg">
                            <p>
                                Lorep Ipsum
                            </p>
                        </div>
                        <div className="border-2 h-24">
                            <p>
                                Lorep Ipsum
                            </p>
                        </div>
                        <div className="border-2">
                            <p>
                                Lorep Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}