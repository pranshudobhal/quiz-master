import { Stack } from '@chakra-ui/react';
import { QuizCard } from './components/QuizCard';
import { quizzez } from '../../data/getQuiz';
import { Quiz } from '../../data/quiz.types';

export function Home() {
  return (
    <Stack direction={['column', 'row']} spacing="24px" m={4}>
      {quizzez.map((quiz: Quiz) => {
        return <QuizCard key={quiz.id} quizItem={quiz} />;
      })}
    </Stack>
  );
}
