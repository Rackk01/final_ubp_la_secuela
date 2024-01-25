import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./components/Layout";
import About  from "./components/About";
import Home  from "./components/Home";
import Default  from "./components/Default";
import Login from './components/Login';
import Registro from './components/Registro';

//MANEJO DE RUTAS.
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="/" element={<Home />} />
           <Route path="login" element={<Login />} />
           <Route path="registro" element={<Registro />}/>
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;