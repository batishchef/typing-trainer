import styles from './App.module.css';
import AddText from './pages/addText/AddText';
import Main from './pages/main/Main';

function App() {
  return (
    <div className={styles.App}>
      <Main />
      <AddText />
    </div>
  );
}

export default App;
