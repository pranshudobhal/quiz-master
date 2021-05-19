import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider } from './context';
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './theme'



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <QuizProvider>
      <Router>
        <App />
      </Router>
    </QuizProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
