import React from 'react';
import EventCard from '@/src/components/events/EventCard';
const fakeEvents = [
  {
    title: "ReactJs Conf' 2024",
    description: "Welcome to ReactJS Summit. You are invited to this event. Please register.",
    badges: ["React.js", "Meta", "React19", "React Compiler"],
    timeAgo: "2 hours ago",
  },
  {
    title: "Next.js World 2024",
    description: "The official Next.js conference. Join us for great talks and networking.",
    badges: ["Next.js", "Vercel", "SSG", "SSR"],
    timeAgo: "5 hours ago",
  },
  {
    title: "JS Fest 2024",
    description: "JavaScript festival featuring top speakers from around the world.",
    badges: ["JavaScript", "Node.js", "Deno", "ES6"],
    timeAgo: "1 day ago",
  },
  {
    title: "Vue.js Summit 2024",
    description: "Join us for the Vue.js summit. Learn the latest in the Vue.js ecosystem.",
    badges: ["Vue.js", "Vue Router", "Nuxt.js", "Pinia"],
    timeAgo: "3 days ago",
  },
  {
    title: "Angular Connect 2024",
    description: "A conference for Angular developers. Join the Angular community.",
    badges: ["Angular", "RxJS", "NgRx", "Ivy"],
    timeAgo: "5 days ago",
  },
];
const Events = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto my-10 p-10">
        <h1 className="text-3xl font-bold text-center mb-5">Upcoming Events(Dummy Content)</h1> {/* In future to use RESTAPI for Event Data fetch */}
        <p className="text-lg text-center text-gray-700 mb-10">
          Stay tuned for the latest events, workshops, and activities hosted by the Nexus Chapter.
        </p>
        <div className="space-y-6">
      {fakeEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          badges={event.badges}
          timeAgo={event.timeAgo}
        />
      ))}
    </div>
      </div>
    </div>   
  );
};

export default Events;
 