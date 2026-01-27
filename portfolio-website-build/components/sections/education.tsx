interface Education {
  institution: string;
  logo: string;
  degree: string;
  period: string;
  achievements: string[];
}

const educations: Education[] = [
  {
    institution: "National University of Singapore",
    logo: "/logos/nus.png",
    degree: "B.Comp Computer Science",
    period: "Expected May 2026",
    achievements: ["Honors with distinction", "Dean's List 2024"],
  },
  {
    institution: "George Washington University",
    logo: "/logos/gwu.png",
    degree: "B.Sci Computer Science",
    period: "Jan 2025 - May 2025",
    achievements: [
      "Got hammered, Traveled & fell in love with the windy city of Chicago,",
      "Still did well for classes with As in ALL but 1 class",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-1 h-8 bg-primary mt-1" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        <p className="text-muted-foreground mb-10 ml-4">Colleges I attended</p>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
            >
              {/* Header with logo and institution */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-muted rounded-lg p-2 w-14 h-14 flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">
                    {edu.institution === "National University of Singapore"
                      ? "NUS"
                      : "GW"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.institution}
                </h3>
              </div>

              {/* Degree and Period */}
              <div className="space-y-1 text-muted-foreground">
                <p>{edu.degree}</p>
                <p>{edu.period}</p>
                {edu.achievements.map((achievement, i) => (
                  <p key={i}>{achievement}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
