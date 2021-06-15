import { createContext, useContext, useReducer, FunctionComponent, useEffect } from 'react';
import { quizReducer, initialState } from './quizReducer';
import axios from 'axios';
import { CreateQuizContext } from './quizContext.types';

const QuizContext = createContext<CreateQuizContext>({ state: initialState, dispatch: () => null });

export const QuizProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async function fetchDataFromServer() {
      try {
        const quizResponse = await axios.get('http://localhost:3000/quiz');
        // const quizResponse = await axios.get('https://quizmaster.pranshudobhal.repl.co/quiz');

        dispatch({ type: 'INITIALIZE_ALL_QUIZZES', payload: quizResponse.data.allQuizzes });
      } catch (error) {
        console.error('Error initializing data from backend!!! ' + error);
      }
    })();
  }, []);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
