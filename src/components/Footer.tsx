// app/components/Footer.tsx
import React from "react";
import Image from "next/image";
import logo from "../../public/images/mlsalogo-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  interface Content {
    id: number;
    content: string;
    link: string;
  }

  const usecases: Content[] = [
    {
      id: 1,
      content: "UI Design",
      link: "#",
    },
    {
      id: 2,
      content: "UX design",
      link: "#",
    },
    {
      id: 3,
      content: "Wireframing",
      link: "#",
    },
    {
      id: 4,
      content: "Diagramming",
      link: "#",
    },
    {
      id: 5,
      content: "Brainstorming",
      link: "#",
    },
    {
      id: 6,
      content: "Online whiteboard",
      link: "#",
    },
    {
      id: 7,
      content: "Team collaboration",
      link: "#",
    },
  ];
  const explore: Content[] = [
    {
      id: 1,
      content: "Design",
      link: "#",
    },
    {
      id: 2,
      content: "Prototyping",
      link: "#",
    },
    {
      id: 3,
      content: "Development features",
      link: "#",
    },
    {
      id: 4,
      content: "Design systems",
      link: "#",
    },
    {
      id: 5,
      content: "Collaboration features",
      link: "#",
    },
    {
      id: 6,
      content: "Design process",
      link: "#",
    },
    {
      id: 7,
      content: "FigJam",
      link: "#",
    },
  ];
  const resources: Content[] = [
    {
      id: 1,
      content: "Blog",
      link: "#",
    },
    {
      id: 2,
      content: "Best practices",
      link: "#",
    },
    {
      id: 3,
      content: "Colors",
      link: "#",
    },
    {
      id: 4,
      content: "Color wheel",
      link: "#",
    },
    {
      id: 5,
      content: "Support",
      link: "#",
    },
    {
      id: 6,
      content: "Developers",
      link: "#",
    },
    {
      id: 7,
      content: "Resource library",
      link: "#",
    },
  ];
  return (
    <footer className=" bg-white text-black py-6 border-t-[#4F4F4F] border-2 border-opacity-20">
      <div className="footer-content flex justify-evenly md:flex-nowrap flex-wrap gap-10">
        <div className="icon-container lg:w-1/5 w-1/3 lg:mx-18 mx-2">
          <Image
            className=" mb-10 aspect-square"
            src={logo}
            alt="MLSA Logo"
            width={50}
            height={50}
          />
          <div className="social-icons w-fit flex lg:gap-8 gap-5">
            <a href="#">
              <FontAwesomeIcon
                className="lg:w-8 lg:h-8 w-5 h-5 aspect-square cursor-pointer"
                icon={faXTwitter}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="lg:w-8 lg:h-8 w-5 h-5 aspect-square cursor-pointer"
                icon={faInstagram}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="lg:w-8 lg:h-8 w-5 h-5 aspect-square cursor-pointer"
                icon={faYoutube}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="lg:w-8 lg:h-8 w-5 h-5 aspect-square cursor-pointer"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className="use-cases h-fit lg:w-1/5 ">
          <p className="use-cases-heading font-bold capitalize font-sans mb-10">
            use cases
          </p>
          {usecases.map((e) => (
            <p className="use-cases-content lg:mb-4 mb-2">
              <a className="lg:text-sm text-xs" href={e.link}>
                {e.content}
              </a>
            </p>
          ))}
        </div>
        <div className="explore md:ml-10 lg:ml-0 h-fit lg:w-1/5 w-1/4">
          <p className="explore-heading font-bold capitalize font-sans mb-10">
            explore
          </p>
          {explore.map((e) => (
            <p className="explore-content lg:mb-4 mb-2">
              <a className="lg:text-sm text-xs" href={e.link}>
                {e.content}
              </a>
            </p>
          ))}
        </div>
        <div className="resources h-fit lg:w-1/5 w-1/4">
          <p className="resources-heading font-bold capitalize font-sans mb-10">
            resources
          </p>
          {resources.map((e) => (
            <p className="resources-content lg:mb-4 mb-2">
              <a className="lg:text-sm text-xs" href={e.link}>
                {e.content}
              </a>
            </p>
          ))}
        </div>
      </div>
      <p className="lg:text-sm text-xs text-center mt-5 text-[8px]">
        &copy; {new Date().getFullYear()} Microsoft Learn Student Ambassador -
        Nexus Chapter. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4 text-sm">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="https://mlsa-nexus-chapter.netlify.app/contact" className="hover:underline">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
