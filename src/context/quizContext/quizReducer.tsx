import { ActionType, InitialStateType } from './quizContext.types';

export const initialState: InitialStateType = { count: 0 };

export const quizReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case 'INITIALIZE_QUIZ_DATA':
      return state;

    case 'INCREMENT_SCORE':
      return state;

    case 'DECREMENT_SCORE':
      return state;

    default:
      throw new Error('Error in quiz reducer');
  }
};
