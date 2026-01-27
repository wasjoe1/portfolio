"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    id: "intro",
    label: "Mini Intro",
    content: `I'm a final-year Computer Science student at NUS with a passion for backend systems, data engineering, and building scalable infrastructure. I thrive in environments where I can solve complex technical challenges and learn rapidly.`,
  },
  {
    id: "interests",
    label: "CS Interests",
    content: `My core interests lie in distributed systems, data pipelines, and quantitative finance infrastructure. I enjoy working on problems involving concurrency, networking protocols, and optimizing system performance.`,
  },
  {
    id: "fun",
    label: "Fun Facts",
    content: `My girlfriend is in Chicago, so I've fallen in love with the windy city! I enjoy exploring new food spots, photography, and occasionally getting hammered with friends. Still managed As in all but 1 class during exchange!`,
  },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="w-12 h-1 bg-primary" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {"Hi! 👋 I'm Joe,"}
              <br />
              <span className="text-foreground">{"a CS Senior "}</span>
              <Link
                href="https://nus.edu.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @NUS
              </Link>
            </h1>

            <div className="space-y-2 text-muted-foreground">
              <p>Final-year CS @ NUS</p>
              <p>
                {"Deans list, 2 x NUS Overseas Colleges, Exchange "}
                <Link
                  href="https://www.gwu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @GWU
                </Link>
              </p>
              <p>
                Seeking Software Engineering roles starting Summer 2026 (US or
                Singapore,{" "}
                <span className="text-primary underline cursor-help">
                  H-1B1 eligible
                </span>
                ).
              </p>
            </div>

            <p className="text-muted-foreground">
              {"My Experiences include internships "}
              <Link
                href="https://www.squarepoint-capital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @Squarepoint
              </Link>
              ,{" "}
              <Link
                href="https://www.augustrobotics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @August Robotics
              </Link>
              {" and "}
              <Link
                href="https://www.pointstar.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @PointStar
              </Link>
              , building cool stuff and learning fast.
            </p>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className={
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:bg-secondary"
                  }
                >
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-card border border-border rounded-lg p-4 min-h-[100px]">
              <p className="text-muted-foreground leading-relaxed">
                {tabs.find((t) => t.id === activeTab)?.content}
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Joe Chua"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-muted-foreground/20 scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
