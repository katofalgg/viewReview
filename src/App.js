import Footer from './components/Comman/Footer';
import Main from './components/Main/Main';
import Authors from './components/Authors/Authors';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Genres from './components/Genres/Genres';
import Header from './components/Comman/Header';
import classes from './components/Comman/Comman.module.css'
import Content_list from './components/Content_list/Content_list';
import LoginPage from './components/Login/LoginPage';
import { AuthProvider } from './components/Login/Auth';
import PrivateRoute from './components/Login/PrivatRoute'
import Home from './components/PrivateOffice/Home';
import SignUp from './components/Login/SignUp';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import SearchContextProvider from './components/Comman/SearchContext';

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
      <Route path="/main" component={Main}/>
      <Route path="/content_list" component={Content_list}/>
      <Route path="/genres" component={Genres}/>
      <Route path="/authors" component={Authors}/>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
    </div>
    <div className={classes.empty_space_right}></div>
    <Footer/> 
    {/* <Gradient
      className={classes.empty_space_right}
      gradients={ gradients2 }
      property="background"
      duration={ 10000 }
      angle="90deg">
    </Gradient> */}
  </div>
  </SearchContextProvider>
  </BrowserRouter>
    </AuthProvider>  
    </Provider>
    
  )
}

export default App;
