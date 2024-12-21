"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavButton from "@/components/NavButton";
import DynamicTabContent from "@/components/DynamicTabContent";
import { useState, useEffect } from "react";
import projects from "@/data/projects.json";
import { use } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  timeline: string;
  role: string;
  techStack: {
    technologies: { icon: string; title: string }[];
    technicalDetails: { icon: string; title: string; description: string }[];
  };
  features: { title: string; description: string; tag: string; status: string }[];
  galleryImages: string[];
  demo: string[];
  code: string[];
}

export default function ProjectPage({ params }: { params: Promise<{ projectid: string }> }) {
  const { projectid } = use(params);
  const project = projects.find((p) => p.id === projectid);

  if (!project) {
    return notFound();
  }

  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Tech Stack", "Features", "Gallery"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="p-6 min-h-screen mx-auto"
      style={{
        backgroundColor: "#141b2a",
        maxWidth: "65%", // Set to 65% of screen width
      }}
    >
      {/* Back to Projects Link */}
      <Link href="/projects/" legacyBehavior>
        <a
          className="flex items-center mb-4 text-white hover:brightness-110"
          style={{
            color: "#DFD0B8",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#DFD0B8";
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>←</span> Back to Projects
        </a>
      </Link>

      {/* Header Card */}
      <div
        className="p-6 rounded-lg border mb-6"
        style={{
          borderColor: "#ffffff",
          backgroundColor: "#141b2a",
        }}
      >
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: "#ffffff" }}
        >
          {project.name}
        </h1>
        <p
          className="text-lg mb-4"
          style={{ color: "#ffffff" }}
        >
          {project.description}
        </p>

        {/* Conditional Rendering for View Code Button */}
        {project.code[0] !== "None" && (
          <a
            href={project.code[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded inline-block transition mb-2 mr-2 hover:brightness-110"
            style={{
              backgroundColor: "#ffffff",
              color: "#27313F",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#27313F";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#27313F";
            }}
          >
            View Code
          </a>
        )}

        {/* Conditional Rendering for View Demo Button */}
        {project.demo[0] !== "None" && (
          <a
            href={project.demo[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded inline-block transition hover:brightness-110"
            style={{
              backgroundColor: "#ffffff",
              color: "#27313F ",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#27313F";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#27313F";
            }}
          >
            View Demo
          </a>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-4" style={{ borderColor: "#948979" }}>
        {tabs.map((tab) => (
          <NavButton
            key={tab}
            label={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            style={{
              color: activeTab === tab ? "#DFD0B8" : "#948979",
              backgroundColor: activeTab === tab ? "#3C5B6F" : "transparent",
              borderBottom: activeTab === tab ? "2px solid #DFD0B8" : "none",
              padding: "10px 20px",
            }}
          />
        ))}
      </div>

      {/* Dynamic Tab Content */}
      <div
        className="p-4 rounded-lg"
        style={{
          backgroundColor: "#141b2a",
          color: "#DFD0B8",
        }}
      >
        <DynamicTabContent activeTab={activeTab} project={project} />
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            max-width: 90%;
            padding: 4%;
          }
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          a {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
          .flex {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
