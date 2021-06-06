import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../../context/quiz/quizContext';
import { Quiz } from '../../data/quiz.types';
import { Error404 } from '../Error/Error404';
import { QuestionContainer } from './components/QuestionContainer';
import { RulesContainer } from './components/RulesContainer';

export function QuizContainer() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    state: { currentQuiz },
    dispatch,
  } = useQuiz();
  const { quizID } = useParams();

  useEffect(() => {
    (async function fetchDataFromServer() {
      try {
        // const quizByID = await axios.get(`http://localhost:3000/quiz/${quizID}`);
        const quizByID = await axios.get(`https://quizmaster.pranshudobhal.repl.co/quiz/${quizID}`);

        dispatch({ type: 'INITIALIZE_SELECTED_QUIZ', payload: { currentQuiz: quizByID.data.quiz[0] as Quiz } });
      } catch (error) {
        setError(true);
        console.error('Error initializing quiz from backend!!! ' + error);
      }
    })();
  }, []);

  return (
    <>
      {currentQuiz && !startQuiz && <RulesContainer setStartQuiz={setStartQuiz} quiz={currentQuiz as Quiz} />}
      {currentQuiz && startQuiz && <QuestionContainer />}
      {!error && !currentQuiz && <h1>Loading...</h1>}
      {error && !currentQuiz && <Error404 />}
    </>
  );
}
