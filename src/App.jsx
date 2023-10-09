import Hero from "./components/Hero/Hero.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import List from './components/List/List.jsx';
import Column from "./components/Column/Column.jsx";
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './styles/normalize.scss';
import './styles/global.scss';
import Container from "./components/Container/Container.jsx";


function App() {

    return (
        <div>
            <Container>
                <Hero/>
                <SearchForm/>
                <List/>
            </Container>
        </div>
    )
}

export default App
