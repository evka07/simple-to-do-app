import Hero from "./components/Hero/Hero.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import List from './components/List/List.jsx';
import Column from "./components/Column/Column.jsx";
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './styles/normalize.scss';
import './styles/global.scss';
import Container from "./components/Container/Container.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";


function App() {

    return (
        <div>
            <Container>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/favorite'} element={<Favorite/>} />
                    <Route path="/list/:listId" element={<List />} />
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App
