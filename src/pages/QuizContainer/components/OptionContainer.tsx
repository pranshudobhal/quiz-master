import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuiz } from '../../../context/quizContext/quizContext';
import { Option, Question } from '../../../data/quiz.types';

/**
 * TODO:
 * 1. set the selected option id in the state -- done
 * 2. make a function to check if answer is correct or not -- done
 * 3. update score and show the correct or wrong answer -- done
 * 4. increment question number state to +1 -- done
 * 5. if all questions over, show result
 */

export function OptionContainer({ currentQuestion: question, optionData: option, questions }: { currentQuestion: Question; optionData: Option; questions: Question[] }) {
  const { text } = option;
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
    option.isRight ? dispatch({ type: 'INCREMENT_SCORE', payload: { score: question.points } }) : dispatch({ type: 'DECREMENT_SCORE', payload: { score: question.negativePoints } });

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

  const getOptionStyles = () => {
    if (!isOptionClickEnabled) {
      if (option.isRight) {
        return 'green.400';
      } else if (option.id === selectedOptionID) {
        return 'red.600';
      }
    }
    return 'gray.800';
  };

  return (
    <Box as="button" disabled={!isOptionClickEnabled} h={'full'} rounded={'xl'} p={4} cursor={'pointer'} onClick={() => selectedOptionHandler(option)} bg={getOptionStyles()}>
      {text}
    </Box>
  );
}
