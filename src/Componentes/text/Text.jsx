import logo from '../../assets/img/Hotelia negro vertical.svg';
import '../../assets/css/hotelia.css';

function Text(){

    return (
        <article id="text">
            <div className="texto">
                <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de
                    lujo donde interactúan los negocios, el ocio y el descanso, gracias a su
                    estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros
                    comerciales, almacenes de lujo y emblemáticos parques para aprovechar la
                    naturaleza entre la ciudad caminay y hacer un poco de deporte al aire libre están
                    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                    ponemos a tu disposición una oferta gastronómica tan sofisticada commo
                    saludable a base de productos locales, cargados de lo mejor de la tradición
                    colombiana.</p>
            </div>
            <div className="img">
                <img src={logo} alt="" />
            </div>
        </article>
    );
}

export default Text;