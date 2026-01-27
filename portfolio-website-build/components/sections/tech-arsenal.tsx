import React from "react"
const languages = ["Python", "C++", "C", "JavaScript", "Java", "SQL", "R"];

const tools = [
  "Django",
  "FastAPI",
  "React / Vue.js",
  "Linux / Unix",
  "GCP(Google Cloud Platform)",
  "Node.js / Express",
  "Git",
  "Docker",
  "ROS",
  "PostGreSQL",
  "MySQL",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-border text-sm text-foreground bg-transparent hover:bg-secondary transition-colors">
      {children}
    </span>
  );
}

export function TechArsenalSection() {
  return (
    <section id="tech" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-1 h-8 bg-primary mt-1" />
          <h2 className="text-3xl font-bold text-foreground">Tech Arsenal</h2>
        </div>
        <p className="text-muted-foreground mb-10 ml-4">
          {"Languages and Tech Tools (Libraries & Frameworks) I've had experience with"}
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages Card */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-primary font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={lang}>{lang}</Badge>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-primary font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
