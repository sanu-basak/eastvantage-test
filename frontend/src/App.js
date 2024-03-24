import './App.css';
import UserRegister from './components/UserRegister';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import UserList from './components/UserList';
import NotFound from './components/NotFound'

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path='/user-list' element={<UserList />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<UserRegister />} />
        </Routes>
        
      </div>  
    </Router>
    
  );
}

export default App;
