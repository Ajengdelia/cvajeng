import React from 'react';

// Array skills yang berisi skill-skill yang dimiliki
const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
];

// Komponen utama untuk menampilkan CV
const CV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-pink-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h1>

      {/* Section Skills */}
      <section className="skills-section">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6"></h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Mapping array skills ke dalam list */}
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-pink-200 p-4 rounded-lg shadow-md text-lg text-gray-800 hover:bg-pink-300 transition-all ease-in-out"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CV;
