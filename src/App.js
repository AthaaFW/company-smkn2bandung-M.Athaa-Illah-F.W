import {Routes, Route} from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'
import About from './page/about';
import Contact from './page/contact'

function App() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
   </Routes>
  );
}

export default App;
