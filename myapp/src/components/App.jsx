import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import { useState } from 'react';
import CurrentUserContext from '../contexts/CurrentContext.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Router>
        <div className="page__container">
          <Routes>
            <Route path='/signin' element={
              <Main name='signin' setLoggedIn={setLoggedIn} />
            } />

            <Route path='/signup' element={
              <Main name='signup' setLoggedIn={setLoggedIn} />
            } />
            <Route path='/' element={
              <>
                <Header name='home' loggedIn={loggedIn} />
                <Main name='home' />
                <Footer />
              </>
            } />

            <Route path='/movies' element={
              <>
                <Header />
                <Main name='movies' />
                <Footer />
              </>
            } />

            <Route path='/saved-movies' element={
              <>
                <Header />
                <Main name='savedmovies' />
                <Footer />
              </>
            } />

            <Route path='/profile' element={
              <>
                <Header />
                <Main name='profile' setLoggedIn={setLoggedIn} />
              </>
            } />

            <Route path='*' element={
              <>
                <Main name='error' />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default App;
