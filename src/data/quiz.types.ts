export type Option = {
    id: string;
    text: string;   
    isRight: boolean;
  };
  
  export type Question = {
    id: string;
    question: string;
    points: number;
    selectedOptionID?: string | null;
    negativePoints?: number;
    options: Option[];
  };
  
  export type Quiz = {
    id: string;
    name: string;
    totalPoints: number,
    totalQuestions: number;
    playTime: string;
    questions: Question[];
  };

  export type AllQuizzes = Quiz[];
  