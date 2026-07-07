export interface InvolvementItem {
  id: number;
  role: string;
  club: string;
  duration: string;
  achievements: string[];
}

export const involvement: InvolvementItem[] = [
  {
    id: 1,
    role: "Secretary",
    club: "Monash Speakers Society (ToastMasters)",
    duration: "Jan 2025 – Dec 2025",
    achievements: [
      "Coordinated society operations, including meeting agendas, membership records, and official documentation",
    ],
  },
  {
    id: 2,
    role: "Sales Support Team Member",
    club: "INTI International Sales Support Team",
    duration: "Jan 2019 – May 2020",
    achievements: [
      "Best Data Entry of the Month",
      ],
  },
];
