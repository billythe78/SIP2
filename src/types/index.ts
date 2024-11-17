export type UserRank = 'Beginner' | 'Intermediate' | 'Advanced';
export type AgeGroup = '5-7' | '7-9' | '9-12' | '12-14';

export interface User {
  id: string;
  name: string;
  age: number;
  ageGroup: AgeGroup;
  email: string;
  rank: UserRank;
  questionsCompleted: number;
  accuracy: number;
  averageTime: number;
}

export interface Question {
  id: string;
  ageGroup: AgeGroup;
  type: 'IQ' | 'ProblemSolving' | 'Morality';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}