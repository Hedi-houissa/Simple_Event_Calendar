// Function to convert time string to minutes
const TimeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Exports List
export { TimeToMinutes };
