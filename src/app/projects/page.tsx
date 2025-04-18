"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import image1 from "../../../public/images/project/Food Ordering System.png"
import image2 from "../../../public/images/project/E-Fitness.png"
import image3 from "../../../public/images/project/voting-poll-idea.jpg"
import image4 from "../../../public/images/project/Gemail-generator with AI.png"
import image5 from "../../../public/images/project/Task-Management-Application.webp"




const projects = [
  {
    title: "AI-Powered Task Management Backend",
    description:
      "An intelligent backend system for task management enhanced with Gemini AI API integration. Provides role-based access control, task management features, and AI-generated task assistance. Built with Node.js, Express, MongoDB, and JWT authentication for secure user interactions and task management.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "Gemini AI API",
      "JWT Authentication",
      "Axios"
    ],
    image: image5,  // Replace with an actual image if available
    github: "https://github.com/Nishi-kanta/AI-task-management",  // Add your GitHub repository link
    demo: "#",  // Add live demo URL if available
    features: [
      "Role-based access control for Admin, Manager, and User roles",
      "Users can manage only their assigned tasks",
      "Admins & Managers can view, assign, update, and delete any task",
      "AI-powered task suggestions using Gemini AI API",
      "JWT-based authentication and authorization",
      "Protected routes for task management and AI interaction",
      "Robust error handling and data validation",
      "Modular backend architecture"
    ]
  },
  
  {
    title: "AI-Powered Gmail Generator",
    description:
      "An intelligent email assistant that leverages GeminAI API to generate professional, personalized Gmail content for users. Designed to enhance productivity and reduce the time spent drafting emails. Built using React, Node.js, and GeminAI API for seamless AI-driven user interaction.",
    technologies: [
      "Vite",
      "Node.js",
      "Express.js",
      "GeminAI API",
      "Tailwind CSS",
    ],
    image: image4,
    github: "https://github.com/Nishi-kanta/AI-Email-Generator", // Update if needed
    demo: "#", // Add live demo URL if available
    features: [
      "AI-generated email drafts based on user input",
      "Support for different email tones: formal, casual, etc.",
      "Save, copy, and edit email drafts",
      "Responsive UI with Tailwind CSS",
      "History of generated emails stored for reuse"
    ]
  },  
  {
    title: "Voting App",
    description:
      "A secure and transparent online voting system built with the MERN stack, allowing users to vote for candidates while ensuring one-time voting through Aadhaar verification. The app features real-time vote count updates and an admin panel for candidate management.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    image: image3,
    github: "https://github.com/Nishi-kanta/Voting_App",
    demo: "#",
    features: [
      "User authentication with Aadhaar card number and password",
      "Sign-up and login system",
      "List of candidates available for voting",
      "One-time voting restriction per user",
      "Live vote count updates, sorted by votes",
      "Admin panel to manage candidates",
      "Secure password change functionality",
      "JWT-based authentication for security",
      "Responsive UI with Tailwind CSS",
    ],
  },

  {
    title: "E-fitness",
    description:
      "The project incorporates a focus on user health tracking and editing, with features catering to user needs through HTML, CSS, and Bootstrap. The seamless interface provides a visually appealing and intuitive user experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: image2,
    github: "https://github.com/Nishi-kanta/E-Fitness",
    demo: "#",
    features: [
      "Personalized workout plans",
      "Progress tracking dashboard",
      "Nutrition calculator",
      "Exercise library with demonstrations",
    ],
  },
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
    image: image1,
    github: "https://github.com/Nishi-kanta/Food_Ordering_System",
    demo: "#",
    features: [
      "User authentication and authorization",
      "Admin dashboard for order management",
      "Real-time order tracking",
      "Secure payment integration",
    ],
  }

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
                <div className="lg:w-1/2 relative h-[300px] lg:h-auto flex justify-center items-center">
                  <Image
                    src={project?.image || ""}
                    alt={project.title}
                    fill
                    className="object-contain w-full h-full"
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
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a> */}
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
