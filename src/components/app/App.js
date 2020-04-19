import React from 'react';
import Header from "../header";
import Footer from "../footer";
import MainContent from "../mainContent";

import '../../cssVariables/variables.css'
import './App.css';

const App = props =>{
    return (
        <div className="App">
            <Header />
            <MainContent state={props.state.postData} />
            <Footer />
        </div>
    );
}

export default App;
