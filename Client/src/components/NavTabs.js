import React from 'react';
// import './styles/NavTabs.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/myworkout"
          onClick={() => handlePageChange('MyWorkout')}
          className={
            currentPage === 'MyWorkout' ? 'nav-link active' : 'nav-link'
          }
        >
          MyWorkout
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/workout"

          onClick={() => handlePageChange('Workout')}
          className={currentPage === 'Workout' ? 'nav-link active' : 'nav-link'}
        >
          Workouts
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/food"
          onClick={() => handlePageChange('Food')}
          className={currentPage === 'Food' ? 'nav-link active' : 'nav-link'}
        >
          Food
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
