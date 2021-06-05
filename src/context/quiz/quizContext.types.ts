import { AllQuizzes, Quiz } from "../../data/quiz.types"

export type InitialState = { allQuizzes: AllQuizzes | null, currentQuiz: Quiz | null; currentQuestionNumber: number; score: number; isOptionClickEnabled: boolean; }

export type CreateQuizContext = { state: InitialState; dispatch: React.Dispatch<any> }

export type Action = 
 | { type: 'INITIALIZE_ALL_QUIZZES', payload: AllQuizzes }
 | { type: 'INITIALIZE_SELECTED_QUIZ', payload: { currentQuiz: Quiz } }
 | { type: 'INCREMENT_SCORE', payload: { score: number } }
 | { type: 'DECREMENT_SCORE', payload: { score: number } }
 | { type: 'INCREMENT_QUESTION_NUMBER' }
 | { type: 'SET_SELECTED_OPTION', payload: { 
     questionID: string;
     optionID: string;
  } }
 | { type: 'ENABLE_CLICK' }
 | { type: 'DISABLE_CLICK' }
 | { type: 'RESET_QUIZ' }
