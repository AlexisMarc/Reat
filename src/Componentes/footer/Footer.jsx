import '../../assets/css/hotelia.css';
function Footer(){

    return (
        <footer>
        <div className="div">
            <p className="into">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas laboriosam facere itaque dolorem atque accusamus provident dolore dignissimos consectetur?</p>
        </div>
        <div className="div icons">
            <div className="into ">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
        
        <hr />
        <div className="div">
            <div className="into">
                <i className="fa-solid fa-location-dot"></i>
                <p>Avenida carrera8, #12A-42, Bogotá DC, Colombia</p>
            </div>
            <div className="into">
                <i className="fa-solid fa-phone"></i>
                <p>+57 601 4567899</p>
            </div>
        </div>
        <hr />
        <div className="div">
            <p className="into">Politicas de privacidad</p>
        </div>
        <hr />
    </footer>
    );
}

export default Footer;