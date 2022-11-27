import logo from './logo.svg';
import './styles/Nav.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
// import MyCalendar from './components/pages/MyCalendar';
import Food from './components/pages/Food';
import Workout from './components/pages/Workout';
// import HomeContainer from './components/HomeContainer';
import NavTabs from './components/NavTabs';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <Router>
            <div>
              <NavTabs />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                <Route path="/workout" element={<Workout />} />
                <Route path="/food" element={<Food />} />
                {/* <Route path="*" element={<NoMatch />} /> */}
              </Routes>
            </div>
          </Router>
        </ApolloProvider>
      </header>
    </div>
  );
}

const port = process.env.PORT || 3000;
app.listen(port);

export default App;
