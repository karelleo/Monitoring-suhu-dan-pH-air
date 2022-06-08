import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [foto, setFoto] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const navigate = useNavigate();


    const saveProduct = async (e) => {
        e.preventDefault();
        console.log(foto)
        await axios.post('http://localhost:5000/products',{
            title : title,
            foto : foto,
            deskripsi : deskripsi
        });
        navigate("/");
    }
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setFoto(base64);
      };
    
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };
    return (
        <div className='form_adding'>
            <form onSubmit={ saveProduct }>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input 
                    class="form-control" 
                    type="text" 
                    placeholder="Masukan Title"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)}    
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Foto</label>
                <input 
                    class="form-control" 
                    type="file" 
                    placeholder="Masukan Foto"
                    onChange={ (e) => uploadImage(e)}    
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Deskripsi</label>
                <input 
                    class="form-control" 
                    type="text" 
                    placeholder="Masukan Deskripsi"
                    value={ deskripsi }
                    onChange={ (e) => setDeskripsi(e.target.value)}
                />
            </div>

            <div className="mb-3">
            <button className="btn btn-info">Save</button>
            </div>

            </form>
        </div>
    )
}

export default AddProduct
