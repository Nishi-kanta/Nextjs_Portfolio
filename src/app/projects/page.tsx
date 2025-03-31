"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Online Food Ordering System",
    description:
      "Utilizing ASP.NET, SQL Server, HTML, CSS, Bootstrap, and jQuery, I developed a robust admin-only maintenance system. This project efficiently manages customer orders while maintaining data integrity and security of the platform.",
    technologies: [
      "ASP.NET",
      "SQL Server",
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
    ],
    image: "/projects/food-ordering.jpg",
    github: "https://github.com/nishikanta01/food-ordering",
    demo: "#",
    features: [
      "User authentication and authorization",
      "Admin dashboard for order management",
      "Real-time order tracking",
      "Secure payment integration",
    ],
  },
  {
    title: "E-fitness",
    description:
      "The project incorporates a focus on user health tracking and editing, with features catering to user needs through HTML, CSS, and Bootstrap. The seamless interface provides a visually appealing and intuitive user experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/projects/fitness.jpg",
    github: "https://github.com/nishikanta01/e-fitness",
    demo: "#",
    features: [
      "Personalized workout plans",
      "Progress tracking dashboard",
      "Nutrition calculator",
      "Exercise library with demonstrations",
    ],
  },
  {
    title: "Dynamic CRUD Operation",
    description:
      "By integrating theme-specific functions such as artificial logging, credential tracking, and personalized recommendations, this project aims to promote healthier lifestyles among users.",
    technologies: ["SQL Server", "ASP.NET MVC", "C#", "CSS"],
    image: "/projects/crud.jpg",
    github: "https://github.com/nishikanta01/crud-app",
    demo: "#",
    features: [
      "Real-time data synchronization",
      "Advanced filtering and sorting",
      "Data visualization dashboard",
      "Audit logging system",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-600 text-sm rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-300"
                        >
                          <FaArrowRight className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FaGithub className="h-5 w-5" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
