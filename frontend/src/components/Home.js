/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    return (
        <div className="container">
            <p class="title_daftar">Daftar Tanaman Hidoponik</p>
            <div className="row row-cols-md-3 row-cols-md-3 g-4">
                {products.map((product, index) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 w" id="card">
                            <LazyLoadImage
                            src={product.foto}
                            height= "250"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.deskripsi}</p>
                                <Link to={`/Lihat/${product.id}`} className="btn btn-info button">Lihat</Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default Home;
