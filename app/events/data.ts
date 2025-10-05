export type EventItem = {
  title: string;
  date: string;      // ISO
  time?: string;
  location: string;
  rsvp?: boolean;
  description?: string;
};

export const events: EventItem[] = [
  {
    title: "Coffee Brewing Morning (Pour-Over / French Press)",
    date: "2025-10-18",
    time: "9:00–11:00 AM",
    location: "Community Café, Cumberland",
    rsvp: true,
    description:
      "Hands-on brewing tables, bring beans if you like. Alcohol not served; refreshments provided.",
  },
  {
    title: "Community Walk – Downtown to Canal",
    date: "2025-11-01",
    time: "10:00–11:30 AM",
    location: "Meet at Canal Place",
  },
];
