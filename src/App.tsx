import './App.css';
import { Home, QuizContainer, Result } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/quiz/:quizID" element={<QuizContainer />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
