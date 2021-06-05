import './App.css';
import { Error404, Home, Login, Categories, QuizContainer, Result, Profile } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { useQuiz } from './context/quiz/quizContext';
import { PrivateRoute } from './PrivateRoute';

function App() {
  const {
    state: { currentQuiz },
  } = useQuiz();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <PrivateRoute path="/categories" element={<Categories />} />
        <PrivateRoute path="/profile" element={<Profile />} />

        <PrivateRoute path="/quiz/:quizID" element={<QuizContainer />} />
        {currentQuiz && <PrivateRoute path="/result" element={<Result />} />}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
