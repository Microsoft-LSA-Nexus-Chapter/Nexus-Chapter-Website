import React from 'react';
import './members.css';


interface Member {
  name: string;
  role: string;
}


const members: Member[] = [
  { name: "Debaditya Som", role: "Core" },
  { name: "Aditya Seth", role: "Cypher Prime" },
  { name: "Shinjan Saha", role: "Cypher Associate" },
  { name: "Sukrit Deb", role: "Illuminators Prime" },
  { name: "Tanushree Das", role: "Illuminators Associate" },
  { name: "Ankur Mukherjee", role: "Mandalorian" },
  { name: "Diptanil Sen", role: "Mandalorian" },
  { name: "Ishita Majumdar", role: "Mandalorian" },
  { name: "Anik Mukherjee", role: "Sentinels Prime" },
  { name: "Subhranil Shit", role: "Sentinels Associate" },
  { name: "Sagnik Pramanik", role: "Cypher" },
  { name: "Ashmit Ghosh", role: "Cypher" },
  { name: "Reashav De", role: "Cypher" },
  { name: "Anushka Bhowmick", role: "Cypher" },
  { name: "Parna Roy Chowdhury", role: "Cypher" },
  { name: "Srinjay Das Gupta", role: "Cypher" },
  { name: "Komal Agarwal", role: "Cypher" },
  { name: "Abhishikta Ray", role: "Cypher" },
  { name: "Ankan Misra", role: "Cypher" },
  { name: "Suman Jain", role: "Cypher" },
  { name: "Rajdeep Saha", role: "Cypher" }
];


const groupedMembers = members.reduce<Record<string, Member[]>>((acc, member) => {
  if (!acc[member.role]) {
    acc[member.role] = [];
  }
  acc[member.role].push(member);
  return acc;
}, {});

const Members: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Our Members</h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Our chapter is made up of passionate student leaders who are eager to make a difference in their communities.
        </p>
        <div className="grid">
          {Object.keys(groupedMembers).map((role) => (
            <div key={role} className="role-column mb-10">
              <h2 className="role-title">{role}</h2>
              <div className="member-row">
                {groupedMembers[role].map((member, index) => (
                  <div key={index} className="member-card">
                    <div className="avatar"></div>
                    <div className="member-name">{member.name}</div>
                    <div className="member-role">{member.role}</div>
                    <div className="social-links">
                      <a href="#" className="social-icon">LinkedIn</a>
                      <a href="#" className="social-icon">GitHub</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
