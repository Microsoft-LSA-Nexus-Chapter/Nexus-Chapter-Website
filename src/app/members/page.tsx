import React from 'react';

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
                    className="relative p-6 rounded-lg w-52 text-center transition-colors"
                    style={{
                      backgroundColor: 'rgba(0, 115, 169, 0.3)',
                      backdropFilter: 'blur(10px)', 
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
                      border: '1px solid rgba(255, 255, 255, 0.3)', 
                      color: '#0B2545' 
                    }}
                  >
                   
                    <div
                      className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4"
                      style={{
                        border: '4px solid #007D7D', 
                      }}
                    ></div>
                    <div className="text-xl font-semibold mb-2">{member.name}</div>
                    <div className="mb-4">{member.role}</div>

                    
                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg"
                      style={{
                        backgroundColor: 'rgba(164, 246, 209, 0.8)',
                      }}
                    >
                      <div className="flex justify-center gap-6">
                        <a href="#" className="text-blue-600">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                            alt="LinkedIn"
                            className="w-6 h-6"
                          />
                        </a>
                        <a href="#" className="text-gray-800">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="GitHub"
                            className="w-6 h-6"
                          />
                        </a>
                      </div>
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
