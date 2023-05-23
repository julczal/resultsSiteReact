import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prezentacja wyników scrapowania stron internetowych z ofertami prac w branży IT.</h1>
        <p>Badanie wykonane na podstawie programu scrapującego, napisanego w Pythonie, analizującego oferty pracy ze strony it.pracuj.pl.</p>
        <a href='#pic5'>
            <img id='strzalka'src={require('./assets/znak.jpg')}/>
        </a>
      </header>
      <div className="content">
        <MyComponent>

        </MyComponent>
        
      </div>
    </div>
  );
}

export default App;
