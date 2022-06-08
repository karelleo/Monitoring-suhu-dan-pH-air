/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTesting = () => {
    const [testing, setTesting] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateDht11 = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/dht11/${id}`, {
            testing: testing,
        });
        navigate("/");
    }

    useEffect(() => {
        getDht11ById();
    }, []);



    const getDht11ById = async () => {
        const response = await axios.get(`http://localhost:5000/dht11/${id}`);
        setTesting(response.data.testing);
    }

    return (
        <div>
            <form onSubmit={updateDht11}>
                <div className="mb-3">
                    <label className="form-label">Testing</label>
                    <input
                    
                        class="form-control"
                        type="text"
                        placeholder="Masukan Testing"
                        value={testing}
                        onChange={(e) => setTesting(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <button className="btn btn-info">Save</button>
                </div>

            </form>
        </div>
    )
}

export default UpdateTesting
