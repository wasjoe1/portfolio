import React from "react"
import { Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  badge: string;
  badgeType: "hackathon" | "individual";
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Blockchain POS System",
    description: "Cashierless consignment transactions using Ethereum.",
    badge: "NUS FINTECH MONTH 2023 HACKATHON (BACKEND ENGINEER)",
    badgeType: "hackathon",
    star: {
      situation:
        "Traditional consignment lacks transparency and involves manual effort.",
      task: "Build an automated system for unmanned payments.",
      action:
        "Used Raspberry Pi and 3D printing for locks. Developed backend with Node.js/Express. Created a self-serving kiosk with Python scripting and ERC20 tokens.",
      result:
        "Finalist in the hackathon. Achieved greater transparency in payment processes for consignment transactions.",
    },
    technologies: ["Rasberry pi", "Ethereum", "Node.js", "Express.js", "Python","IoT"],
  },
  {
    title: "Maps Hybrid App",
    description: "Cross-platform app for finding local food places.",
    badge: "INDIVIDUAL PROJECT (FULL-STACK ENGINEER)",
    badgeType: "individual",
    star: {
      situation: "Need for a centralized way to find local food gems.",
      task: "Create a mobile-responsive map application.",
      action:
        "Built with HTML/CSS, JS, MongoDB, Node.js. Used Capacitor by Ionic for cross-platform support. Implemented custom JWT auth with BCrypt.",
      result: "Functional cross-platform mobile app with secure authentication.",
    },
    technologies: ["HTML", "CSS", "Javascript", "MongoDB", "Node.js", "Capacitor by Ionic", "JWT"],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-border text-xs text-foreground bg-transparent">
      {children}
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start gap-3 mb-2">
          <div className="w-1 h-8 bg-primary mt-1" />
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
        </div>
        <p className="text-muted-foreground mb-10 ml-4">
          A collection of my side projects focusing on Backend infrastructure &
          data pipelines.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-primary">
                  {project.badge}
                </span>
              </div>

              {/* STAR Method */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-4 space-y-3">
                <div>
                  <span className="text-primary font-medium text-sm">
                    Situation:{" "}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {project.star.situation}
                  </span>
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">
                    Task:{" "}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {project.star.task}
                  </span>
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">
                    Action:{" "}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {project.star.action}
                  </span>
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">
                    Result:{" "}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {project.star.result}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
