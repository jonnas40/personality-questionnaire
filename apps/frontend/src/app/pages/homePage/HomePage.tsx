import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { FaPlay } from 'react-icons/fa';


function HomePage() {
  return (
        <div className={styles['container']}>
            <h1>Discover your personality type</h1>
            <h3>Are you an extrovert or an introvert?</h3>
            <Link to={"/test"} className={styles['playButton']}>
                Start test
                <FaPlay size={24}></FaPlay>
            </Link>
        </div>
  );
};

export default HomePage;