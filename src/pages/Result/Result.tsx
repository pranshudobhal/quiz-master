import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useQuiz } from '../../context/quizContext/quizContext';
import { Quiz } from '../../data/quiz.types';
import { QuestionContainer } from './components/QuestionContainer';

export function Result() {
  const {
    state: { currentQuiz, score },
  } = useQuiz();

  const { name, questions, totalPoints } = currentQuiz as Quiz;

  return (
    <Flex direction={'column'} minH={'100vh'} align={'center'} justify={'center'} py={8} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Heading align={'center'} textTransform={'uppercase'} fontSize={['xl', '2xl', '3xl']} mb={5} color={useColorModeValue('gray.800', 'gray.200')}>
        {name}
      </Heading>
      <Stack isInline align={'baseline'} pb={2} mb={4}>
        <Text fontSize={'lg'} color={useColorModeValue('gray.800', 'gray.200')}>
          Final Score: {score} / {totalPoints}
        </Text>
      </Stack>
      {questions.map((question) => {
        return <QuestionContainer key={question.id} question={question} />;
      })}
    </Flex>
  );
}
