export type EventItem = {
  slug: string;
  title: string;
  date: string;   // ISO date
  time?: string;
  location: string;
  rsvp?: boolean;
  description?: string;
};
