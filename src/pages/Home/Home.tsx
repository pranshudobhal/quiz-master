import { Stack } from '@chakra-ui/react';
import { QuizCard } from './components/QuizCard';
import { allQuizzez } from '../../data/getQuiz';
import { Quiz } from '../../data/quiz.types';
import { useEffect } from 'react';
import { useQuiz } from '../../context/quizContext/quizContext';

export function Home() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({ type: 'RESET_QUIZ' });
  }, [dispatch]);

  return (
    <Stack direction={['column', 'row']} spacing="24px" m={4} justify="center">
      {allQuizzez.map((quiz: Quiz) => {
        return <QuizCard key={quiz.id} quizItem={quiz} />;
      })}
    </Stack>
  );
}
