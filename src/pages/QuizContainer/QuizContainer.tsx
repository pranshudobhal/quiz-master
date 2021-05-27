import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useQuiz } from '../../context/quizContext/quizContext';
import { allQuizzez } from '../../data/getQuiz';
import { Quiz } from '../../data/quiz.types';
import { QuestionContainer } from './components/QuestionContainer';
import { RulesContainer } from './components/RulesContainer';

export function QuizContainer() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const { dispatch } = useQuiz();
  const { quizID } = useParams();
  const quiz = allQuizzez.find((quizItem) => quizItem.id === quizID) as Quiz;

  useEffect(() => {
    dispatch({ type: 'RESET_QUIZ' });
    dispatch({ type: 'INITIALIZE_SELECTED_QUIZ', payload: { quiz: quiz as Quiz } });
  }, [dispatch, quiz]);

  return (
    <div>
      {!startQuiz && <RulesContainer setStartQuiz={setStartQuiz} quiz={quiz} />}
      {startQuiz && <QuestionContainer />}
    </div>
  );
}
