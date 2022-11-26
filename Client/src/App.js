import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MyWorkout from './components/pages/MyWorkout';
import Food from './components/pages/Food';
import Workout from './components/pages/Workout';
// import HomeContainer from './components/HomeContainer';
import NavTabs from './components/NavTabs';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <Router>
            <div>
            <Header />
              <NavTabs />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<Signup />} />
                <Route path="/myworkout" element={<MyWorkout />} />
                <Route path="/workout" element={<Workout />} />
                {/* <Route path="/food" element={<Food />} /> */}
                {/* <Route path="*" element={<NoMatch />} /> */}
              </Routes>
            </div>
          </Router>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
