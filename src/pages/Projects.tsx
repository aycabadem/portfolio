import React from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/portfolio.jpg";
import numbly from "../assets/numbly2.png";
import pomodoro from "../assets/pomodoro.png";
import tendays from "../assets/ten-days-tracker.png";

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-stone-200 py-20 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent mb-4">
          My Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Here you can explore the projects I’ve built so far. I’m currently
          working on new ones, which I’ll be adding soon.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-slate-700 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        <ProjectCard
          image={project1}
          title="Photo Portfolio"
          description="Photography Portfolio is a personal portfolio website where I showcase the photos I’ve taken. I built it using React, JavaScript, and React Router for page navigation.
The images are stored in Firebase Storage and are dynamically loaded into the site. The project includes basic routing between pages like Home, About, and Contact."
          technologies={["React", "JavaScript", "Firebase"]}
          githubLink="https://github.com/aycabadem/photo-portfolio"
          demoLink="https://aycabadem.github.io/photo-portfolio/"
        />
        <ProjectCard
          image={numbly}
          title="Numbly"
          description="This is a number guessing game I developed, inspired by a game I used to play with friends on paper. The computer generates a random 4-digit number, and the player has to guess it.
After each guess, the game provides feedback.I built this game using React and JavaScript, and I used Redux for state management to handle the game's logic and state."
          technologies={["React", "Redux", "JavaScript"]}
          githubLink="https://github.com/aycabadem/numbly-game"
          demoLink="https://aycabadem.github.io/numbly-game/"
        />
        <ProjectCard
          image={pomodoro}
          title="Pomodoro Timer"
          description="Pomodoro App is a timer built with React, TypeScript, and Redux. Users can set their own work time, break time, long break time, and number of rounds. They can also choose their preferred alarm sound.
I wrote some unit tests using React Testing Library and Jest to check the timer and button functions.
"
          technologies={["React", "Redux", "TypeScript"]}
          githubLink="https://github.com/aycabadem/pomodoro-react"
          demoLink="https://aycabadem.github.io/pomodoro-react/"
        />
        <ProjectCard
          image={tendays}
          title="Ten Days Tracker"
          description="10 Days Tracker is a simple habit tracking app I built using React, JavaScript, and Firebase. Users can sign up and log in with Firebase Authentication.
After logging in, they choose a start date from a calendar and create a 10-day challenge by adding the habits they want to follow. Every day, they can check the habits they completed. I used Firebase Firestore to store all the habits and challenges. I also used Redux for state management."
          technologies={[
            "React",
            "Redux",
            "Firebase Authentication",
            "Firebase Firestore",
          ]}
          githubLink="https://github.com/aycabadem/ten-days-tracker"
          demoLink="https://aycabadem.github.io/ten-days-tracker/"
        />
      </div>
    </section>
  );
};

export default Projects;
