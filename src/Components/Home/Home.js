import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import HomeImage from '../../Images/awuralogo2.svg';
function Home() {
  return (
    <div>
      <Header />
      <div className='Home'>
        <div className='HomeContent'>
          <div className='HomeContentText'>
            Every problem is an opportunity for a <span>Solution"</span>
          </div>
          <div className='HomeContentImage'>
            <img className='TheImage' width={600} src={HomeImage} alt="HomeImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;