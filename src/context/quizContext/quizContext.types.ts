import { Quiz } from "../../data/quiz.types"

export type ActionType = 
 | { type: 'INITIALIZE_QUIZ_DATA', payload: Quiz }
 | { type: 'INCREMENT_SCORE' }
 | { type: 'DECREMENT_SCORE' }

export type DispatchType = (action: ActionType) => void

//Initial state
export type InitialStateType = { count: number }

export type QuizProviderType = { children: React.ReactNode }

export type CreateContextType = { state: InitialStateType; dispatch: DispatchType } | undefined

