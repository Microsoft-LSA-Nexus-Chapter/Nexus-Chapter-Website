import React from 'react';

interface Member {
  name: string;
  role: string;
  imageUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const members: Member[] = [
  { name: "Debaditya Som", role: "Core", imageUrl: "/images/DebadityaSom.jpg", githubUrl: "https://github.com/Debaditya-Som", linkedinUrl: "https://www.linkedin.com/in/debaditya-som-0b6b99215/" },
  { name: "Aditya Seth", role: "Cypher Prime", imageUrl: "/images/aditya.jpeg", githubUrl: "https://github.com/AdityaSeth777", linkedinUrl: "https://adityaseth.in/linkedin" },
  { name: "Shinjan Saha", role: "Cypher Associate", imageUrl: "/images/shinjan.jpg", githubUrl: "https://github.com/Shinjan-saha", linkedinUrl: "https://www.linkedin.com/in/shinjan-saha-404064248" },
  { name: "Sukrit Deb", role: "Illuminators Prime", imageUrl: "/images/sukrit.jpg" },
  { name: "Tanushree Das", role: "Illuminators Associate", imageUrl: "/images/tanushree.jpg", githubUrl: "https://github.com/tanushreedas04", linkedinUrl: "https://www.linkedin.com/in/tanushreedas04" },
  { name: "Ankur Mukherjee", role: "Mandalorian", imageUrl: "/images/ankur.jpg" },
  { name: "Diptanil Sen", role: "Mandalorian", imageUrl: "/images/gaytonil.jpg" },
  { name: "Ishita Majumdar", role: "Mandalorian", imageUrl: "/images/ishita.jpg", githubUrl: "https://github.com/Ishita0807", linkedinUrl: "https://www.linkedin.com/in/ishita-majumdar-0059671b3" },
  { name: "Anik Mukherjee", role: "Sentinels Prime", imageUrl: "/images/anik.jpg" },
  { name: "Subhranil Shit", role: "Sentinels Associate", imageUrl: "/images/subranil.jpg", githubUrl: "https://github.com/Subhranil04", linkedinUrl: "https://www.linkedin.com/in/subhranil-moitra-9b285a1a6" },
  { name: "Sagnik Pramanik", role: "Cypher", imageUrl: "/images/sagnik.jpeg" },
  { name: "Ashmit Ghosh", role: "Cypher", imageUrl: "/images/Ashmit.jpg", githubUrl: "https://github.com/buildashmit", linkedinUrl: "https://www.linkedin.com/in/ashmit-ghosh-204310250" },
  { name: "Reashav De", role: "Cypher", imageUrl: "/images/reashav.jpg", githubUrl: "https://github.com/reashav7", linkedinUrl: "https://www.linkedin.com/in/reashav-de-460663254" },
  { name: "Anushka Bhowmick", role: "Cypher", imageUrl: "/images/DSC_7147.jpg", githubUrl: "https://github.com/Anushka-Bhowmick", linkedinUrl: "https://linkedin.com/in/anushkabhowmick/" },
  { name: "Parna Roy Chowdhury", role: "Cypher", imageUrl: "/images/parna.jpg" },
  { name: "Srinjay Das Gupta", role: "Cypher", imageUrl: "/images/Srinjay.png", githubUrl: "https://github.com/SRINJAYDASGUPTA-Git", linkedinUrl: "https://www.linkedin.com/in/srinjay-das-gupta-441841214" },
  { name: "Komal Agarwal", role: "Cypher", imageUrl: "/images/Komal.jpg", githubUrl: "https://github.com/komal-agarwal5", linkedinUrl: "https://www.linkedin.com/in/komal-agarwal-95a3a026a" },
  { name: "Abhishikta Ray", role: "Cypher", imageUrl: "/images/abhishikta.jpg", githubUrl: "https://github.com/AbhishiktaRay03", linkedinUrl: "https://www.linkedin.com/in/abhishikta-ray-321315258" },
  { name: "Ankan Misra", role: "Cypher", imageUrl: "/images/ankan.jpeg" },
  { name: "Suman Jain", role: "Cypher", imageUrl: "/images/suman.jpg", githubUrl: "https://github.com/SumanJain2005", linkedinUrl: "https://www.linkedin.com/in/suman-naresh-jain/" },
  { name: "Rajdeep Saha", role: "Cypher", imageUrl: "/images/rajdeep.jpg" },
  { name: "Titli Dutta", role: "Illuminators", imageUrl: "/images/titli.jpg" },
  { name: "Prithwiraj Saha", role: "Illuminators", imageUrl: "/images/Prithiwiraj.jpg" },
  { name: "Rounak Banerjee", role: "Illuminators", imageUrl: "/images/Rounak.jpg", githubUrl: "https://github.com/RounaknBanerjee", linkedinUrl: "https://www.linkedin.com/in/rounak-banerjee-2a2888281" },
  { name: "Rick Mondal", role: "Illuminators", imageUrl: "/images/Rick.jpg" },
  { name: "Aritra Acharya", role: "Illuminators", imageUrl: "/images/aritra2.jpg", githubUrl: "https://github.com/Aritra10001", linkedinUrl: "https://www.linkedin.com/in/aritra-acharya/" },
  { name: "Debajyoti Mohanta", role: "Illuminators", imageUrl: "/images/Debjyoti.jpg", githubUrl: "https://github.com/Debajyoti-10", linkedinUrl: "https://www.linkedin.com/in/debajyoti-mohanta-a3156b295" },
  { name: "Anubhab De", role: "Illuminators", imageUrl: "/images/anubhab.jpg", githubUrl: "https://github.com/anubhab1001", linkedinUrl: "https://www.linkedin.com/in/anubhab-de-175305270" },
  { name: "Triparna Roy", role: "Mandalorian", imageUrl: "/images/Triparna.jpg", githubUrl: "https://github.com/Linuxtriii", linkedinUrl: "https://www.linkedin.com/in/triparna-roy-a9a2b929b" },
  { name: "Arkadip Ray", role: "Mandalorian", imageUrl: "/images/Arkadip.jpg" },
  { name: "Samipan Pal", role: "Mandalorian", imageUrl: "/images/samipan.jpg", githubUrl: "https://github.com/samipanpal", linkedinUrl: "https://www.linkedin.com/in/samipan-pal-6b2bb7303" },
  { name: "Mahasweta Bhowmik", role: "Mandalorian", imageUrl: "/images/Mahasweta.jpg" },
  { name: "Swapit Biswas", role: "Mandalorian", imageUrl: "/images/swapit.jpg" },
  { name: "Aditya Ghosh", role: "Mandalorian", imageUrl: "/images/aditya.jpg" },
  { name: "Soumyadeep Kundu", role: "Mandalorian", imageUrl: "/images/soumyadeep.jpg", githubUrl: "https://github.com/CyberSoumya", linkedinUrl: "https://www.linkedin.com/in/soumyadeep-kundu-26688b279" },
  { name: "Shayani Banerjee", role: "Mandalorian", imageUrl: "/images/shayani.jpg" },
  { name: "Parthib Biswas", role: "Mandalorian", imageUrl: "/images/parthib.jpg", githubUrl: "https://github.com/ParthibBiswas10", linkedinUrl: "https://www.linkedin.com/in/parthib-biswas-79b06029b/" },
  { name: "Rahul Khandait", role: "Mandalorian", imageUrl: "/images/Rahul.jpg", githubUrl: "https://github.com/rahulkhandait-sde", linkedinUrl: "https://www.linkedin.com/in/rahulkhandait/" },
  { name: "Arita Hui", role: "Sentinals", imageUrl: "/images/Aritra.jpg" },
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
                      className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden"
                      style={{
                        border: '4px solid #007D7D',
                      }}
                    >
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"  // Ensures the image fills the container
                      />
                    </div>
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


                    <div className="flex justify-center gap-6">
                      <a href={member.linkedinUrl ? member.linkedinUrl : "#"} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                          alt="LinkedIn"
                          className="w-6 h-6"
                        />
                      </a>
                      <a
                        href={member.githubUrl ? member.githubUrl : "#"}
                        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                          alt="GitHub"
                          className="w-6 h-6"
                        />
                      </a>
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
