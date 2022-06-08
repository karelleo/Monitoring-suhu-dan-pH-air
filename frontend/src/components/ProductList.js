import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProduct();
    }

    return (
        <div className='form_adding'>
            <Link to="/add" className="btn btn-info mt-2"> Add New </Link>
      <div className='table-responsive-lg'>
            <table className="table table-light table-hover mt-2">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Foto</th>
                        <th>Deskripsi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={product.id}>
                        <td>{ index + 1}</td>
                        <td>{ product.title }</td>
                        <td>{ product.foto }</td>
                        <td>{ product.deskripsi}</td>
                        <td>
                        <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
                        <button onClick={ () => deleteProduct(product.id)} className="btn btn-danger">hapus</button>
                        </td>
                    </tr>

                    )) }
                    
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ProductList
