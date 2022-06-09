const Navbar = (props) => {

    const handleMarkA = () => {
        props.setMark('adidas');
    }

    const handleMarkC = () => {
        props.setMark('converse');
    }

    const handleMarkNe = () => {
        props.setMark('newbalance');
    }

    const handleMarkNi = () => {
        props.setMark('nike');
    }

    const handleMarkP = () => {
        props.setMark('puma');
    }

    const handleMarkR = () => {
        props.setMark('rebook');
    }

    const handleMarkU = () => {
        props.setMark('umbro');
    }

    const handleMarkV = () => {
        props.setMark('vans');
    }

    return (
        <nav className="menu">
            <div className="adidas" onClick={handleMarkA}>Adidas</div>
            <div className="converse" onClick={handleMarkC}>Converse</div>
            <div className="newbalance" onClick={handleMarkNe}>Newbalance</div>
            <div className="nike" onClick={handleMarkNi}>Nike</div>
            <div className="puma" onClick={handleMarkP}>Puma</div>
            <div className="rebook" onClick={handleMarkR}>Rebook</div>
            <div className="umbro" onClick={handleMarkU}>Umbro</div>
            <div className="vans" onClick={handleMarkV}>Vans</div>
        </nav>
    );
}
 
export default Navbar;