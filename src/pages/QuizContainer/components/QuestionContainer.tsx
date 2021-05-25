import { Flex, Stack, Heading, Text, useColorModeValue, Spacer, Grid } from '@chakra-ui/react';
import { useQuiz } from '../../../context/quizContext/quizContext';
import { Quiz } from '../../../data/quiz.types';
import { OptionContainer } from './OptionContainer';

export function QuestionContainer() {
  const {
    state: { currentQuiz, currentQuestionNumber, score },
  } = useQuiz();

  const { name, questions } = currentQuiz as Quiz;

  const currentQuestion = questions[currentQuestionNumber];

  return (
    <Flex minH={'80vh'} align={'center'} justify={'center'} py={8} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack boxShadow={'2xl'} maxW={['365px', '60vw', '50vw', '60vw', '50vw']} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} p={[8, 10]} spacing={8} align={'center'}>
        <Stack spacing={2}>
          <Heading align={'center'} textTransform={'uppercase'} fontSize={['xl', '2xl', '3xl']} mb={5} color={useColorModeValue('gray.800', 'gray.200')}>
            {name}
          </Heading>
          <Stack isInline align={'baseline'} pb={2}>
            <Text fontSize={'md'} color={'gray.500'}>
              Question: {currentQuestionNumber + 1}/{questions.length}
            </Text>
            <Spacer />
            <Text fontSize={'md'} color={'gray.500'}>
              Score: {score}
            </Text>
          </Stack>
          <Stack isInline align={'baseline'} pb={6}>
            <Text fontSize={'md'} color={useColorModeValue('gray.800', 'gray.100')}>
              {currentQuestion.question}
            </Text>
          </Stack>
          <Grid templateColumns="1fr" gap={4}>
            {currentQuestion.options.map((option) => {
              return <OptionContainer key={option.id} currentQuestion={currentQuestion} questions={questions} optionData={option} />;
            })}
          </Grid>
        </Stack>
        {/* <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'50%'}>
          <Button bg={'blue.400'} rounded={'full'} color={'white'} flex={'1 0 auto'} _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>
            Next
          </Button>
        </Stack> */}
      </Stack>
    </Flex>
  );
}
