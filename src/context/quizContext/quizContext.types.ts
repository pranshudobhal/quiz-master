import { Quiz } from "../../data/quiz.types"

export type InitialState = { selectedQuiz: Quiz | null; currentQuestionNumber: number; }

export type Dispatch = (action: Action) => void

export type QuizProvider = { children: React.ReactNode }

export type CreateContext = { state: InitialState; dispatch: Dispatch } | undefined

export type Action = 
 | { type: 'INITIALIZE_SELECTED_QUIZ', payload: {quiz: Quiz} }
 | { type: 'INCREMENT_SCORE' }
 | { type: 'DECREMENT_SCORE' }
 | { type: 'INCREMENT_QUESTION_NUMBER' }
 | { type: 'SELECTED_OPTION', payload: { 
     questionID: number;
     optionID: number;
  } }
 | { type: 'RESET' }

