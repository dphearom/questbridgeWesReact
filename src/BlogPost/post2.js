import Navbar from "../Navigation/Navbar.js";
import FooterMain from "../Footer/FooterMain.js";
import post2img from "./post2.jpg";

export default function post2() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto flex flex-col">
        <div className="overflow-hidden container">
          <img
            src={post2img}
            alt="Campus Cover"
            className="sm:h-48 md:h-96 w-full object-cover"
          />
        </div>
        <div>
          <h1 className="block mt-4 text-4xl leading-tight text-black font-extrabold">
            Looking Ahead: 3 FGLI Resources That Are Worth Your Time
          </h1>
          <p className="mt-2 text-slate-400">
            {" "}
            Melanie Garcia | August 2, 2022
          </p>
          <p className="mt-12">
            As a QuestBridge Scholar, you’re a decorated student. Resilient and
            intelligent, you’ve gone from clueless high schooler to full-fledged
            college student. It was a journey. Taking the AP classes, working
            the fast-food jobs, overseeing the student council–all while
            figuring out how to afford and attend college.
          </p>
          <p className="mt-2">
            …And as a college student, you kind of feel like you’re doing it all
            again. Taking the seminars, working the work-study jobs,
            spearheading the club that’s the first of its kind–you’re doing it
            all. Your schedule is booked. And as you think ahead, the future is
            fuzzy. You can’t really make it out. The path is unclear and
            sometimes you feel that your resources are limited, too…
          </p>
          <p className="mt-2">But guess what?</p>
          <p className="mt-2">They aren’t.</p>
          <p className="mt-2">
            And you can absolutely make that future happen.
          </p>
          <h3 className="text-2xl mt-2 font-bold">
            Here are 3 resources that are worth your time as you start planning
            the next steps:
          </h3>
          <h3 className="text-xl mt-4 font-bold">Podcasts</h3>
          <p className="mt-2">
            If you’re curious about life after college, look no further than{" "}
            <a
              href="https://alumni.questbridge.org/page/the-quest-continues-a-questbridge-podcast"
              className="underline text-blue-500"
            >
              The Quest Continues
            </a>{" "}
            podcast. Season 2 is hosted by 2017 Wesleyan grad{" "}
            <a
              href="https://open.spotify.com/episode/6lHTCUwCzND8eaq6bgb6Kz"
              className="underline text-blue-500"
            >
              Aiden Martinez
            </a>{" "}
            and 2017 Yale grad Jeff Chen, each episode featuring a QuestBridge
            alum. Their stories entail college experiences, careers, and other
            life transitions. Whether you’re a freshman or senior, the successes
            and losses these alumni share are worth hearing at any point in your
            academic journey. You can listen to The Quest Continues on{" "}
            <a
              href="https://open.spotify.com/show/2mgcqFceG192pd7iYmBsNb?si=g36ap581QRKkrqQBUy-GuA&nd=1"
              className="underline text-blue-500"
            >
              Spotify
            </a>
            ,{" "}
            <a
              href="https://podcasts.apple.com/us/podcast/the-quest-continues/id1532096476"
              className="underline text-blue-500"
            >
              Apple Podcasts
            </a>
            , and{" "}
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMzQ0MTAzLnJzcw=="
              className="underline text-blue-500"
            >
              Google Podcasts
            </a>
            .
          </p>
          <p className="mt-2">
            For our Latinx gente, grab your pan dulce because <a href="https://open.spotify.com/show/5x3pKQoC6QHOGqmvBtclS8" className="underline text-blue-500">Cafecito con
            Estrellita</a> is served hot! UC Santa Barbara grad Estrella Serrato
            hosts her own podcast for first-generation Latinx students. Episodes
            uncover topics such as work and study schedules, networking,
            academic trauma, and much more. Guest speakers include
            socialpreneurs, Ph.D. students, and other working professionals in a
            variety of fields. This <a href="https://cafecitoconestrellita.com/" className="underline text-blue-500">Latina academic</a> has been there, done that,
            and is passing on her wisdom to the next generation of Latinx
            scholars.
          </p>
          <h3 className="text-xl mt-2 font-bold">Mentoring</h3>
          <p className="mt-2">
            Maybe you haven’t decided on a career just yet. What can you
            say–you’re a jack of all trades. There are numerous <a href="https://www.usnews.com/education/best-colleges/articles/what-you-can-do-with-a-liberal-arts-degree" className="underline text-blue-500">career paths</a> out
            there and one of you. How will you choose? Who can you turn to?
          </p>
          <p className="mt-2">
            Find the right mentor using <a href="https://www.ustrive.com/" className="underline text-blue-500">UStrive</a>. UStrive connects college
            students with mentors from top companies. Make a profile, browse
            through mentors, and introduce yourself when you find the one for
            you. Through the secure platform, you can text, call, or even video
            chat with your mentor–all 100% free.
          </p>
          <h3 className="text-xl mt-2 font-bold">Micro-internships</h3>
          <p className="mt-2">
            Along with academics, many of us worry about the big step–an
            internship. You apply and apply…and feel that you’re going nowhere.
            Looking through your resume, you sigh. You need more <a href="http://www.skillifynow.com/2017/10/19/work-experience-in-college-important/" className="underline text-blue-500">experience</a>. But
            if you need an internship to gain experience, how will you ever
            start?
          </p>
          <p className="mt-2">
            Easy. Try micro-internships. <a href="https://www.parkerdewey.com/" className="underline text-blue-500">Parker Dewey</a> is dedicated to giving
            early career launchers like you a shot. Micro-internships are
            short-term, professional projects that companies post to give
            students and recent grads valuable experience. Unlike the
            traditional internship model, micro-internships are more flexible
            and negotiable. And to top it all off, you get paid!
          </p>
          <p className="mt-2">
            And there you have it–great resources paving the way for a great
            future. What’s your next step?
          </p>
          <p className="mt-4 text-slate-500">
            <span className="italic">Author’s Statement</span>: Melanie Garcia
            (Class of 2024) is the Publicity Chair for Wesleyan University’s
            QuestBridge Chapter. While majoring in English and minoring in
            Economics, she enjoys reading, watching movies, and eating cookies.
            For more information or questions, she can be reached at{" "}
            <span className="underline text-blue-500">
              mgarcia02@wesleyan.edu
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mt-8">
        <FooterMain />
      </div>
    </>
  );
}
