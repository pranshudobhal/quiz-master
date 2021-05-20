import { Quiz } from "./quiz.types";

export const quiz2: Quiz = {
    id: 2,
    name: 'DC',
    playTime: '5 minutes',
    score: 0,
    totalQuestions: 3,
    questions: [
      {
        id: 21,
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoint: 2,
        options: [
          {
            id: 211,
            text: '22',
            isRight: false,
          },
          {
            id: 212,
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        id: 22,
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoint: 5,
        options: [
          {
            id: 211,
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            id: 212,
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        id: 23,
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            id: 211,
            text: 'Clint',
            isRight: false,
          },
          {
            id: 212,
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  }