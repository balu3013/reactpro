import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import About from './About';
import Signup  from './Signup';

export default function Main(){

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/home' Component={Home} />
                <Route exact path='/Login' Component={Login} />
                <Route exact path='/contact' Component={Contact} />
                <Route exact path='/signup' Component={Signup} />
                <Route exact path='/about_us' Component={About} />
            </Routes>
        </BrowserRouter>
    )
}