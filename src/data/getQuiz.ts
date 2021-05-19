import { Quiz } from './quiz.types';

const quizData: Quiz = [
  {
    id: 1,
    quizName: 'Marvel Cinematic Universe',
    playTime: '5 minutes',
    questions: [
      {
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: '22',
            isRight: false,
          },
          {
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoint: 5,
        options: [
          {
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            text: 'Clint',
            isRight: false,
          },
          {
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    quizName: 'DC',
    playTime: '5 minutes',
    questions: [
      {
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: '22',
            isRight: false,
          },
          {
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoint: 5,
        options: [
          {
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            text: 'Clint',
            isRight: false,
          },
          {
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    quizName: 'Football',
    playTime: '5 minutes',
    questions: [
      {
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoint: 2,
        options: [
          {
            text: '22',
            isRight: false,
          },
          {
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoint: 5,
        options: [
          {
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            text: 'Clint',
            isRight: false,
          },
          {
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  },
];

export { quizData };
