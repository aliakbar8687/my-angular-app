// src/app/models/course.model.ts

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  students: number;
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  instructorName:string;
  instructorImage:string;
}