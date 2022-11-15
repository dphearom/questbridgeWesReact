import Navbar from "../Navigation/Navbar.js";
import FooterMain from "../Footer/FooterMain.js";
import post1img from "./post1.jpg";

export default function post1() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto flex flex-col">
        <div className="overflow-hidden container">
          <img
            src={post1img}
            alt="Campus Cover"
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="md:ml-6 md:mr-6 sm:ml-2 sm:mr-2" >
          <h1 className="block mt-4 text-4xl leading-tight text-black font-extrabold">
            3 Things You Need to Do Before Starting a Work-Study Job
          </h1>
          <p className="mt-2 text-slate-400">
            {" "}
            Melanie Garcia | August 2, 2022
          </p>
          <p className="mt-12">
            Rihanna once said, “Work, work, work, work, work, work.” QuestBridge
            Scholars can work, too–but probably not as pop stars. We opt for
            more flexible hours through federal work-study jobs.{" "}
          </p>
          <h3 className="text-2xl mt-2 font-bold">
            What is Federal Work-Study?
          </h3>
          <p className="mt-2">
            <a
              href="https://studentaid.gov/understand-aid/types/work-study"
              className="underline text-blue-500"
            >
              Federal Work-Study
            </a>{" "}
            is a federal aid program for college students to work part-time
            towards their educational expenses. As noted by the{" "}
            <a
              href="https://studentaid.gov/understand-aid/types/work-study"
              className="underline text-blue-500"
            >
              U.S. Department of Education
            </a>
            , educational expenses are considered your day-to-day expenses and
            are not directly applied to your tuition or fees. Your earnings will
            be sent to you via direct deposit and cannot surpass the amount
            allotted by the university for that award year. To see how much you
            are allocated for, check your financial aid award letter under the
            “student employment” section.{" "}
          </p>
          <p className="mt-2">
            Pay does vary depending on the job, but you earn at least the
            state’s minimum wage. In Connecticut, the minimum wage is considered{" "}
            <a
              href="https://portal.ct.gov/Office-of-the-Governor/News/Press-Releases/2022/06-2022/Governor-Lamont-Reminds-Residents-That-Minimum-Wage-Is-Scheduled-To-Increase-on-Friday"
              className="underline text-blue-500"
            >
              $14 per hour
            </a>
            .{" "}
          </p>
          <p className="mt-2">
            That being said, federal work-study jobs are not guaranteed–eligible
            students must apply for these positions.{" "}
          </p>
          <p className="mt-2">
            So, now that you know about work-study, what do you do now?{" "}
          </p>
          <h3 className="text-2xl mt-2 font-bold">
            Here are the 3 things you need to do before you’re ready to work
          </h3>
          <h3 className="text-xl mt-4 font-bold">Fill out the paperwork</h3>
          <p className="mt-2">
            All first-time employees at Wesleyan University must fill out the
            proper{" "}
            <a
              href="https://www.wesleyan.edu/careercenter/students/Campus%20Employment.html"
              className="underline text-blue-500"
            >
              employment forms
            </a>{" "}
            if they are working on-campus. This includes the I-9 and direct
            deposit, so make sure to access{" "}
            <a
              href="https://wesleyanedu.service-now.com/sp?id=sc_cat_item&sys_id=b60dfb57db491490b81b1be315961962&sysparm_category=31b69a19db119010b81b1be315961929"
              className="underline text-blue-500"
            >
              Payroll Help
            </a>{" "}
            in advance for further instructions.*
          </p>
          <p className="mt-2">
            Remember to bring your physical ID! You will receive an email to
            make an in-person appointment at the Payroll Office after you submit
            your work eligibility documents. Wesleyan’s Payroll Office is in
            North College (room 311), so have your ID ready.
          </p>
          <p className="mt-2 italic">
            *For more information, please visit the{" "}
            <a
              href="https://www.wesleyan.edu/careercenter/students/Campus%20Employment.html"
              className="underline text-blue-500"
            >
              Gordon Career Center
            </a>{" "}
            page on student on-campus employment.
          </p>
          <h3 className="text-xl mt-2 font-bold">Have a resume</h3>
          <p className="mt-2">
            Maybe you worked during high school or the summer leading up to your
            first year of college. Let employers know by writing a{" "}
            <a href="https://www.wesleyan.edu/careercenter/students/resumes-and-cover-letters.html">
              resume
            </a>
            . A resume is the best way to document your education,
            accomplishments, and work experience when applying for any job.
          </p>
          <p className="mt-2">
            Did you know that on average, recruiters and employers take{" "}
            <a
              href="https://www.indeed.com/career-advice/resumes-cover-letters/how-long-do-employers-look-at-resumes"
              className="underline text-blue-500"
            >
              6-7 seconds
            </a>{" "}
            to review a single resume? Especially when securing a work-study
            job, you want to put your best foot forward within that small
            timeframe. Remember to{" "}
            <a
              href="https://www.indeed.com/career-advice/resumes-cover-letters/tailoring-resume"
              className="underline text-blue-500"
            >
              tailor your resume
            </a>{" "}
            with a specific role in mind.
          </p>
          <p className="mt-2">
            If you find yourself in a resume fiasco, schedule an{" "}
            <a
              href="https://www.wesleyan.edu/careercenter/students/schedule-an-appointment.html"
              className="underline text-blue-500"
            >
              appointment
            </a>{" "}
            for a resume review through the Gordon Career Center. Whether it is
            formatting or brainstorming, a resume review will help you at any
            stage of the process. You can make an appointment for a cover letter
            review, too!
          </p>
          <h3 className="text-xl mt-2 font-bold">Apply, apply, apply</h3>
          <p className="mt-2">
            To find work-study opportunities, check out{" "}
            <a
              href="https://joinhandshake.com/"
              className="underline text-blue-500"
            >
              Handshake
            </a>
            . You can add filters such as work-study and on-campus to narrow
            down your search. Some job postings may include an email address to
            send your resume to, so make sure to read each description
            carefully.
          </p>
          <p className="mt-2">
            Do not forget to upload your resume onto Handshake! This is a must
            to be approved before you apply for any job on the platform. You
            will receive a notification when it is approved or needs more
            revising.
          </p>
          <p className="mt-2">
            Are you ready to work like RiRi? Snag your work-study job today!
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
