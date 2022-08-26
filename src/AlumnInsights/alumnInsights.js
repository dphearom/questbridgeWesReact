import Nav from "../Navigation/Navbar.js";
import Footer from "../Footer/FooterMain";

export default function AlumnInsights() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col flex-auto">
          <div className="flex w-full">
            <h1 className="text-4xl border-b-black border-b-2 w-full pb-4 pt-10 font-bold font-sans">
              Alumni's Insights
            </h1>
          </div>
          <div className="flex md:flex-row w-full sm:flex-col pt-10">
            <div className="w-1/3">
              <h1>Sam Morreale</h1>
            </div>
            <div className="w-2/3">
              <details className="sm:w-[360px] md:w-full sm:pt-4 md:pt-0">
                <summary>
                    Biography 
                </summary>
                Sam Morreale (they/them) is currently the Associate Producer at
                Soho Rep in NYC. An Artistic Producer, Director, and
                Facilitator, Sam approaches work with a dramaturgical lens
                rooted in anti-racism and anti-oppression. They are an avid
                supporter of art for social change and gravitate towards stories
                and people that uplift the lives of those who have been caught
                in the margins of society. Sam works to reckon with and readjust
                the theatrical cannon by re-centering QTBIPOC voices as a
                space-making advocate for these communities, particularly from
                within predominantly and historically white institutions. After
                receiving a BA from Wesleyan in Theater and Science Studies, Sam
                moved on to work with New York Stage and Film at Vassar College,
                Penumbra Theatre, Mixed Blood Theatre, Baltimore Center Stage,
                and the Theatre Communications Group. Sam understands their
                career path as one which continues to push institutions to
                spaces of deep listening in order to ensure that their actions
                align with social justice and the movement for progressive
                change
              </details>
              
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
