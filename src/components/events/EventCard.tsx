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
}

export default function EventCard({
  title,
  description,
  badges,
  timeAgo,
  registerLink,
  seeMoreLink,
  isUpcoming,
}: EventCardProps) {
  return (
    <div className="w-full space-y-3 max-w-screen-lg mx-auto rounded-xl p-6 shadow-md">
      <section className="flex justify-between">
        <section>
          <p className="text-2xl font-semibold text-[#284067]">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </section>
        <span className="text-sm flex items-center gap-1 text-muted-foreground">
          <Clock size={16} /> {timeAgo}
        </span>
      </section>
      <section className="flex gap-2">
        {badges.map((badge) => (
          <Badge
            key={badge}
            className="bg-[#0B7FD9] text-white px-2 cursor-pointer hover:shadow-md rounded-full"
          >
            {badge}
          </Badge>
        ))}
      </section>
      <section className="flex justify-between pt-5">
        {/* Register Button for Upcoming Events */}
        {isUpcoming ? (
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#284067] rounded-md text-white hover:scale-105 duration-200 px-4 py-2 flex items-center justify-center"
          >
            Register
          </a>
        ) : (
          <div /> 
        )}

        {/* See Recordings Button for Past Events */}
        {!isUpcoming && seeMoreLink && (
          <a
            href={seeMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex border border-border group px-4 py-2 rounded-md items-center text-sm text-[#284067] hover:bg-gray-100"
          >
            See Recordings
            <ChevronRight
              size={20}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        )}
      </section>
    </div>
  );
}
