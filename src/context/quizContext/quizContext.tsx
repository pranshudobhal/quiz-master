import { createContext, useContext, useReducer } from 'react';
import { quizReducer, initialState } from './quizReducer';
import { CreateContext, QuizProvider as QuizProviderType } from './quizContext.types';

const QuizContext = createContext<CreateContext>({} as CreateContext);

export function QuizProvider({ children }: QuizProviderType) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
