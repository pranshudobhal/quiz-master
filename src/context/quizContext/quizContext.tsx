import { createContext, useContext, useReducer } from 'react';
import { quizReducer, initialState } from './quizReducer';
import { CreateContextType, QuizProviderType } from './quizContext.types';

const QuizContext = createContext<CreateContextType>({} as CreateContextType);

export function QuizProvider({ children }: QuizProviderType) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
