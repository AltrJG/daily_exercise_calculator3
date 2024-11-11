export interface Exercise {
  type: string;
  duration: number;
  weight: number;
  calories?: number;
}

export interface ExerciseEntry extends Exercise {
  id: number;
  calories: number;
  userId?: string;
}