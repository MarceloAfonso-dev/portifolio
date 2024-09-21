import { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/header';
import validaWidth from './helpers/getWidth';

function App() {

  useEffect(() => {
    console.log(validaWidth());
  }, [])

  console.log(validaWidth())

  return(
    <div className={styles.portifolioContainer}>
      <Header />
    </div>
  )
}

export default App;
