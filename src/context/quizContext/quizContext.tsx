import { createContext, useContext, useEffect, useReducer } from 'react';
import { quizReducer, initialState } from './quizReducer';
import { CreateContextType, QuizProviderType } from './quizContext.types';
import { quizData } from '../../data/getQuiz';

const QuizContext = createContext<CreateContextType>(undefined);

export function QuizProvider({ children }: QuizProviderType) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    console.log(quizData);
    dispatch({ type: 'INITIALIZE_QUIZ_DATA', payload: quizData });
  });

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  return useContext(QuizContext);
}
