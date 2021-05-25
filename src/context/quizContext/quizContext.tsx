import { createContext, useContext, useReducer, FunctionComponent } from 'react';
import { quizReducer, initialState } from './quizReducer';
import { CreateContext } from './quizContext.types';

const QuizContext = createContext<CreateContext>({ state: initialState, dispatch: () => null });

export const QuizProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
