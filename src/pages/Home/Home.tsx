import { Stack } from '@chakra-ui/react';
import { QuizCard } from './components/QuizCard';
import { allQuizzez } from '../../data/getQuiz';
import { Quiz } from '../../data/quiz.types';

export function Home() {
  return (
    <Stack direction={['column', 'row']} spacing="24px" m={4} justify="center">
      {allQuizzez.map((quiz: Quiz) => {
        return <QuizCard key={quiz.id} quizItem={quiz} />;
      })}
    </Stack>
  );
}
