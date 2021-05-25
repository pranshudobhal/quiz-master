/**
 * TODO:
 *
 * 1. Display rules container with start quiz button -- done
 * 2. User clicks on Start quiz, remove the rules container and display the quiz questions -- done
 *
 * Quiz Questions: Either in a single list in downward manner, or one by one like cards -- done
 *
 * 3. User clicks on option, then selects Next, dispatch 2 actions: one log the answer in an array, second increment question number -- done
 * 4. Show Result
 */

import { useState } from 'react';
import { QuestionContainer } from './components/QuestionContainer';
import { RulesContainer } from './components/RulesContainer';

export function QuizContainer() {
  const [startQuiz, setStartQuiz] = useState<boolean>(false);

  /**
   * TODO:
   * 1. use useEffect() to initialize quiz on rules page, take the quizID from params and initialize here
   */

  return (
    <div>
      {!startQuiz && <RulesContainer setStartQuiz={setStartQuiz} />}
      {startQuiz && <QuestionContainer />}
    </div>
  );
}
