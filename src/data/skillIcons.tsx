import { 
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaPython, FaPhp, FaLaravel, 
  FaNodeJs, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiNestjs, SiMongodb, SiMysql, SiDotnet,
  SiSocketdotio, SiTypescript, SiPostgresql
} from 'react-icons/si';
import { Paintbrush, Video, Bot } from 'lucide-react';
import type { ReactNode } from 'react';

export interface SkillIcon {
  name: string;
  icon: ReactNode;
  category: string;
  color: string;
}

export const skillIcons: SkillIcon[] = [
  { name: "React.js", icon: <FaReact />, category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend", color: "#3178C6" },
  { name: "HTML5", icon: <FaHtml5 />, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, category: "Frontend", color: "#1572B6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", color: "#06B6D4" },
  { name: "Bootstrap", icon: <FaBootstrap />, category: "Frontend", color: "#7952B3" },
  { name: "JavaScript", icon: <FaJsSquare />, category: "Frontend", color: "#F7DF1E" },
  { name: "Python", icon: <FaPython />, category: "Backend", color: "#3776AB" },
  { name: "PHP", icon: <FaPhp />, category: "Backend", color: "#777BB4" },
  { name: "Laravel", icon: <FaLaravel />, category: "Backend", color: "#FF2D20" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", color: "inherit" },
  { name: "NestJS", icon: <SiNestjs />, category: "Backend", color: "#E0234E" },
  { name: "C#", icon: <SiDotnet />, category: "Backend", color: "#512BD4" },
  { name: "MySQL", icon: <SiMysql />, category: "Databases", color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases", color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Databases", color: "#47A248" },
  { name: "Figma", icon: <FaFigma />, category: "Design", color: "#F24E1E" },
  { name: "Canva", icon: <Paintbrush />, category: "Design", color: "#00C4CC" },
  { name: "Scale AI Chatbot", icon: <Bot />, category: "Tools", color: "inherit" },
  { name: "WebRTC", icon: <Video />, category: "Tools", color: "inherit" },
  { name: "Socket.io", icon: <SiSocketdotio />, category: "Tools", color: "inherit" },
  { name: "Git/GitHub", icon: <FaGitAlt />, category: "Tools", color: "#F05032" },
];
