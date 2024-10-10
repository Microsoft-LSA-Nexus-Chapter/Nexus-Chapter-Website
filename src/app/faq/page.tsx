import React from "react";

const FAQ = () => {
  interface FaqContent {
    id: number;
    question: string;
    answer: string;
  }

  const data: FaqContent[] = [
    {
      id: 1,
      question: "What is the MLSA Nexus Chapter?",
      answer:
        "The MLSA Nexus Chapter is a student-led tech community under the Microsoft Learn Student Ambassador program. We organize events and workshops focused on technology to help students grow their skills.",
    },
    {
      id: 2,
      question: "Who can join the MLSA Nexus Chapter?",
      answer:
        "Any student with a passion for technology and learning can join! We welcome all skill levels, from beginners to experienced coders.",
    },
    {
      id: 3,
      question: "How can I participate in your events?",
      answer:
        "Follow our social media or website for announcements on upcoming events and workshops. You can register for any event that interests you and be a part of the action!",
    },
  ];
  return (
    <div className="faq-container pb-10 min-h-screen   min-w-screen bg-white text-white font-sans">
      <h1 className="md:text-5xl lg:pt-28 pt-32 px-6 text-2xl font-bold text-center  text-black">
        Frequently Asked Questions (FAQs)
      </h1>
      {data.map((e) => (
        <div key={e.id}>
          <div className="sub-container-question md:mt-20 mt-14 h-fit w-full bg-transparent md:text-lg ">
            <div className="lg:pl-10 pl-5 lg:h-32 h-24 w-full flex ">
              <div
                className="lg:text-2xl question p-10 h-full lg:w-2/6 md:w-3/5 w-4/5 bg-[#42924A] flex items-center   justify-center rounded-t-lg rounded-br-[5rem] shadow-[5px_5px_20px_grey] font-thin"
                // // to add spikes for the box // //
                // style={{
                //   clipPath:
                //     "polygon(0% 0%,100% 0%,100% 80%,80% 80%,80% 80%,10% 80%,0% 100%)",
                // }}
              >
                {e.question}
              </div>
            </div>
          </div>
          <div className="sub-container-answer md:mt-20 mt-14 h-fit w-full bg-transparent ">
            <div className="pr-10 lg:h-40 md:h-36 h-fit w-full flex place-content-end text-center">
              <div
                className="answer lg:text-xl md:text-sm text-sm lg:p-10 p-6  h-full lg:w-3/6 md:w-3/5  w-4/5 bg-[#51ADCF] flex items-center  justify-center rounded-t-lg rounded-bl-[5rem] rounded-br-none shadow-[5px_5px_20px_grey] font-thin"
                // // to add spikes for the box // //
                // style={{
                //   clipPath: "polygon(0% 0%,100% 0%,100% 100%,90% 90%,0% 90%)",
                // }}
              >
                {e.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
