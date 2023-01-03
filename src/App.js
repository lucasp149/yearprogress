import logo from './logo.svg';
import './App.css';
import Progress from './components/progress';
import styles from "./components/styles.module.css";

function App() {

  function calculateDays() {
    const current = new Date();
    const init = new Date("1/1/2023");

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = current.getTime() - init.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  const percentaje = Math.round(calculateDays()/365*100);
  const mientras = 10;

  return (
    <div className={styles.general}>
      <h1>Year Progress</h1>
      <Progress completed={percentaje}></Progress>
      <div className={styles.barra}> <a href='https://github.com/lucasp149/yearprogress' target="_blank"> <img src="./gitLogo.png" width="100px"></img></a></div>
    </div>
   
  );
}

export default App;


