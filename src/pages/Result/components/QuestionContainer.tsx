import { Stack, Text, useColorModeValue, Grid } from '@chakra-ui/react';
import { Question } from '../../../data/quiz.types';
import { OptionContainer } from './OptionContainer';

export function QuestionContainer({ question: questionItem }: { question: Question }) {
  const { question, options } = questionItem;

  return (
    <Stack boxShadow={'xl'} w={['365px', '60vw', '50vw', '40vw', '35vw']} maxW={['365px', '60vw', '50vw', '60vw', '35vw']} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} p={[8, 10]} spacing={8} mb={12} align={'center'}>
      <Stack spacing={2} w={'full'}>
        <Stack isInline align={'baseline'} pb={6}>
          <Text fontSize={'md'} color={useColorModeValue('gray.800', 'gray.100')}>
            {question}
          </Text>
        </Stack>
        <Grid templateColumns="1fr" gap={4}>
          {options.map((option) => {
            return <OptionContainer key={option._id} question={questionItem} optionData={option} />;
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}
