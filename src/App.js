import './App.css';
import  {Routes,Route} from 'react-router-dom';
import SingUP from './Components/SingUP';
import Login from './Components/Login';
import Home from './Header/Home';



function App() {
  return (
    <div>
      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/SingUP' element={<SingUP/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
