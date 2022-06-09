import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <footer className="footer">
            <div className="contact"><span><Link to="/data">Dane kontaktowe</Link></span></div>
            <div className="media">
                <div className="facebook">Facebook</div>
                <div className="instagram">Instagram</div>
                <div className="twitter">Twitter</div>
            </div>
        </footer>
    );
}
 
export default Footer;