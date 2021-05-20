/**
 * TODO:
 *
 * 1. Display rules container with start quiz button
 * 2. User clicks on Start quiz, remove the rules container and display the quiz questions
 *
 * Quiz Questions: Either in a single list in downward manner, or one by one like cards
 *
 * 3. User clicks on option, then selects Next, dispatch 2 actions: one log the answer in an array, second increment question number
 */

import { RulesContainer } from './components/RulesContainer';

export function QuizContainer() {
  return (
    <div>
      <RulesContainer />
      {/* <QuestionContainer /> */}
    </div>
  );
}
