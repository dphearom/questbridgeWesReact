import Navbar from "../Navigation/Navbar.js";
import HeroSection from "../HeroSection/HeroSection.js"
import FooterMain from "../Footer/FooterMain.js"

export default function Home() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <HeroSection />
            </div>
            <div>
                <FooterMain />
            </div>
        </>
    )
}