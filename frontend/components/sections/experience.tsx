import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface Experience {
  company: string;
  companyUrl: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  details?: string[]; // optional
}

const experiences: Experience[] = [
  {
    company: "Squarepoint Capital",
    companyUrl: "https://www.squarepoint-capital.com/",
    logo: "/logos/squarepoint.jpeg",
    role: "Software Engineer Intern",
    period: "May 2025 - Nov 2025",
    location: "Singapore",
    summary:
      "Worked in a quantitative trading firm supporting quant strategies. Developed Python-based BAU scrapers for alpha data ingestion. Replaced C-based stunnel with in-house Python TLS/SSL tunneling library. Optimized concurrency models (asyncio vs threads) matching C implementation throughput.",
    details: [
      "Worked in a quantitative trading firm in a team that supports quantitative strategies by ingesting alpha data for traders/ researchers.",
      "Developed and maintained Python-based BAU (Business-As-Usual) scrapers to ingest alpha data from Web sources, APIs, Email, PDF and SFTP servers, using libraries such as pandas, Selenium, camelot, BeautifulSoup, and socket programming, ensuring data reliability and compatibility with downstream quant research workflows.",
      "Provided on-call production support by diagnosing and resolving issues such as broken parsers and failed ingestions under tight SLAs, minimizing downtime for trading workflows.",
      "Developed an in-house TLS/SSL tunneling library in Python (using asyncio, ssl, and multiprocessing) to replace the C-based stunnel, enabling secure ingestion of multiple FIX vendor feeds.",
      "Benchmarked and optimized concurrency models (threads vs multiprocessing vs asyncio), achieving throughput comparable to stunnel's C implementation while supporting secure connections.",
      "Enhanced system fault tolerance through custom verbose logging, retry mechanisms, automatic recovery, alerting systems, and connection throttling, reducing failure recovery time by >70%.",
    ],
  },
  {
    company: "August Robotics",
    companyUrl: "https://www.augustrobotics.com/",
    logo: "/logos/august.jpeg",
    role: "Software Engineer Intern",
    period: "Jan 2024 - Jul 2024",
    location: "Shenzhen, China",
    summary:
      "Developed shopping cart platform using Vue.js/Django. Enabled Automated hardware testing reducing workload of 30+ engineers to 2 engineers, via building web-based 3D model visualization for tester verification using Three.js and FastAPI.",
    details: [
      "Worked alongside a global team of software & hardware engineers in a robotics startup providing automation in industrial workflows.",
      "Developed the company's shopping cart platform, a system for clients to purchase replacement parts, using Vue.js, Django and Nginx to build backend Views, Serializers, Models, and implement varying access permissions.",
      "Develop the consolidated hardware component testing station by setting up Docker containers to enable RPC communication between Web & ROS systems; Reduced the workload of 30+ hardware engineers to 2 non-technical testers.",
      "Wrote launcher files, Python scripts using the Modbus protocol,, and Bash scripts within a Catkin workspace environment to allow users(the testers) to configure hardware component settings without technical expertise.",
      "Led major functional UI/UX and backend improvements to the hardware component testing application using Bootstrap, TailwindCSS, FastAPI, SocketIO, and Three.js, enabling web-based 3D model visualization for tester verification.",
    ],
  },
  {
    company: "PointStar Pte. Ltd.",
    companyUrl: "https://www.point-star.com/",
    logo: "/logos/pointstar.jpeg",
    role: "Software Engineer Intern",
    period: "May 2023 - Aug 2023",
    location: "Jakarta, Indonesia",
    summary:
      "Built React.js dashboard for API cost usage visualization for 3000+ clients. Integrated Google OAuth. Developed room internal booking system for 250 employees ensuring no schedule conflicts in all offices (local & international).",
    details: [
      "Worked in a cloud consulting company enabling digitalization for global enterprises via solutions from Google Cloud, NetSuite, etc.",
      "Built a React.js dashboard to visualize API cost usage for 3,000+ clients; Google BigQuery data was paginated & stored in MySQL.",
      "Integrated Google OAuth via Google Cloud Console to authenticate & authorize clients, issuing and refreshing custom access JWT.",
      "Developed an Internal Booking System for 250 employees to de-conflict room reservations using NodeJS, ExpressJS & React.js.",
    ],
  },
  {
    company: "National University of Singapore",
    companyUrl: "https://news.nus.edu.sg/nus-ranks-8th-in-the-world-and-1st-in-asia-in-qs-world-university-rankings-2026/",
    logo: "/logos/nus.jpg",
    role: "Teaching Assistant",
    period: "Aug 2023 - Dec 2023",
    location: "Singapore",
    summary:
      "CS1101S Programming Methodology: Tutored 10 students on functional programming, recursion, higher-order functions, algorithmic strategies, and time complexity analysis (Big O) concepts in JavaScript; Conducted tutorial sessions, provided consultations, prepared and graded assignments; Achieved a Tutor feedback rating of 4.5/5.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start gap-3 mb-10">
          <div className="w-1 h-8 bg-primary mt-1" />
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                {/* Company Logo */}
                <div className="bg-card border border-border rounded-lg p-1.5 w-20 h-20 flex items-center justify-center mb-3">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={70}
                    height={70}
                    className="object-contain rounded-md"
                  />
                </div>

                {/* Role and Company */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-muted-foreground">{"•"}</span>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {exp.company}
                  </a>
                </div>

                {/* Date and Location */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Details Card */}
                {/* <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">{exp.summary}</p>
                  <div>
                    <p className="text-sm text-foreground mb-2">Detailed:</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1">{"•"}</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground">{exp.summary}</p>

                  {exp.details?.length ? (
                    <details className="mt-4">
                      <summary className="cursor-pointer select-none text-sm text-foreground hover:opacity-80">
                        Details
                      </summary>

                      <ul className="mt-3 space-y-2">
                        {exp.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
