import './App.css';
import Header from './components/Header/Header';
import LabelBottomNavigation from './components/MainNav';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Container } from '@material-ui/core';
import Trending from "./Pages/Trending/Trending"
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        < Switch>
          <Route exact path="/" component={Trending} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path= "/series" component={Series} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Container>


    </div>
    



    <LabelBottomNavigation/>
    </BrowserRouter>
  );
}

export default  App;
