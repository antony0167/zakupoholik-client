import Axios from "axios";
import { useState, useEffect } from 'react';

const Home = (props) => {
    
    const [product, setProduct] = useState('');
    const sex = props.sex;
    const mark = props.mark;

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getOcc').then((response) => {
        setProduct(response.data);
        })
    }, [])

    useEffect(() => {
        if(sex === '') {
            if(mark === '') {
                Axios.get('http://localhost:3001/api/getOcc').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'adidas') {
                Axios.get('http://localhost:3001/api/getA').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'converse') {
                Axios.get('http://localhost:3001/api/getC').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'newbalance') {
                Axios.get('http://localhost:3001/api/getNe').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'nike') {
                Axios.get('http://localhost:3001/api/getNi').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'puma') {
                Axios.get('http://localhost:3001/api/getP').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'rebook') {
                Axios.get('http://localhost:3001/api/getR').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'umbro') {
                Axios.get('http://localhost:3001/api/getU').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'vans') {
                Axios.get('http://localhost:3001/api/getV').then((response) => {
                    setProduct(response.data);
                    })
            }
        }
        if(sex === 'female') {
            if(mark === '') {
                Axios.get('http://localhost:3001/api/getFem').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'adidas') {
                Axios.get('http://localhost:3001/api/getFemA').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'converse') {
                Axios.get('http://localhost:3001/api/getFemC').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'newbalance') {
                Axios.get('http://localhost:3001/api/getFemNe').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'nike') {
                Axios.get('http://localhost:3001/api/getFemNi').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'puma') {
                Axios.get('http://localhost:3001/api/getFemP').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'rebook') {
                Axios.get('http://localhost:3001/api/getFemR').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'umbro') {
                Axios.get('http://localhost:3001/api/getFemU').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'vans') {
                Axios.get('http://localhost:3001/api/getFemV').then((response) => {
                    setProduct(response.data);
                    })
            }
        }
        if(sex === 'male') {
            if(mark === '') {
                Axios.get('http://localhost:3001/api/getMal').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'adidas') {
                Axios.get('http://localhost:3001/api/getMalA').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'converse') {
                Axios.get('http://localhost:3001/api/getMalC').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'newbalance') {
                Axios.get('http://localhost:3001/api/getMalNe').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'nike') {
                Axios.get('http://localhost:3001/api/getMalNi').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'puma') {
                Axios.get('http://localhost:3001/api/getMalP').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'rebook') {
                Axios.get('http://localhost:3001/api/getMalR').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'umbro') {
                Axios.get('http://localhost:3001/api/getMalU').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'vans') {
                Axios.get('http://localhost:3001/api/getMalV').then((response) => {
                    setProduct(response.data);
                    })
            }
        }
        if(sex === 'child') {
            if(mark === '') {
                Axios.get('http://localhost:3001/api/getChi').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'adidas') {
                Axios.get('http://localhost:3001/api/getChiA').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'converse') {
                Axios.get('http://localhost:3001/api/getChiC').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'newbalance') {
                Axios.get('http://localhost:3001/api/getChiNe').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'nike') {
                Axios.get('http://localhost:3001/api/getChiNi').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'puma') {
                Axios.get('http://localhost:3001/api/getChiP').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'rebook') {
                Axios.get('http://localhost:3001/api/getChiR').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'umbro') {
                Axios.get('http://localhost:3001/api/getChiU').then((response) => {
                    setProduct(response.data);
                    })
            }
            if(mark === 'vans') {
                Axios.get('http://localhost:3001/api/getChiV').then((response) => {
                    setProduct(response.data);
                    })
            }
        }
    }, [sex, mark])

    const add = (product) => {
        Axios.post('http://localhost:3001/api/add', {
            added: product,
        })
    }

    return (
        <div className="home-content">
            {product?.length && product.map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.img} alt=""/>
                    <h2>{product.name}</h2>
                    <div>{product.brand}</div>
                    <div>{product.size}</div>
                    <div>{product.sex}</div>
                    <div>{"Cena oryginalna: " + product.price + " zł"}</div>
                    <div>{"Cena po obniżce: " + product.price * ((100  - product.sale) / 100)  + "zł" }</div>
                    <button onClick={() => add(product.id)}>Dodaj do koszyka</button>
                </div>
            ))}
        </div>
    );
}
 
export default Home;