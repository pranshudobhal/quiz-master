import { Quiz } from "../../data/quiz.types"

export type InitialStateType = { selectedQuiz: Quiz | null; currentQuestionNumber: number; }

export type DispatchType = (action: ActionType) => void

export type QuizProviderType = { children: React.ReactNode }

export type CreateContextType = { state: InitialStateType; dispatch: DispatchType } | undefined

export type ActionType = 
 | { type: 'INITIALIZE_SELECTED_QUIZ', payload: {quiz: Quiz} }
 | { type: 'INCREMENT_SCORE' }
 | { type: 'DECREMENT_SCORE' }
 | { type: 'INCREMENT_QUESTION_NUMBER' }
 | { type: 'SELECTED_OPTION', payload: { 
     questionID: number;
     optionID: number;
  } }
 | { type: 'RESET' }

