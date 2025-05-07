export const agendaData = {
    // Days array in chronological order
    days: [
      {
        id: 1,
        number: 1,
        date: "Thur 01. 05. 2025",
        schedule: [
          { time: "5PM - 6PM", activity: "Check in" },
          { time: "6PM - 7:30", activity: "Opening Ceremony" },
          { time: "8:30 - 9:30", activity: "Dinner Time" },
          { time: "9:30 - 12AM", activity: "Hacking Start" },
        ],
      },
      {
        id: 2,
        number: 2,
        date: "Fri 02. 05. 2025",
        schedule: [
          { time: "00 - 1AM", activity: "Fun Activities" },
          { time: "1AM-8AM", activity: "Hacking" },
          { time: "8AM-9AM", activity: "Coffee Break" },
          { time: "9AM-12PM", activity: "Hacking" },
          { time: "12PM-1PM", activity: "Prayers" },
          { time: "1PM-3PM", activity: "Lunch Break" },
          { time: "3PM-6PM", activity: "Hacking" },
          { time: "6PM-7PM", activity: "Coffee Break" },
          { time: "7PM-10PM", activity: "Hacking" },
          { time: "10PM-11PM", activity: "Dinner" },
        ],
      },
      {
        id: 3,
        number: 3,
        date: "Sat 03. 05. 2025",
        schedule: [
          { time: "00 - 2AM", activity: "Hacking" },
          { time: "2AM-3AM", activity: "Coffee Break" },
          { time: "3AM-8AM", activity: "Hacking" },
          { time: "8AM-9AM", activity: "Coffee Break" },
          { time: "9AM-12PM", activity: "Hacking" },
          { time: "12PM-1:30", activity: "Submissions" },
          { time: "1:30-2:30", activity: "Lunch Break" },
          { time: "2:30-5PM", activity: "Pitching" },
          { time: "5PM-5:30", activity: "Coffee Break" },
          { time: "5:30-6PM", activity: "Closing Ceremony" },
        ],
      },
    ]
  };
  
  // Define activity categories for styling
  export const activityCategories = {
    "Check in": { color: "#26a0b9", icon: "user" },
    "Opening Ceremony": { color: "#f9a76c", icon: "mic" },
    "Closing Ceremony": { color: "#f9a76c", icon: "mic" },
    "Dinner Time": { color: "#a8d5e2", icon: "utensils" },
    "Dinner": { color: "#a8d5e2", icon: "utensils" },
    "Lunch Break": { color: "#a8d5e2", icon: "utensils" },
    "Coffee Break": { color: "#d2b48c", icon: "coffee" },
    "Hacking": { color: "#8a2be2", icon: "code" },
    "Hacking Start": { color: "#8a2be2", icon: "play" },
    "Fun Activities": { color: "#f9a76c", icon: "gamepad" },
    "Prayers": { color: "#26a0b9", icon: "heart" },
    "Submissions": { color: "#26a0b9", icon: "folder" },
    "Pitching": { color: "#f9a76c", icon: "presentation" },
  };
  
  // Helper function to get category info
  export function getCategoryInfo(activity: string) {
    const exactMatch = activityCategories[activity as keyof typeof activityCategories];
    
    if (exactMatch) return exactMatch;
    
    // Look for partial matches if no exact match
    for (const [key, value] of Object.entries(activityCategories)) {
      if (activity.includes(key)) return value;
    }
    
    // Default color and icon if no match found
    return { color: "#6b7280", icon: "calendar" };
  }