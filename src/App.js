import React, {Component} from 'react';
import './App.css';
import { Route,Routes, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Component/Home/Home';
import Todo from './Component/Todo/Todo';
import CreateTodo from './Component/CreateTodo/CreateTodo';


class App extends Component {
  render() {
    return(
      <>

      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/todo" className="nav-link">Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create-todo" className="nav-link">CreateTodo</Link>
                </li>
              </ul>
            </div>
            </nav>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/create-todo' element={<CreateTodo/>}/>
        <Route path='/*' element={<div>Error page not found</div>} />
      </Routes>

      </>
    );
  }
}


export default App;
