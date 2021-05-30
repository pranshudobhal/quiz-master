import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../../context/quizContext/quizContext';
import { Quiz } from '../../data/quiz.types';
import { Error404 } from '../Error/Error404';
import { QuestionContainer } from './components/QuestionContainer';
import { RulesContainer } from './components/RulesContainer';

export function QuizContainer() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const {
    state: { allQuizzes },
    dispatch,
  } = useQuiz();
  const { quizID } = useParams();
  const quiz = allQuizzes?.find((quizItem) => quizItem._id === quizID) as Quiz;

  useEffect(() => {
    if (quiz) {
      dispatch({ type: 'INITIALIZE_SELECTED_QUIZ', payload: { currentQuiz: quiz as Quiz } });
    }
  }, [dispatch, quiz]);

  return (
    <>
      {quiz && !startQuiz && <RulesContainer setStartQuiz={setStartQuiz} quiz={quiz} />}
      {quiz && startQuiz && <QuestionContainer />}
      {!quiz && <Error404 />}
    </>
  );
}
