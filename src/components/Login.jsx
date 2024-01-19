import React, { useState } from 'react';
// import '../components/css/Login.css';

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
      <h1>Inicia Sesión</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
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
      </form>
    </div>
  );
};

export default Login;
