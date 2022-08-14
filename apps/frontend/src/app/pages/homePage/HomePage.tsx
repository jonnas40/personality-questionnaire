import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { BsPlayCircle } from 'react-icons/bs';


function HomePage() {
  return (
        <div className={styles['container']}>
            <h1>Discover your personality type</h1>
            <h2>Are you an extrovert or an introvert?</h2>
            <Link to={"/test"} className={styles['playButton']}>
                <BsPlayCircle size={48} ></BsPlayCircle>
            </Link>
        </div>
  );
};

export default HomePage;