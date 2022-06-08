/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LihatProduct = () => {
    const [title, setTitle] = useState('');
    const [foto, setFoto] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setFoto(response.data.foto);
        setDeskripsi(response.data.deskripsi);
    }

    return (
        <div className="container">
            <div className="list_sensor">
                <h5 className="lihat-title">{title}</h5>
                <img src={foto} className="featured-image" />
                <p className="p-article">{deskripsi}</p>
            </div>
        </div>
    )
}

export default LihatProduct
