import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './RegistrationPage';
import Genre from './Genre';
import Profile from './Profile';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<RegistrationPage/>}/>
      <Route path='genre' element={<Genre/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Routes>
    </>
    
    // <div className="App">
    //   <RegistrationPage/>
    // </div>
  );
}

export default App;
