import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icon from "../icons/1.jpg";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Home() {

    return (
        <div>
            <Header />
            <div className="main">
                <h1 className="head">Your Very Own Classy Todo List</h1>
                <img className="img-1" src={icon} alt="nothing"/>
                <br />
                <p className="type">Manage and keep your tasks in an organised manner<br/>to become productive and precise with your work<br/></p>
                <p className="type"><ArrowRightIcon/>Easy to Use UI</p>
                <p className="type"><ArrowRightIcon/>Clean Design</p>
                <p className="type"><ArrowRightIcon/>Fast</p>
            </div>
            <Footer className="foot"/>
        </div>
    )
}

export default Home;