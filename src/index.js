import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar';
import Jumbotron from './components/jumbotron';
import AboutMe from './components/aboutMe';

const App = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <AboutMe />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
