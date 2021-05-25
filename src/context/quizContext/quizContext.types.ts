import { Quiz } from "../../data/quiz.types"

export type InitialState = { currentQuiz: Quiz | null; currentQuestionNumber: number; score: number; isOptionClickEnabled: boolean; }

export type CreateContext = { state: InitialState; dispatch: React.Dispatch<any> }

export type Action = 
 | { type: 'INITIALIZE_SELECTED_QUIZ', payload: { quiz: Quiz } }
 | { type: 'INCREMENT_SCORE', payload: { score: number } }
 | { type: 'DECREMENT_SCORE', payload: { score: number } }
 | { type: 'INCREMENT_QUESTION_NUMBER' }
 | { type: 'SET_SELECTED_OPTION', payload: { 
     questionID: string;
     optionID: string;
  } }
 | { type: 'ENABLE_CLICK' }
 | { type: 'DISABLE_CLICK' }
 | { type: 'RESET' }
