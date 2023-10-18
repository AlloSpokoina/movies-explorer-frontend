import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import Error from '../Error/Error.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';


export default function Main({ name, onRegister,
  onLogin,
  logOut,
  editUserData,
  setIsError,
  savedMovies,
  onDelete,
  addMovie,
  isSuccess,
  setSuccess,
  setIsEdit,
  isEdit,
 }) {

  return (
    <main className="main">
      {{
        home:
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </>,
        signin: <Login name={name} onLogin={onLogin} setIsError={setIsError} />,
        signup: <Register name={name} onRegister={onRegister} setIsError={setIsError} />,
        error: <Error />,
        profile: <Profile name={name}
          logOut={logOut}
          editUserData={editUserData}
          setIsError={setIsError}
          isSuccess={isSuccess}
          setSuccess={setSuccess}
          setIsEdit={setIsEdit}
          isEdit={isEdit} />,
        movies:
          <>
            <Movies savedMovies={savedMovies} addMovie={addMovie} setIsError={setIsError} />
          </>,
        savedmovies:
          <>
            <SavedMovies savedMovies={savedMovies} onDelete={onDelete} setIsError={setIsError} />
          </>
      }[name]}
    </main>
  );
}

