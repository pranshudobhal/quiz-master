export type Option = {
    _id: string;
    text: string;   
    isRight: boolean;
  };
  
  export type Question = {
    _id: string;
    question: string;
    points: number;
    selectedOptionID?: string | null;
    negativePoints?: number;
    options: Option[];
  };
  
  export type Quiz = {
    _id: string;
    name: string;
    totalPoints: number,
    totalQuestions: number;
    playTime: string;
    imageURL: string;
    description: string;
    questions: Question[];
  };

  export type AllQuizzes = Quiz[];
  