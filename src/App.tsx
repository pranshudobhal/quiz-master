import './App.css';
import { Error404, Home, QuizContainer, Result } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { useQuiz } from './context/quizContext/quizContext';

function App() {
  const {
    state: { currentQuiz },
  } = useQuiz();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/quiz/:quizID" element={<QuizContainer />} />
        {currentQuiz && <Route path="/result" element={<Result />} />}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
