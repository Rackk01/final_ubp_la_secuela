import { Outlet, Link } from "react-router-dom"

const Layout = () =>{
    return <div>
        <div className="logo"><Link to="/"><img src="/src/images/w-Logo.png" width="200px" height="88px" alt="AlquilerLibros.Com" /></Link></div>   
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/about">Nosotros</Link>
                </li>
                <li>
                    <Link to="/Login">Ingresar</Link>
                </li>
            </ul>
        </nav>
        {/* <hr /> */}
        <Outlet />
    </div>;
}

export default Layout;