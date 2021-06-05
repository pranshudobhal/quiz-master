import { Stack } from '@chakra-ui/react';
import { QuizCard } from './components/QuizCard';
import { Quiz } from '../../data/quiz.types';
import { useEffect } from 'react';
import { useQuiz } from '../../context/quiz/quizContext';

export function Home() {
  const {
    state: { allQuizzes },
    dispatch,
  } = useQuiz();

  useEffect(() => {
    dispatch({ type: 'RESET_QUIZ' });
  }, [dispatch]);

  return (
    <Stack direction={['column', 'column', 'row']} spacing="24px" m={4} justify="center">
      {allQuizzes &&
        allQuizzes.map((quiz: Quiz) => {
          return <QuizCard key={quiz._id} quizItem={quiz} />;
        })}
    </Stack>
  );
}
