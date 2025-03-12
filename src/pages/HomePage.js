import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomePageContent from "../components/HomePageContent/HomePageContent";

const HomePage = () => {
    return (
        <div>
            <Header />
            <HomePageContent />
            <Footer />
        </div>
    );
};

export default HomePage;