import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import SetHomeCourse from '../SetHomeCourse/SetHomeCourse';
import './Home.css'
// home components
const Home = () => {
    // home state
    const [homeCourses, setHomeCourses] = useState([]);
    //  home Api calling
    useEffect( () => {
        fetch("./home.json")
        .then(res => res.json())
        .then(data => setHomeCourses(data))
    },[])
    return (
        <div>
            <Introduction></Introduction>
            <Row xs={1} md={2} className="g-4 home-style">
           {
                homeCourses.map(setHomeCourse => <SetHomeCourse 
                    key={setHomeCourse.id}
                    setHomeCourse={setHomeCourse}></SetHomeCourse>)
            }
           </Row>
           
        </div>
    );
};

export default Home;