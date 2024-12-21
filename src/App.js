import logo from './logo.svg';
import './App.css';
import About from './About';
import data from './utils/data.json';
import { useState } from 'react';

function App() {
  const [Lang,setLang]=useState("en");
    const aboutdata=data.aboutPage;
    
  return (
    <div className="App">
      <div className='selectcontainer'>
      <select value={Lang} onChange={(e)=>setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="de">German </option>
        <option value="es">Spanish</option>
        <option value="fr">French </option>
        <option value="ja">Japanese</option>
      </select>
      </div>
      <About data={aboutdata} language={Lang}/>
    </div>
  );
}

export default App;
