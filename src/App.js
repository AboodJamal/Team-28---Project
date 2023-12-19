import React from 'react';
import PopularQuestions from "./nosyba component/popularquestion"; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your main App CSS
import Footer from './footer';
import Global  from './globalpage2';
import "./nosyba component/App.css";


function App() {
  return (


<div>
  <Footer/>

        <PopularQuestions />
        <Global/>


        </div>

  );
}

export default App;
