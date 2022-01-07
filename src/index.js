import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
     <div class="cursor">
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e=>{
    cursor.setAttribute("style", "top:" + (e.pageY -10) +"px; left:" + (e.pageX-10)+"px");
    
})  