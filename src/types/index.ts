export interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  link: string;
  isLocal?: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
