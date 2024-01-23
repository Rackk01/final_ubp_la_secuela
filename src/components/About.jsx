import './css/Style.css';

const About = () =>{
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

    <h2 className="padding">Sobre Nosotros</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/UdPtYskXXGI?si=N9oYQPGOa_zDzwRd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <ul className="libros">
      {/* Agregar aquí los elementos de la lista con JSX */}
    </ul>
  </div>

  <div className="clear padding"></div>

  <div className="clear"></div>

  <div className="container padding">
    <h2>Más información</h2>
    <p className="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta blandit purus, id cursus nulla ultrices eget. Nunc consectetur mollis metus vitae finibus. Donec auctor, turpis non pretium lacinia, neque lorem posuere ligula, posuere suscipit urna massa a diam. Duis in blandit quam, sit amet sodales risus. Donec tristique sapien elit, vel varius magna accumsan eu. Vestibulum id orci nec nunc fringilla accumsan quis vel nulla. Aliquam ut elit nulla. Nam lobortis odio nec est euismod mollis. Donec sagittis, elit et egestas molestie, orci nisl facilisis metus, sit amet lacinia metus erat vitae mi. Quisque massa leo, tempus vitae lacus in, convallis finibus arcu. Quisque turpis quam, sollicitudin eget posuere quis, condimentum et nisi. Mauris sit amet malesuada justo, id tempor sapien. In venenatis sagittis est, ut aliquam justo dignissim id. Nam ultrices magna massa, nec semper velit lobortis sit amet. Ut id justo ac ante sollicitudin consequat ut vel ligula. Morbi euismod molestie pretium.</p>
    <p className="justify">Nullam in lectus a tortor scelerisque pellentesque. Ut a augue felis. Nunc sed venenatis magna. Donec id tincidunt lectus. Phasellus id tellus mollis, ultrices est quis, cursus leo. Sed accumsan enim nec aliquam pellentesque. Quisque a ipsum efficitur odio sodales pretium. Nunc imperdiet id orci sed commodo. Praesent dolor ante, maximus ac rutrum id, efficitur ut libero. Curabitur tellus mi, laoreet et dictum at, semper vel sapien. Ut a venenatis purus, ut fringilla quam. Vivamus eget vehicula massa, et porttitor dolor. Vestibulum sagittis eros justo, quis tristique lacus mattis in.</p>
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
       
}

export default About;