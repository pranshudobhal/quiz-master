import { Quiz } from "./quiz.types";

export const quiz1: Quiz = {
    id: "1",
    name: 'Marvel Cinematic Universe',
    playTime: '5 minutes',
    score: 0,
    totalQuestions: 3,
    questions: [
      {
        id: "11",
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            id: "111",
            text: '22',
            isRight: true,
          },
          {
            id: "112",
            text: '6',
            isRight: false,
          },
          {
            id: "113",
            text: '20',
            isRight: false,
          },
        ],
      },
      {
        id: "12",
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoints: 5,
        options: [
          {
            id: "121",
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            id: "122",
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        id: "13",
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            id: "131",
            text: 'Clint',
            isRight: false,
          },
          {
            id: "132",
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  }