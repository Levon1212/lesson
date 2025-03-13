import React from 'react';
import './homePageContent.scss';
import HomeCard from "../HomeCard/HomeCard";
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpeg";
import Image3 from "../../assets/images/image3.jpg";

const HomePageContent = () => {

    let Anna = {
        name: 'Anna',
        image: Image1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Deen = {
        name: 'Deen',
        image: Image2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let Davit = {
        name: 'Davit',
        image: Image3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }

    let products = [Anna, Deen, Davit];

    return (
        <section className='homeContent'>
            <h1>Home Page Content</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aut commodi consectetur dolorum,
            </p>
            <div className='itemsWrapper'>
                {products.map((vale)=>{
                    return (
                        <HomeCard name={vale.name} image={vale.image} description={vale.description}/>
                    )
                })}
            </div>
        </section>
    );
};

export default HomePageContent;