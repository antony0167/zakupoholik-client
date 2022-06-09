import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faShop, faRightToBracket, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Menu = (props) => {

    const userLogged = props.userLogged;
    const [status, setStatus] = useState(false);

    const f = () => {
        props.setUser(false);
    }

    const handleSexF = () => {
        props.setSex('female')
    }

    const handleSexM = () => {
        props.setSex('male')
    }

    const handleSexC = () => {
        props.setSex('child')
    }

    const handleBoth = () => {
        props.setSex('');
        props.setMark('');
    }
    

    return (
        <div className="navbar-opacity">
            <nav className="navbar">
                <div className="sex">
                    <div className="female" onClick={handleSexF}>Kobiety</div>
                    <div className="male" onClick={handleSexM}>Mężczyźni</div>
                    <div className="child" onClick={handleSexC}>Dzieci</div>
                </div>
                <div className="logo" onClick={handleBoth}><Link to="/"><FontAwesomeIcon icon={ faShop } />  Zakupoholik</Link></div>
                <div className="basket"><Link to="/basket"><FontAwesomeIcon icon={ faShoppingCart }/></Link></div>
                <div className="log">{userLogged ? (
                <div onClick={f}><FontAwesomeIcon icon={ faRightFromBracket }/></div>
                ) : (
                <Link to="/login"><FontAwesomeIcon icon={ faRightToBracket } /></Link>
                )}
                </div>
            </nav>
        </div>
    );
}
 
export default Menu;