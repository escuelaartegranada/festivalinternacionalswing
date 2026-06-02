export interface Artist {
  id: string;
  name: string;
  image: string;
  role: string;
  description?: string;
  members?: { name: string; instrumentOrRole: string; image: string; }[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  location?: string;
  type: 'concert' | 'workshop' | 'party' | 'show' | 'info';
}

export interface DaySchedule {
  date: string;
  day: string;
  location: string;
  events: ScheduleItem[];
}
