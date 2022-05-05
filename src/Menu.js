import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faShop, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div className="navbar-opacity">
            <nav className="navbar">
                <div className="sex">
                    <div className="female">Kobiety</div>
                    <div className="male">Mężczyźni</div>
                    <div className="child">Dzieci</div>
                </div>
                <div className="logo"><Link to="/"><FontAwesomeIcon icon={ faShop } />  Zakupoholik</Link></div>
                <div className="basket"><FontAwesomeIcon icon={ faShoppingCart } /></div>
                <div className="log"><Link to="/login"><FontAwesomeIcon icon={ faRightToBracket } /></Link></div>
            </nav>
        </div>
    );
}
 
export default Menu;