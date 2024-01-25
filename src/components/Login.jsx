import React, { useState } from 'react';
import './css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos a un servidor, etc.
    console.log('Username:', username);
    console.log('Password:', password);
    // Por simplicidad, aquí solo mostramos los datos en la consola
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="titulo">Iniciar Sesión</h2>
        <input
          type="email"
          placeholder="Correo electronico"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
        <div className="pie">
        ¿No tienes cuenta? <a href="/Registro">Crear cuenta</a>
      </div>   
      </form>         
      <footer className="abajo">
          <div className="container">
          <span className="clear">© 2024 UBPlibros</span>
          {/* <span className="right">¡Alquila tu libro en línea y lo enviaremos a tu casa!</span> */}
          </div>
        </footer>
    </div>
    
    
  );
};

export default Login;
