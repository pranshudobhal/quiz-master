import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider, AuthProvider } from './context';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <AuthProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
