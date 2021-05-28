import { Box, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuiz } from '../../../context/quizContext/quizContext';
import { Option, Question } from '../../../data/quiz.types';

export function OptionContainer({ currentQuestion: question, optionData: option, questions }: { currentQuestion: Question; optionData: Option; questions: Question[] }) {
  const { id, isRight, text } = option;
  const {
    state: { currentQuestionNumber, isOptionClickEnabled },
    dispatch,
  } = useQuiz();
  const navigate = useNavigate();
  const [selectedOptionID, setSelectedOptionID] = useState('');

  const nextQuestionAndResultHandler = () => {
    currentQuestionNumber + 1 === questions.length ? navigate('/result') : dispatch({ type: 'INCREMENT_QUESTION_NUMBER' });
  };

  const checkCorrectAnswerAndUpdateScore = (option: Option) => {
    option.isRight ? dispatch({ type: 'INCREMENT_SCORE', payload: { score: question.points } }) : dispatch({ type: 'DECREMENT_SCORE', payload: { score: question.negativePoints ? question.negativePoints : 0 } });

    nextQuestionAndResultHandler();
  };

  const selectedOptionHandler = (option: Option) => {
    setSelectedOptionID(option.id);
    dispatch({
      type: 'SET_SELECTED_OPTION',
      payload: {
        questionID: question.id,
        optionID: option.id,
      },
    });
    dispatch({ type: 'DISABLE_CLICK' });

    setTimeout(() => {
      checkCorrectAnswerAndUpdateScore(option);
      dispatch({ type: 'ENABLE_CLICK' });
    }, 2000);
  };

  const buttonColor = useColorModeValue('gray.200', 'gray.800');
  const correctAnswerColor = useColorModeValue('green.300', 'green.400');
  const wrongAnswerColor = useColorModeValue('red.500', 'red.600');

  const getOptionStyles = () => {
    if (!isOptionClickEnabled) {
      if (isRight) {
        return correctAnswerColor;
      } else if (id === selectedOptionID) {
        return wrongAnswerColor;
      }
    }
    return buttonColor;
  };

  return (
    <Box as="button" disabled={!isOptionClickEnabled} h={'max-content'} rounded={'xl'} p={4} onClick={() => selectedOptionHandler(option)} bg={getOptionStyles()}>
      {text}
    </Box>
  );
}
