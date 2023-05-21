import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prezentacja wyników scrapowania stron z ofertami prac w branży IT.</h1>
      </header>
      <div className="content">
        <MyComponent>

        </MyComponent>
        
      </div>
    </div>
  );
}

export default App;
