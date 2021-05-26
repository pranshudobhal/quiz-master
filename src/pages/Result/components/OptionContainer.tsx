import { Box, useColorModeValue } from '@chakra-ui/react';
import { Option, Question } from '../../../data/quiz.types';

export function OptionContainer({ question, optionData: option }: { question: Question; optionData: Option }) {
  const { id, isRight, text } = option;
  const { selectedOptionID } = question;

  const buttonColor = useColorModeValue('gray.100', 'gray.800');
  const correctAnswerColor = useColorModeValue('green.300', 'green.400');
  const wrongAnswerColor = useColorModeValue('red.500', 'red.600');

  const getOptionStyles = () => {
    if (isRight) {
      return correctAnswerColor;
    } else if (id === selectedOptionID) {
      return wrongAnswerColor;
    }
    return buttonColor;
  };

  return (
    <Box as="button" disabled h={'full'} w={'full'} rounded={'xl'} p={4} bg={getOptionStyles()}>
      {text}
    </Box>
  );
}
