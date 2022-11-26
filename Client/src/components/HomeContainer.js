import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import MyWorkout from './pages/MyWorkout';
import Workout from './pages/Workout';
import Food from './pages/Food';
// import './styles/HomeContainer.css';

export default function HomeContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Calendar') {
      return <MyWorkout />;
    }
    if (currentPage === 'Workout') {
      return <Workout />;
    }
    // return <Food />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="header">
      <h1 className="main-h1">Workout Buddy</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
