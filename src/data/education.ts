export interface EducationEntry {
  degree: string
  institution: string
  dateRange: string
  description: string
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Riphah International University",
    dateRange: "2021 - 2025",
    description: "Studied computer science with focus on software engineering and web development.",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab College",
    dateRange: "2018 - 2020",
    description: "Completed 12th grade studies with major focus on Mathematics and Physics.",
  },
  {
    degree: "Web Development Diploma (3 months)",
    institution: "ICT Training Institute, Johar Town",
    dateRange: "June 2022 - August 2022",
    description: "Summer program covering practical web development skills and polishing core fundamentals.",
  },
]
