import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Routes, Route } from "react-router-dom";
// import Error from '@/_utils/Error';

const Home = () => {
    return(
        <>
            <div>
                <img src='https://atd2024.s3.eu-north-1.amazonaws.com/public/atd_home.png' alt='home-page'></img>
            </div>
            <section className='d-flex flex-row align-items-center container mt-5 h-100'>
                <div>
                    <img src='https://cdn.discordapp.com/attachments/1034866067203428473/1234815229133717555/image.png?ex=66321acc&is=6630c94c&hm=90c7d9129734640a5b9c5dd55893d2ab8f0d6be8cda9dd7dd1200939f0fac447&' height={125} width={125} alt='temoin'></img>
                </div>
                <div className='mx-auto'>
                    <p className='text-justify lead'>
                        <FormattedMessage id='section1-home' />
                    </p>
                </div>
            </section>
            <div className='blue'>
                <section className='d-flex flex-row align-items-center container mt-5 py-auto'>
                    <div>
                        <img src='https://cdn.discordapp.com/attachments/1034866067203428473/1234887892883607662/image.png?ex=66325e78&is=66310cf8&hm=0db47ecee10436ee320bc741071ef55150df617accf4dea67c3ddfb9c7d61b26&' height={400} width={450} alt='temoin'></img>
                    </div>
                    <div className='mx-auto'>
                        <p className='text-justify lead py-auto'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </section>
                <style>
                    {`
                    .blue {
                        background-color: #31AFB4;
                    }
                    `}
                </style>
            </div>
            <section className='d-flex flex-row align-items-center container mt-5 h-75'>
                <div className='mx-auto'>
                    <p className='text-justify lead'>
                        <FormattedMessage id='section2-home' />
                    </p>
                </div>
                <div>
                    <img src='https://cdn.discordapp.com/attachments/1034866067203428473/1234815229133717555/image.png?ex=66321acc&is=6630c94c&hm=90c7d9129734640a5b9c5dd55893d2ab8f0d6be8cda9dd7dd1200939f0fac447&' height={125} width={125} alt='temoin'></img>
                </div>
            </section>
            <div className='blue'>
                <section className='d-flex flex-row align-items-center container mt-5 py-auto'>
                    <div className='mx-auto'>
                        <p className='text-justify lead py-auto'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div>
                        <img src='https://cdn.discordapp.com/attachments/1034866067203428473/1234887892883607662/image.png?ex=66325e78&is=66310cf8&hm=0db47ecee10436ee320bc741071ef55150df617accf4dea67c3ddfb9c7d61b26&' height={400} width={450} alt='temoin'></img>
                    </div>
                </section>
                <style>
                    {`
                    .blue {
                        background-color: #31AFB4;
                    }
                    `}
                </style>
            </div>


        </>
    );
};

export default Home;