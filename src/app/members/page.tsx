import React from 'react';

interface Member {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

const members: Member[] = [
  { name: "Debaditya Som", role: "Core", linkedin: "https://linkedin.com/in/debaditya-som", github: "https://github.com/Debaditya-som" },
  { name: "Aditya Seth", role: "Cypher Prime", linkedin: "https://www.linkedin.com/in/aditya-seth-270833233/", github: "https://github.com/AdityaSeth777" },
  { name: "Shinjan Saha", role: "Cypher Associate", linkedin: "https://www.linkedin.com/in/shinjan-saha-404064248/", github: "https://github.com/Shinjan-saha" },
  { name: "Sukrit Deb", role: "Illuminators Prime", linkedin: "https://www.linkedin.com/in/sukritdeb/", github: "https://github.com/sukritdeb" },
  { name: "Tanushree Das", role: "Illuminators Associate", linkedin: "https://www.linkedin.com/in/tanushreedas04/", github: "https://github.com" },
  { name: "Ankur Mukherjee", role: "Mandalorian", linkedin: "https://www.linkedin.com/in/ankur-mukherjee01/", github: "https://github.com" },
  { name: "Diptanil Sen", role: "Mandalorian", linkedin: "https://linkedin.com/in/diptanil-sen", github: "https://github.com" },
  { name: "Ishita Majumdar", role: "Mandalorian", linkedin: "https://www.linkedin.com/in/ishita-majumdar-0059671b3/", github: "https://github.com" },
  { name: "Anik Mukherjee", role: "Sentinels Prime", linkedin: "https://www.linkedin.com/in/anik-mukherjee-19a839285/", github: "https://github.com" },
  { name: "Subhranil Moitra", role: "Sentinels Associate", linkedin: "https://www.linkedin.com/in/subhranil-moitra-9b285a1a6/", github: "https://github.com" },
  { name: "Sagnik Pramanik", role: "Cypher", linkedin: "https://linkedin.com/in/sagnik-pramanik", github: "https://github.com" },
  { name: "Ashmit Ghosh", role: "Cypher", linkedin: "https://linkedin.com/in/ashmit-ghosh", github: "https://github.com/ashmitghosh" },
  { name: "Reashav De", role: "Cypher", linkedin: "https://www.linkedin.com/", github: "https://github.com" },
  { name: "Anushka Bhowmick", role: "Cypher", linkedin: "https://www.linkedin.com/in/anushkabhowmick/", github: "https://github.com" },
  { name: "Parna Roy Chowdhury", role: "Cypher", linkedin: "https://www.linkedin.com/in/parna-roy-chowdhury-756331256/", github: "https://github.com" },
  { name: "Srinjay Das Gupta", role: "Cypher", linkedin: "https://www.linkedin.com/in/srinjay-das-gupta-441841214/", github: "https://github.com" },
  { name: "Komal Agarwal", role: "Cypher", linkedin: "https://linkedin.com/in/", github: "https://github.com" },
  { name: "Abhishikta Ray", role: "Cypher", linkedin: "https://www.linkedin.com/in/abhishikta-ray-321315258/", github: "https://github.com" },
  { name: "Ankan Misra", role: "Cypher", linkedin: "https://www.linkedin.com/in/ankanmisra/", github: "https://github.com/ankanmisra" },
  { name: "Suman Jain", role: "Cypher", linkedin:"https://www.linkedin.com" , github:"https://github.com" },
  { name: "Rajdeep Saha", role: "Cypher", linkedin:"https://www.linkedin.com" , github:"https://github.com" }
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
      <div className="w-full max-w-6xl mx-auto my-10 px-6 py-10">
        <h1 className="text-3xl font-bold text-center mb-5">Our Members</h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Our chapter is made up of passionate student leaders who are eager to make a difference in their communities.
        </p>
        <div className="grid">
          {Object.keys(groupedMembers).map((role) => (
            <div key={role} className="mb-10 w-full">
              <h2 className="text-2xl font-bold text-center" style={{ color: '#0B2545', marginBottom: '20px' }}>{role}</h2>
              <div className="flex flex-wrap justify-center gap-12">
                {groupedMembers[role].map((member, index) => (
                  <div
                    key={index}
                    className="relative p-6 rounded-lg w-52 text-center transition-colors transform hover:scale-105 overflow-visible"
                    style={{
                      background: 'linear-gradient(145deg, rgba(0, 115, 169, 0.1), rgba(0, 115, 169, 0.3))',
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#0B2545',
                      transition: 'all 0.3s ease-in-out',
                      minHeight: '240px',
                      overflow: 'visible',
                      paddingBottom: '3rem'
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4"
                      style={{
                        border: '4px solid #007D7D',
                      }}
                    ></div>
                    <div className="text-xl font-semibold mb-2">{member.name}</div>
                    <div className="mb-8">{member.role}</div>

                    <div
                      className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"
                      style={{
                        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
                        opacity: 0.6,
                        transform: 'rotate(25deg) translateX(-100%)',
                        transition: 'transform 0.7s ease-in-out',
                      }}
                    ></div>

                    <div className="flex justify-center gap-6 mt-4">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                            alt="LinkedIn"
                            className="w-6 h-6"
                          />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="GitHub"
                            className="w-6 h-6"
                          />
                        </a>
                      )}
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
