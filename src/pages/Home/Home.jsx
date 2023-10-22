import React from 'react';
import Hero from "../../components/Hero/Hero.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import List from "../../components/List/List.jsx";
import Lists from "../../components/Lists/Lists.jsx";


const Home = () => {
    return (
        <div>
            <Hero/>
            <Lists/>
        </div>
    );
};

export default Home;