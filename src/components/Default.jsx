const Default = () =>{
    return (
       <div> 
        <header>
        <div className="top"></div>

        <nav>
          <div className="container">
          {/* <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="sobre.html">Sobre Nosotros</a></li>
            <li><a href="Login.html">Login</a></li>
            
          </ul> */}

          <div className="search">
            <form method="GET" action="#">
              <input type="text" placeholder="Buscar un libro..." />
              <input type="submit" value="Buscar" />
            </form>
          </div>
        </div>
      </nav>
</header>

        <section className="padding">
          <div className="container padding">
            {/* <hr className='hr' /> */}
            </div>
        </section> 

<h2 className="bold">Oops! error 404</h2>
<h4>¡No encontramos los que buscás!</h4>
<img src="/src/images/404.jpg" alt="404" width="350px" height="100%"></img>
      
<section className="padding">
          <div className="container padding">
            {/* <hr className='hr' /> */}
            </div>
        </section> 
        
        
<footer>
  <div className="container">
    <span className="clear"> &copy; 2024 UBPlibros</span>
    {/* <span className="right">¡Alquila tu libro en línea y lo enviaremos a tu casa!</span> */}
  </div>
</footer>
</div> 
    )
}

export default Default;