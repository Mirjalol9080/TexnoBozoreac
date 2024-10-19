import React from 'react';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Kataloga from './Katalog-a.jsx';
import Type from './Type.jsx';
import Katalogb from './Katalog-b.jsx';
import Seen from './Seen.jsx';
import Footer from './Footer.jsx';

function Main () {
    return(
        <main className="main">
            <Banner/>
            <Kataloga/>
            <Type/>
            <Katalogb/>
            <Seen/>
        </main>
    )
}

export default Main
