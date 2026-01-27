"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "intro", label: "Mini Intro" },
  { id: "interests", label: "CS Interests" },
  { id: "fun", label: "Fun Facts" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function MiniIntro() {
  return (
    <div className="space-y-4">
      <div className="space-y-2 text-muted-foreground">
        <p>Final-year CS @ NUS</p>
        <p>
          Deans list, 2× NUS Overseas Colleges, Exchange{" "}
          <Link
            href="https://www.gwu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C4B27A] hover:underline"
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
        My experiences include internships{" "}
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
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.point-star.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          @PointStar
        </Link>
        , building cool stuff and learning fast.
      </p>
    </div>
  );
}

function CSInterests() {
  return (
    <p className="text-muted-foreground leading-relaxed">
      My core interests lie in building reliable large distributed systems, data pipelines, and quantitative finance infrastructure. I enjoy working on problems involving concurrency, networking protocols, and optimizing system performance.
      <br></br>
      <br></br>
      Some books I am currently reading are "Operating Systems: 3 easy pieces", "building data intensive applications" & "Tour of C++"
    </p>
  );
}

function FunFacts() {
  return (
    <p className="text-muted-foreground leading-relaxed">
      Outside of Coding, I enjoy exploring new food spots, staying active (Basketball, Gym & Dance)
      and travel!
      <br></br>
      <br></br>
      During my semester exchange, I travelled to multiple cities such as Denver, New york and more.
      The city I fell in love with the most though is none other than the windy city of Chicago! 🌭
    </p>
  );
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabId>("intro");

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
            {/* -------- Tab-controlled content block -------- */}
            <div key={activeTab} className="space-y-4 animate-in fade-in-0 duration-2000 ease-out">
              {activeTab === "intro" && <MiniIntro />}
              {activeTab === "interests" && <CSInterests />}
              {activeTab === "fun" && <FunFacts />}
            </div>
            {/* -------- Tabs -------- */}
            <div className="flex flex-wrap gap-3 pt-2">
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

          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <Image
                  src="/logos/profile.jpg"
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
