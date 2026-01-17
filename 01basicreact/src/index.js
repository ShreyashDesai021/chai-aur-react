import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot expects a DOM element as an argument which is given
                                                  //given to it by selecting a Id from index.html from the public
root.render(               // starts the rendering// what is rendering?                                      
  //<React.StrictMode> //optional used for highlighting potential problems in an applicationhence only useful in production
    <App />
  //</React.StrictMode>
);

