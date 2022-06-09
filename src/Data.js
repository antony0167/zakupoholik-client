import { Link } from "react-router-dom";

const Data = () => {
    return (
        <div className="data">
            <h2>Dane Kontaktowe</h2>
            <div>Pomoc: <br/> 
            zakupoholik@gmail.com
            </div>
            <div>Właściciel: <br/>
            Antoni Dłużewski
            </div>
            <div>Mail: <br/>
            antoni.dłużewski@gmail.com
            </div>
            <div>Telefon: <br/>
            +48 123 456 789
            </div>
            <div><Link to="/">Powrót</Link></div>
        </div>
    );
}
 
export default Data;