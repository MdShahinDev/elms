
export enum CourseType {
  PAID = 'Paid',
  FREE = 'Free',
  OFFER = 'Limited Offer'
}

export enum BatchType {
  ONLINE = 'Online Batch',
  OFFLINE = 'Offline Batch'
}

export interface Course {
  id: string;
  title: string;
  subject: 'Mathematics' | 'Physics';
  instructor: string;
  type: CourseType;
  batchType: BatchType;
  price: number;
  originalPrice?: number;
  image: string;
  progress?: number;
  offerExpiresAt?: string;
  description: string;
  features?: string[];
  learningOutcomes?: string[];
  targetAudience?: string;
}

export interface User {
  name: string;
  email: string;
  role: 'student' | 'admin';
  avatar: string;
}

export interface NavItem {
  label: string;
  icon: string;
  path: string;
}
