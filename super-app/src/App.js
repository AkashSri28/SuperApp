import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './RegistrationPage';
import Genre from './Genre';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<RegistrationPage/>}></Route>
      <Route path='genre' element={<Genre/>}></Route>
    </Routes>
    </>
    
    // <div className="App">
    //   <RegistrationPage/>
    // </div>
  );
}

export default App;
