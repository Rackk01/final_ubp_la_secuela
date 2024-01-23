import './css/Style.css';

const Home = () => {
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
            <hr className='hr' />
  
            <h2 className="padding">Libros Más Alquilados</h2>
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/0GRryy58bn0?si=7HiSLiIfJFSOoHEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <ul className="libros">
              {/* Agregar aquí los elementos de la lista con JSX */}
            </ul>
          </div>
  
          <div className="clear padding"></div>
  
          <div className="info">
            <div className="container">
              {/* <img src="img/libro.jpg" alt="¿Cómo Funciona?" /> */}
  
              <h1>¿Cómo Funciona?</h1>
              <p className='center'>Alquila tu libro en línea y lo enviaremos a tu puerta. Tendrás 15 días para leerlo, luego regresaremos a tu dirección y deberás devolver el libro. ¡Podrás alquilar otro que elijas en nuestro sitio web!</p>
              <a href="/about" className="button espacio">SOBRE NOSOTROS</a>
            </div>
          </div>
  
          <div className="clear"></div>
  
          <div className="container padding">
            <h2>Recomendados</h2>
  
            <ul className="libros">
              {/* Agregar aquí los elementos de la lista con JSX */}
            </ul>
  
            <hr />
  
            <h2 className="padding">Editoriales Favoritas</h2>
  
            <ul className="editoriales">
              {/* Agregar aquí los elementos de la lista con JSX */}
            </ul>
          </div>
        </section>
  
        <footer>
          <div className="container">
            <span className="clear"> &copy; 2024 UBPlibros</span>
            {/* <span className="right">¡Alquila tu libro en línea y lo enviaremos a tu casa!</span> */}
          </div>
        </footer>
      </div>
    );
  };
  
  export default Home;