import './App.css';
import { Home, QuizContainer } from './pages';
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
      </Routes>
    </>
  );
}

export default App;
