"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import faqimg from "../../../public/images/faq.png"

interface FaqsCardProps {
  faqsList: { q: string; a: string };
  idx: number;
}

const FaqsCard = ({ faqsList, idx }: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current ? (answerElRef.current.childNodes[0] as HTMLElement).offsetHeight : 0;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "What is the MLSA Nexus Chapter?",
      a:
        "The MLSA Nexus Chapter is a student-led tech community under the Microsoft Learn Student Ambassador program. We organize events and workshops focused on technology to help students grow their skills.",
    },
    {
      q: "Who can join the MLSA Nexus Chapter?",
      a:
        "Any student with a passion for technology and learning can join! We welcome all skill levels, from beginners to experienced coders.",
    },
    {
      q: "How can I participate in your events?",
      a:
        "Follow our social media or website for announcements on upcoming events and workshops. You can register for any event that interests you and be a part of the action!",
    },
  ];

  return (
    <section className="leading-relaxed py-20 mt-12 mx-auto px-4 md:px-8 bg-white">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-black">
          <span className="text-blue-800">Frequently{" "}</span>
          Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="flex justify-evenly lg:flex-row md:flex-row flex-col">
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
        <div className="mt-5">
          <Image src={faqimg} alt="faq" width={400} height={420} />
        </div>
      </div>
    </section>
  );
};
