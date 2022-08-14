import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import TestPage from './pages/testPage/TestPage';
import styles from './App.module.css'
import ResultPage from './pages/resultPage/ResultPage';

function App() {

  return (
    <div className={styles['wrapper']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/test"
          element={<TestPage />}
        />
        <Route
          path="/result"
          element={<ResultPage />}
        />
      </Routes>
    </div>
  );

}

export default App;
