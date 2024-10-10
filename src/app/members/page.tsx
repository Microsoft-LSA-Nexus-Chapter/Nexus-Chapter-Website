import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";

// Assuming multiple image imports
import Debaditya from "../../../public/images/DebadityaSom.jpg";
import AdityaSeth from "../../../public/images/AdityaSeth.jpg";
import AnikMukherjee from "../../../public/images/AnikMukherjee.jpg";
import AnkurMukherjee from "../../../public/images/AnkurMukherjee.jpg";
import DiptanilSen from "../../../public/images/DiptanilSen.jpg";
import IshitaMajumdar from "../../../public/images/IshitaMajumdar.jpg";
import ShinjanSaha from "../../../public/images/ShinjanSaha.jpg";
import SubhranilMoitra from "../../../public/images/SubhranilMoitra.jpg";
import SukritDeb from "../../../public/images/SukritDeb.jpg";
import TanushreeDas from "../../../public/images/TanushreeDas.jpg";

import { FaLinkedin, FaGithub } from "react-icons/fa";


// Data for different member categories
const coreTeam = [
  {
    name: "Debaditya Som",
    role: "Former president, managing chapter operations and events",
    image: Debaditya,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },
  {
    name: "Aditya Seth",
    role: "Vice President, handling outreach and collaborations",
    image: AdityaSeth,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },
];

const designTeam = [
  {
    name: "Sukriti Deb",
    role: "Lead Designer, creating visual content",
    image: SukritDeb,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },
  {
    name: "Tanushree Das",
    role: "UI/UX Designer, responsible for product design",
    image: TanushreeDas,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },
];

const TechTeam = [
  {
    name: "Aditya Seth",
    role: "Event Coordinator, organizing workshops and conferences",
    image: AdityaSeth,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },{
    name:"Shinjan Saha",
    role: "",
    image :ShinjanSaha,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  }
];

const MarketingTeam = [
  {
    name: "Ankur Mukherjee",
    role: "Event Coordinator, organizing workshops and conferences",
    image: AnkurMukherjee,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },{
    name:"Ishita Majumdar",
    role: "",
    image :IshitaMajumdar,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },{
    name:"Diptanil Sen",
    role: "",
    image :DiptanilSen,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  }
];

const VideographyTeam = [
  {
    name: "Anik Mukherjee",
    role: "Event Coordinator, organizing workshops and conferences",
    image: AnikMukherjee,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  },{
    name:"Subhranil Moitra",
    role: "",
    image :SubhranilMoitra,
    linkedin: "https://www.linkedin.com/in/debaditya-som",
    github: "https://github.com/debaditya",
  }
];

const Members = () => {
  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#1F395E]">
          Our Members
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Our chapter is made up of passionate student leaders who are eager to
          make a difference in their communities. Below are some of our
          dedicated members, categorized by their roles:
        </p>

        {/* Core Members Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0378D4]">
          🔱 The Olympians (Core and management team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                </CardContent>
                <CardHeader className="items-center text-center p-4">
                  <CardTitle className="font-bold text-xl text-[#0378D4]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 p-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#0077B5] hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>

                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Team Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0378D4]">
          🎨 The Illuminators (Design team)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTeam.map((member, index) => (
              <Card key={index} className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                </CardContent>
                <CardHeader className="items-center text-center p-4">
                  <CardTitle className="font-bold text-xl text-[#0378D4]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 p-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#0077B5] hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Team Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0378D4]">
          💻 The Cypher (Technical team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TechTeam.map((member, index) => (
              <Card key={index} className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                </CardContent>
                <CardHeader className="items-center text-center p-4">
                  <CardTitle className="font-bold text-xl text-[#0378D4]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 p-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#0077B5] hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>


        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0378D4]">
          ⚔️ The Mandalorians (Marketing, PR and Content Team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MarketingTeam.map((member, index) => (
              <Card key={index} className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                </CardContent>
                <CardHeader className="items-center text-center p-4">
                  <CardTitle className="font-bold text-xl text-[#0378D4]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 p-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#0077B5] hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#0378D4]">
          📸 The Sentinels (Videography and photography team)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VideographyTeam.map((member, index) => (
              <Card key={index} className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="flex justify-center p-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-[200px] h-[200px] object-cover"
                  />
                </CardContent>
                <CardHeader className="items-center text-center p-4">
                  <CardTitle className="font-bold text-xl text-[#0378D4]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 p-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-[#0077B5] hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-black hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Members;
