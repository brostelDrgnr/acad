export interface Exercise {
  order: number;
  name: string;
  sets: string | number;
  reps: string;
  notes: string;
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  duration: string;
  exercises: Exercise[];
}

export interface ScheduleItem {
  day: string;
  focus: string;
  workoutId: string | null; // 'A', 'B', 'C', or null for rest/cardio only
  workoutTime: string;
  cardio: string;
  totalDuration: string;
}

export interface CardioProtocol {
  title: string;
  days: string[];
  duration: string;
  intensity: string;
  description: string;
  notes: string[];
}

export interface DietMeal {
  time: string;
  title: string;
  description: string;
  options: string[];
}

export interface DietSection {
  plateRule: {
    percentage: string;
    title: string;
    description: string;
    items: string;
    color: string;
  }[];
  menu: DietMeal[];
  tips: {
    title: string;
    description: string;
  }[];
  shoppingList: {
    category: string;
    items: string[];
  }[];
}