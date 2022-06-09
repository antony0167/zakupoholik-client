import Axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Basket = () => {

    const [product, setProduct] = useState('');
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getBasket').then((response) => {
        setProduct(response.data);
        setCount(response.data.length)
        })
    }, [])

    const remove = (product) => {
        Axios.post('http://localhost:3001/api/remove', {
            removed: product,
        }).then(() => {
            setState(true);
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getBasket').then((response) => {
        setProduct(response.data);
        setState(false);
        })
    }, [state])

    return (
        <div className="shopping-basket">
            {(count != 0 && product?.length) ? product.map((product) => (
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <div>{product.brand}</div>
                    <div>{product.size}</div>
                    <div>{"Cena : " + product.price * ((100  - product.sale) / 100)  + "zł" }</div>
                    <button onClick={() => {remove(product.id)}}>Usuń z koszyka</button>
                </div>
            )) : (
                <h3 className="empty">Twój koszyk jest pusty. Kliknij <Link to="/">tutaj</Link> żeby wrócić do strony głównej</h3>
            )}
        </div>
    );
}
 
export default Basket;