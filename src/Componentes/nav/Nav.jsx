import logo from '../../assets/img/Hotelia horizontal blanco.svg';
import '../../assets/css/hotelia.css';

function Nav(){

    return (
        <div className="Nav">
            <nav className="nav">
        <div className="logo">
            <img src={logo} alt="logo" />
            <label for="check"><i className="fa-solid fa-bars"></i></label>
            <input type="checkbox" id="check" name="check" value="1" />
        </div>
        <div className="menu" id="menu">
            <a href="index.html" className="item">Inicio</a>
            <a href="ubicanos.html" className="item">Ubícanos</a>
            <a href="opiniones.html" className="item">Opiniones</a>
            <hr className="menu-hr" noshade="" />
            <a href="login.html" className="item login">
                <button className="navbar-button"><i className="fa-solid fa-user"></i> Iniciar Sesión</button>
            </a>
        </div>
    </nav>
        </div>
    );
}

export default Nav;
