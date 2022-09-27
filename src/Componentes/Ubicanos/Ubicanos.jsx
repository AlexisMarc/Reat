import '../../assets/css/hotelia.css';
import Iframe from 'react-iframe'
function Ubicanos(){

    return (
        <article id="ubicanos">
            <div className="titulo">
                <h1>Ubícanos</h1>
            </div>
            <div className="mapa">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.747080010259!2d-74.0706872724002!3d4.6391467327170135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3081295ccb%3A0xd4347f67e96f6d8b!2sSENA%20CGMLTI!5e0!3m2!1ses!2sco!4v1659210612974!5m2!1ses!2sco" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
            <div className="texto direccion">
                <p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
            </div>
            <div className="texto telefono">
                <p>+57 601 4567899</p>
            </div>
        </article>
    );
}

export default Ubicanos;