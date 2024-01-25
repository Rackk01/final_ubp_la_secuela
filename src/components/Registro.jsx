import React, { useState } from 'react';
import './css/Login.css';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación, como enviar los datos a un servidor, etc.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Por simplicidad, aquí solo mostramos los datos en la consola
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="titulo">Registrar Usuario</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
        <div className="pie">
        ¿Ya tienes cuenta? <a href="/Login">Iniciar Sesion</a>
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

export default Registro;
