import { Quiz } from '../../data/quiz.types';
import { Action, InitialState } from './quizContext.types';

export const initialState: InitialState = {
  allQuizzes: null,
  currentQuiz: null,
  currentQuestionNumber: 0,
  score: 0,
  isOptionClickEnabled: true,
};

export const quizReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'INITIALIZE_ALL_QUIZZES':
      return {
        ...state,
        allQuizzes: action.payload,
      };

    case 'INITIALIZE_SELECTED_QUIZ':
      const selectedQuiz = action.payload.currentQuiz as Quiz;
      selectedQuiz.questions.forEach((question) => (question.selectedOptionID = null));

      return {
        ...state,
        currentQuiz: {
          ...selectedQuiz,
        },
      };

    case 'SET_SELECTED_OPTION':
      const { questionID, optionID } = action.payload;
      const quizQuestions = state.currentQuiz?.questions.map((question) => {
        if (question._id === questionID) {
          return { ...question, selectedOptionID: optionID };
        } else {
          return question;
        }
      });

      return {
        ...state,
        currentQuiz: {
          ...state.currentQuiz,
          questions: quizQuestions,
        } as Quiz,
      };

    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + action.payload.score,
      };

    case 'DECREMENT_SCORE':
      return {
        ...state,
        score: state.score - action.payload.score,
      };

    case 'INCREMENT_QUESTION_NUMBER':
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };

    case 'ENABLE_CLICK':
      return {
        ...state,
        isOptionClickEnabled: true,
      };

    case 'DISABLE_CLICK':
      return {
        ...state,
        isOptionClickEnabled: false,
      };

    case 'RESET_QUIZ':
      return {
        ...state,
        currentQuiz: null,
        currentQuestionNumber: 0,
        score: 0,
        isOptionClickEnabled: true,
      };

    default:
      throw new Error('Error in quiz reducer');
  }
};
