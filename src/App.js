import Footer from './components/Comman/Footer';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import Header from './components/Comman/Header';
import classes from './components/Comman/Comman.module.css'
import Content_list from './components/TOP250/TOP250';
import LoginPage from './components/Login/LoginPage';
import { AuthProvider } from './components/Login/Auth';
import PrivateRoute from './components/Login/PrivatRoute'
import Home from './components/PrivateOffice/Home';
import SignUp from './components/Login/SignUp';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import SearchContextProvider from './components/Comman/SearchContext';
import Review from './components/Review/Review';


const App = () => {
  
  return (
    <Provider store={store}>
      <AuthProvider>
      <BrowserRouter> 
      <SearchContextProvider>
      <div className={classes.main}>
      <Header/>
      <div className={classes.empty_space_left}/>
      <div className={classes.container}>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/main" />}
        />
        <Route exact path="/main" component={Main}/>
        <Route path="/content_list" component={Content_list}/>
        <Route path="/genres" component={Genres}/>
        <Route path="/review" component={Review}/>
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute exact path="/account" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </div>
      <div className={classes.empty_space_right}>
      </div>
      <Footer/>
      </div>
      </SearchContextProvider>
      </BrowserRouter>
      </AuthProvider>  
    </Provider>
  )
}

export default App;
