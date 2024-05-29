import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Footer from './footer.js';
import MyComponent from './MyComponent';



function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>bienvenue dans mon premier projet React !</h1>
        <MyComponent />
        <p>Voici un exemple d'application React avec une barre de navigation et un pied de page.</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >n,
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
