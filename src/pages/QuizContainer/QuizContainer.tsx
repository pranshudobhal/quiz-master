import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../context/auth/authContext';
import { useQuiz } from '../../context/quiz/quizContext';
import { Quiz } from '../../data/quiz.types';
import { Error404 } from '../Error/Error404';
import { QuestionContainer } from './components/QuestionContainer';
import { RulesContainer } from './components/RulesContainer';
import { Loader } from '../../components';
import { API_URL } from '../../utils';

export function QuizContainer() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { token } = useAuth();

  const {
    state: { currentQuiz },
    dispatch,
  } = useQuiz();
  const { quizID } = useParams();

  useEffect(() => {
    token &&
      (async function fetchDataFromServer() {
        try {
          const quizByID = await axios.get(`${API_URL}/quiz/${quizID}`);

          dispatch({ type: 'INITIALIZE_SELECTED_QUIZ', payload: { currentQuiz: quizByID.data.quiz[0] as Quiz } });
        } catch (error) {
          setError(true);
          console.error('Error initializing quiz from backend!!! ' + error);
        }
      })();
  }, [token, dispatch, quizID]);

  return (
    <>
      {currentQuiz && !startQuiz && <RulesContainer setStartQuiz={setStartQuiz} quiz={currentQuiz as Quiz} />}
      {currentQuiz && startQuiz && <QuestionContainer />}
      {!error && !currentQuiz && <Loader />}
      {error && !currentQuiz && <Error404 />}
    </>
  );
}
