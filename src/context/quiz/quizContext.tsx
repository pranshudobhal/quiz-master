import { createContext, useContext, useReducer, FunctionComponent, useEffect } from 'react';
import { quizReducer, initialState } from './quizReducer';
import axios from 'axios';
import { CreateQuizContext } from './quizContext.types';
import { API_URL } from '../../utils';

const QuizContext = createContext<CreateQuizContext>({ state: initialState, dispatch: () => null });

export const QuizProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    (async function fetchQuizDataFromServer() {
      try {
        const quizResponse = await axios.get(`${API_URL}/quiz`);

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
