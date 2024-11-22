import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  badges: string[];
  timeAgo: string;
  registerLink?: string;
  seeMoreLink?: string;
  isUpcoming: boolean;
  image?: string;
}

export default function EventCard({
  title,
  description,
  badges,
  timeAgo,
  registerLink,
  seeMoreLink,
  isUpcoming,
  image,
}: EventCardProps) {
  return (
    <div className="w-full max-w-screen-lg mx-auto rounded-xl p-6 shadow-md space-y-3">
      <section className="flex flex-wrap md:flex-nowrap gap-6 items-start">

        {image && (
          <img
            src={image}
            alt={`${title} poster`}
            className="w-full md:w-48 h-48 object-cover rounded-lg md:mb-0 mb-4"
          />
        )}

        
        <div className="flex-1">
          
          <section className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <p className="text-2xl font-semibold text-[#284067]">{title}</p>
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            </div>
            <span className="text-sm flex items-center gap-1 text-muted-foreground mt-2 md:mt-0">
              <Clock size={16} /> {timeAgo}
            </span>
          </section>

         
          <section className="flex gap-2 mt-2 flex-wrap">
            {badges.map((badge) => (
              <Badge
                key={badge}
                className="bg-[#0B7FD9] text-white px-2 cursor-pointer hover:shadow-md rounded-full"
              >
                {badge}
              </Badge>
            ))}
          </section>


          <section className="flex flex-col md:flex-row justify-between items-center mt-5 gap-3 md:gap-0">
            {!isUpcoming && seeMoreLink && (
              <a
                href={seeMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex border border-border group px-4 py-2 rounded-md items-center text-sm text-[#284067] hover:bg-gray-100 w-full md:w-auto justify-center"
              >
                See Recordings
                <ChevronRight
                  size={20}
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            )}
            {isUpcoming && (
              <a
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#284067] rounded-md text-white hover:scale-105 duration-200 px-4 py-2 flex items-center justify-center w-full md:w-auto"
              >
                Register
              </a>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
