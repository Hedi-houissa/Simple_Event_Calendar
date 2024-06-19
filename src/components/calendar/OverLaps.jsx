import { TimeToMinutes } from "../../utils/functions/Converter";

export default function OverLaps(events = []) {
  // Sort events by their start times in ascending order.
  const sortedEvents = events?.sort(
    (a, b) => TimeToMinutes(a.start) - TimeToMinutes(b.start)
  );
  // Initialize an empty array to store groups of overlapping events.
  const laps = [];
  // Iterate through the sorted events to identify groups of overlapping events.
  for (let i = 0; i < sortedEvents.length; i++) {
    const currentGroup = [sortedEvents[i]];

    for (let j = i + 1; j < sortedEvents.length; j++) {
      if (
        TimeToMinutes(sortedEvents[j].start) <
        TimeToMinutes(sortedEvents[i].start) + sortedEvents[i].duration
      ) {
        currentGroup.push(sortedEvents[j]);
      } else {
        break;
      }
    }
    // Add the current group to the list of overlapping groups.
    laps.push(currentGroup);
    // Skip the events that have already been grouped by moving the outer loop's index to the last event of the current group.
    i += currentGroup.length - 1;
  }

  return laps;
}
