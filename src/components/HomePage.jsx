// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
       <div className="home-image"></div>
       <h5 className="sub-title">Get started</h5>
       <h2 className='title'>Millions of people <br></br> use to turn their <br></br>ideas into reality.</h2>

       <div className="buttons">
         <button className="skip">Skip Now</button>
         <Link to="/login" className="black-link next">Next</Link>
 
       </div>
    </div>
    
  );
}

export default HomePage;
