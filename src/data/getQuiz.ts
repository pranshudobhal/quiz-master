import { AllQuizzes } from './quiz.types';
// import { quiz1 } from './quiz1';
// import { quiz2 } from './quiz2';
// import { quiz3 } from './quiz3';

export const allQuizzez: AllQuizzes = [{
    id: "1",
    name: 'Marvel Cinematic Universe',
    playTime: '5 minutes',
    totalPoints: 25,
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
  }, {
    id: "2",
    name: 'DC',
    playTime: '5 minutes',
    totalPoints: 25,
    totalQuestions: 3,
    questions: [
      {
        id: "21",
        question: 'How many avengers were there in first Avengers movie released in 2012?',
        points: 5,
        negativePoints: 2,
        options: [
          {
            id: "211",
            text: '22',
            isRight: false,
          },
          {
            id: "212",
            text: '6',
            isRight: true,
          },
        ],
      },
      {
        id: "22",
        question: 'What was Dr. Strange doing during the fight of New York in 2012?',
        points: 15,
        negativePoints: 5,
        options: [
          {
            id: "221",
            text: 'getting trained as master of the mystic arts',
            isRight: false,
          },
          {
            id: "222",
            text: 'performing surgery as a real doctor',
            isRight: true,
          },
        ],
      },
      {
        id: "23",
        question: "who's the love interest for Wanda in MCU?",
        points: 5,
        options: [
          {
            id: "231",
            text: 'Clint',
            isRight: false,
          },
          {
            id: "232",
            text: 'Vision',
            isRight: true,
          },
        ],
      },
    ],
  }, {
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
  }];
