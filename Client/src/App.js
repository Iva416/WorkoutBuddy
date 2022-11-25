import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import MyCalendar from './components/pages/MyCalendar';
import Food from './pages/Food';
import Workout from './pages/Workout';
import HomeContainer from './components/HomeContainer';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Globalstate> 
                <NavTabs />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/workout" element={<Workout />} />
                  <Route path="/food/:id" element={<Food />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Globalstate>
            </div>
          </Router>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;