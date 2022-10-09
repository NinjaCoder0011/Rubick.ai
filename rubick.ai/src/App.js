import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import './App.css';
import Welcome from './Pages/Welcome';
import Content from './Pages/Content';
import Products from './Pages/Products';
import Form from "./Pages/Form";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Content/>}/>
        <Route exact path="/home" element={<Welcome/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/form" element={<Form/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

















// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './Pages/Header';
// import Sidebar from './Pages/Sidebar';
// import Content from './Pages/Content';
// import Welcome from './Pages/Welcome';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Sidebar />
//         <Routes>
//           <Route path="/home" exact component={Welcome} />
//         </Routes>
//         <Content />
//       </Router>
//     </div>
//   );
// }

// export default App;
