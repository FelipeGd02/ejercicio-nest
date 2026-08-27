export type CourseLevel =
  | 'basic'
  | 'intermediate'
  | 'advanced';

export interface Course {
  id: number;
  name: string;
  level: CourseLevel;
  active: boolean;
  durationHours: number;
}