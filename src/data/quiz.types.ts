export type Option = {
    text: string;   
    isRight: boolean;
  };
  
  export type Question = {
    question: string;
    points: number;
    negativePoint?: number;
    options: Option[];
  };
  
  export type Quiz = Array<{
    id: number;
    quizName: string;
    playTime: string;
    questions: Question[];
  }>;
  
 