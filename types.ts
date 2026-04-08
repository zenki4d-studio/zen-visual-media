import { LucideIcon } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type ProjectCategory = 'All' | '3D TVC' | '3D FOOH' | '3D Product' | '3D Explainer' | 'AI Production';

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  titleJp?: string;
  titleKr?: string;
  category: ProjectCategory;
  client?: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  descriptionEn?: string;
  descriptionJp?: string;
  descriptionKr?: string;
}

export interface SkillData {
  subject: string;
  A: number; // Team aggregate score
  fullMark: number;
}