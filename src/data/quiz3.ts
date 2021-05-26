import { Quiz } from "./quiz.types";

export const quiz3: Quiz = {
    id: "3",
    name: 'Football',
    playTime: '5 minutes',
    totalPoints: 25,
    totalQuestions: 3,
    questions: [
      {
        id: "31",
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            id: "311",
            text: '22',
            isRight: false,
          },
          {
            id: "312",
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        id: "32",
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoints: 5,
        options: [
          {
            id: "321",
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            id: "322",
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        id: "33",
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            id: "331",
            text: 'Clint',
            isRight: false,
          },
          {
            id: "332",
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  }