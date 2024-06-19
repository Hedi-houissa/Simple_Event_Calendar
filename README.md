# Event_Calendar

This project was developed as a test for Planity.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.


## Explanation

TimeToMinutes: converts time strings like '15:00' to minutes since the start of the day. minutesToPixels converts these minutes into pixels based on a scale (e.g., 100 pixels per hour).

Overlaps: detectOverlaps identifies groups of overlapping events by sorting and iterating through them. It groups events that overlap based on their start times and durations.


Rendering: The Calendar component renders events using absolute positioning based on their calculated top position, height, width, and left offset.
