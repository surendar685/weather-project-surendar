import React from 'react';
import './App.css';
// import Todolist from './Todolist/Todolist';
// import Callback from './Callback';
// import Callbackhooks from './Callbackhooks';
// import Imagesearch from './Imagesearch/Imagesearch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import Weather from './Reactproject/Weather';
import ProfileCard from './ProfileCard';
function App(){
  return(
    <>
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/Imagesearch">Imagesearch</Link> 
            </li>
            <li>
              <Link to="/Callback">Callback</Link>
            </li>
            <li>
              <Link to="/Todolist">Todolist</Link>
            </li>
            <li>
              <Link to="/Callbackhooks">Callbackhooks</Link>
            </li> */}

            <h1 style={{position:"relative", bottom:"200px", fontSize:"45px",right:"70px"}}>
              <Link to="/Weather">Weather Report</Link>
            </h1>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Routes>
        {/* <Route path="/Imagesearch" element={<Imagesearch />}>
            
            </Route>
          
          <Route path="/Callback" element={<Callback />}>
            
          </Route>
          <Route path="/Todolist" element={<Todolist />}>
            
          </Route> 
          
          
          <Route path="/Callbackhooks" element={<Callbackhooks />}>
            
          </Route>  */}

          <Route path="/Weather" element={<ProfileCard />}>
            
          </Route> 
        </Routes>

        
      </div>
    </Router>
    </>
  )
  
}

export default App;
