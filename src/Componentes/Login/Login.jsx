import '../../assets/css/hotelia.css';
function Login(){

    return (
        <div className="body">
    <div className="regresar">
        <a href="index.html"><i className="fa-solid fa-arrow-left-long"></i></a>
    </div>
        <div className="container">
            <div className="logo">
                <img src="assets/img/Hotelia horizontal negro.svg" alt="" />
            </div>
            <div className="i">
                <i className="fa-solid fa-circle-user"></i>
            </div>
            <form method="post">
                <div className="usuario">
                    <label for="user">Usuario</label>
                    <input type="text" name="user" />
                </div>
                <div>
                    <label for="password">Contraseña</label>
                    <input type="text" name="password" />
                </div>
                <div className="boton">
                    <button><a href="dashboard.html">Ingresar</a></button>
                    <div className="aqui">
                        <p>¿No tienes una cuenta?</p>
                        <a href="formulario.html">Registrate aquí.</a>
                    </div>
                </div>
            </form>
        </div>
</div>
    );
}

export default Login;