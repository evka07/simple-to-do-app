import React from 'react';
import Hero from "../../components/Hero/Hero.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import List from "../../components/List/List.jsx";

const Home = () => {
    return (
        <div>
            <Hero/>
            <SearchForm/>
            <List/>
        </div>
    );
};

export default Home;