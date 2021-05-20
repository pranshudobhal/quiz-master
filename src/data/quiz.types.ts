export type Option = {
    id: number;
    text: string;   
    isRight: boolean;
  };
  
  export type Question = {
    id: number;
    question: string;
    points: number;
    negativePoint?: number;
    options: Option[];
  };
  
  export type Quiz = {
    id: number;
    name: string;
    score: number;
    totalQuestions: number;
    playTime: string;
    questions: Question[];
  };
  