import React from "react";
import OverLaps from "../components/calendar/OverLaps";
import { eventsList } from "../utils/data/events";
import { TimeToMinutes } from "../utils/functions/Converter";

const Calendar = () => {
  // List of events
  const data = eventsList;

  // Function to convert minutes to pixel height 1h = 100px
  const minutesToPixels = (minutes) => (minutes / 60) * 100;

  // Function to detect overlapping events
  const overlaps = OverLaps(data);

  return (
    <div className="calendar">
      {overlaps.map((group) => {
        const groupWidth = 100 / group.length;

        return group.map((event, eventIndex) => {
          const top = minutesToPixels(TimeToMinutes(event.start));
          const height = minutesToPixels(event.duration);
          const width = groupWidth;
          const left = eventIndex * groupWidth;
          return (
            <div
              key={event.id}
              className="event"
              style={{
                top: `${top}px`,
                height: `${height}px`,
                width: `${width}%`,
                left: `${left}%`,
              }}
            >
              Event {event.id}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Calendar;
