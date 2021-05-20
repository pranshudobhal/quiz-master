import { Action, InitialState } from './quizContext.types';

export const initialState: InitialState = { selectedQuiz: null, currentQuestionNumber: 1 };

export const quizReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'INITIALIZE_SELECTED_QUIZ':
      return {
        ...state,
        selectedQuiz: {
          ...action.payload.quiz,
        },
      };

    case 'SELECTED_OPTION':
      return state;

    case 'INCREMENT_SCORE':
      return state;

    case 'DECREMENT_SCORE':
      return state;

    case 'INCREMENT_QUESTION_NUMBER':
      return state;

    case 'RESET':
      return { ...initialState };

    default:
      throw new Error('Error in quiz reducer');
  }
};
