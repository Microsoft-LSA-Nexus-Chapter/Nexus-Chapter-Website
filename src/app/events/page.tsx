import React from "react";
import EventCard from "@/src/components/events/EventCard";

const fakeEvents = [
  {
    title: "Building Minimal API with .NET",
    description: "Ready to unlock the secrets of  API Wizardry? Join us for a session to explore how API can revolutionize your approach to tech !!",
    badges:[".NET", "API", "Objective C"],
    timeAgo: "20/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FBuilding%20Minimal%20API%20with%20%2ENET",
  },
  {
    title: " Level up with Data! Don’t Miss the HackNexus Data Science Webinar",
    description: "Discover the game-changing tools behind next-level data insights and trends.",
    badges: ["Python", "Numpy", "Data-Science"],
    timeAgo: "19/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FData%20Science%20Demystified",
  },
  {
    title: "Dive into PHP & MySQL Essentials!",
    description: "Get ready to level up your skills and make your mark in web dev! Don’t miss it!",
    badges: ["PHP", "MYSQL"],
    timeAgo: "25/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FWeb%20Dev%20101%20%2D%20Introduction%20to%20PHP%20%26%20MySQL",
  },
  {
    title: "React Revolution is ON! ",
    description: "Get ready to master React.js and Tailwind CSS in today’s session! ",
    badges: ["ReactJS", "TailwindCSS"],
    timeAgo: "26/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FReact%20Revolution%20%2D%20Building%20React%20Js%20and%20Tailwind%20CSS%20Applications", 
  },
  {
    title: "Next Level Web Dev—Mastering Next.js!",
    description: "Get ready to supercharge your web development skills with the power of Next.js! ",
    badges: ["ReactJS", "TailwindCSS"],
    timeAgo: "27/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FNext%20Level%20Web%20Dev%2D%20Mastering%20Next%2EJs",
  },
  {
    title: "Mastering Linux & Bash—Explore, Automate, Secure!",
    description: "Dive into the world of Linux and Bash to transform your workflows, automate tasks, and strengthen security like never before! ",
    badges: ["Linux", "Bash", "Automatation", "Security"],
    timeAgo: "28/10/2024",
    status: "past",
    seeMoreLink: "https://stdntpartners-my.sharepoint.com/personal/aditya_seth_studentambassadors_com/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Faditya%5Fseth%5Fstudentambassadors%5Fcom%2FDocuments%2FHackNexus%2FMastering%20Linux%20and%20Bash%20Scripting",
  },
  // Upcoming Events Data
  {
    title: ".NET Conf 2024 Nexus",
    description: "A conference for .NET developers",
    badges: [".NET", ".NET 9"],
    timeAgo: "24/11/2024",
    status: "upcoming",
    registerLink: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YmI2NDBjZjktMGZlOC00MjJkLTkzYmYtMmNhZmE4MzFiN2Rh%40thread.v2/0?context=%7b%22Tid%22%3a%2284c31ca0-ac3b-4eae-ad11-519d80233e6f%22%2c%22Oid%22%3a%22429980c3-3787-4fc8-8362-a810330033ba%22%7d",
  },

  
];

const Events = () => {
  const upcomingEvents = fakeEvents.filter((event) => event.status === "upcoming");
  const pastEvents = fakeEvents.filter((event) => event.status === "past");

  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Events</h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Stay tuned for the latest events, workshops, and activities hosted by the Nexus Chapter.
        </p>

        {/* Upcoming Events */}
        <div className="mb-10">
          <div className="mb-5">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full uppercase">
              Upcoming Events
            </span>
          </div>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                badges={event.badges}
                timeAgo={event.timeAgo}
                registerLink={event.registerLink}
                seeMoreLink={event.seeMoreLink}
                isUpcoming={true}
              />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="mb-5">
            <span className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2 rounded-full uppercase">
              Past Events
            </span>
          </div>
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                badges={event.badges}
                timeAgo={event.timeAgo}
                seeMoreLink={event.seeMoreLink}
                isUpcoming={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;