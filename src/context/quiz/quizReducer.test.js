import { quizReducer } from './quizReducer';

describe('Testing quiz reducer', () => {
  it('initialize selected quiz', () => {
    const initialState = {
      currentQuiz: null,
    };

    const action = {
      type: 'INITIALIZE_SELECTED_QUIZ',
      payload: {
        currentQuiz: {
          name: 'Test 1',
          questions: [
            {
              question: 'Test question',
              options: [
                {
                  text: 'test text 1',
                  isRight: false,
                },
                {
                  text: 'test text 2',
                  isRight: true,
                },
              ],
            },
          ],
        },
      },
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({
      currentQuiz: {
        name: 'Test 1',
        questions: [
          {
            question: 'Test question',
            selectedOptionID: null,
            options: [
              {
                text: 'test text 1',
                isRight: false,
              },
              {
                text: 'test text 2',
                isRight: true,
              },
            ],
          },
        ],
      },
    });
  });

  it('set selected option in current quiz', () => {
    const initialState = {
      currentQuiz: {
        name: 'Test 1',
        questions: [
          {
            _id: 1,
            question: 'Test question 1',
            selectedOptionID: null,
          },
          {
            _id: 2,
            question: 'Test question 2',
            selectedOptionID: null,
          },
        ],
      },
    };

    const action = {
      type: 'SET_SELECTED_OPTION',
      payload: {
        questionID: 1,
        optionID: 2,
      },
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({
      currentQuiz: {
        name: 'Test 1',
        questions: [
          {
            _id: 1,
            question: 'Test question 1',
            selectedOptionID: 2,
          },
          {
            _id: 2,
            question: 'Test question 2',
            selectedOptionID: null,
          },
        ],
      },
    });
  });

  it('increment quiz score', () => {
    // Increment Test 1
    let initialState = {
      score: 0,
    };

    let actionIncrementScore = {
      type: 'INCREMENT_SCORE',
      payload: {
        score: 5,
      },
    };

    let state = quizReducer(initialState, actionIncrementScore);

    expect(state).toEqual({
      score: 5,
    });

    // Increment Test 2
    initialState = {
      score: 10,
    };

    actionIncrementScore = {
      type: 'INCREMENT_SCORE',
      payload: {
        score: 10,
      },
    };

    state = quizReducer(initialState, actionIncrementScore);

    expect(state).toEqual({
      score: 20,
    });
  });

  it('decrement quiz score', () => {
    // Decrement Test 1
    let initialState = {
      score: 0,
    };

    let actionDecrementScore = {
      type: 'DECREMENT_SCORE',
      payload: {
        score: 5,
      },
    };

    let state = quizReducer(initialState, actionDecrementScore);

    expect(state).toEqual({
      score: -5,
    });

    // Decrement Test 2
    initialState = {
      score: 10,
    };

    actionDecrementScore = {
      type: 'DECREMENT_SCORE',
      payload: {
        score: 5,
      },
    };

    state = quizReducer(initialState, actionDecrementScore);

    expect(state).toEqual({
      score: 5,
    });
  });

  it('reset state', () => {
    let initialState = {
      currentQuiz: {
        name: 'Test 1',
        questions: [
          {
            _id: 1,
            question: 'Test question 1',
            selectedOptionID: null,
          },
          {
            _id: 2,
            question: 'Test question 2',
            selectedOptionID: null,
          },
        ],
      },
      currentQuestionNumber: 5,
      score: 50,
      isOptionClickEnabled: false,
    };

    const action = {
      type: 'RESET_QUIZ',
    };

    const state = quizReducer(initialState, action);

    expect(state).toEqual({
      currentQuiz: null,
      currentQuestionNumber: 0,
      score: 0,
      isOptionClickEnabled: true,
    });
  });
});
