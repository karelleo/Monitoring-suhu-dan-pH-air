/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import axios from "axios";
import { Line, defaults } from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Sistem = () => {
    const [dht11, setDht] = useState([]);

    useEffect(() => { 
        getDht();
    }, []);

    
    const getDht = async () => {
        const response = await axios.get('http://localhost:5000/dht11');
        setDht(response.data);
    }

    const updateTesting = async () => {
        await axios.get('http://localhost:5000/dht11/testing');
    }

    const deleteDht = async (id) => {
      await axios.delete(`http://localhost:5000/dht11/${id}`);
      getDht();
  }

    const ph = dht11.map(function(elem) {
        return elem.ph;
    })

    const suhuair = dht11.map(function(elem) {
      return elem.suhuair;
    })


    updateTesting();

    return (
        <div><div>
        <div className='container'>
            <br></br>
          <p className='chart-pH-air'>Sensor pH Air </p>
        </div>
        <Line
          data={{
            labels: ['1', '2', '3',  '4',  '5',  ' 6',  ' 7',  ' 8',  ' 9',  '10'],
            datasets: [
              {
                label: 'ph air',
                data: ph,
                backgroundColor: [
                  'transparent'
                ],
                borderColor: [
                  'blue',
                ],
                borderWidth: 4,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={100}
          width={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
        </div>
        <div>
        <div className='container'>
            <br></br>
          <p className='chart-suhu-air' >Sensor suhu air </p>
        </div>
        <Line
          data={{
            labels: [' Data 1', 'Data 2', 'Data 3',  'Data 4',  'Data 5',  'Data 6',  'Data 7',  'Data 8',  'Data 9',  'Data 10'],
            datasets: [
              {
                label: 'suhu air',
                data: suhuair,
                backgroundColor: [
                  'transparent'
                ],
                borderColor: [
                  'red',
                ],
                borderWidth: 4,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={100}
          width={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
        </div>

      <div className='table-responsive-lg'>
      <p className='tabel-fuzzy'>Tabel Nilai Sensor</p>
      <p className='tabel-fuzzy'><Link to={`/Fuzzy/`} className="btn btn-danger">Nilai Fuzzy</Link></p>
          <table className="table table-light table-hover mt-4">
              <thead>
                  <tr>
                      <th>No</th>
                      <th>ph Air</th>
                      <th>Suhu Air</th>
                      <th>Tanggal</th>
                      <th>Keterangan</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  { dht11.map((Dht, index) => (
                      <tr key={Dht.id}>
                      <td>{ index + 1}</td>
                      <td>{ Dht.ph }</td>
                      <td>{ Dht.suhuair }</td>
                      <td>{ Dht.waktu}</td>
                      <td>{Dht.testing}</td>
                      <td>
                      <button onClick={ () => deleteDht(Dht.id)} className="btn btn-danger">hapus</button>
                      </td>
                  </tr>

                  )) }
                  
              </tbody>
          </table>
      </div>
      </div>
  )
}

export default Sistem;
