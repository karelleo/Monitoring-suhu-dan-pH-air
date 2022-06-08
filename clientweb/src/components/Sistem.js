/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import axios from "axios";
import { Line, defaults } from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        await axios.get('http://localhost:5000/dht11/mobile');
    }

    const ph = dht11.map(function(elem) {
        return elem.ph;
    })

    const suhuair = dht11.map(function(elem) {
      return elem.suhuair;
    })

    const hum = dht11.map(function(elem) {
    return elem.hum;
    })

    const tempe = dht11.map(function(elem) {
    return elem.tempe;
    })

    const testing = dht11.map(function(elem) {
      return elem.testing;
      })

    updateTesting();

    return (
    <div>

<div className="container">
    </div>
      <div>
        <div className='container'>
            <br></br>
            <div className="card h-100 w" id="card">
                  <div className="card-body">
                    <h5 className="card-title">pH air</h5>
                </div>
            </div>

        </div>
        <Line
          data={{
            labels: [' Data 1', 'Data 2', 'Data 3',  'Data 4',  'Data 5',  'Data 6',  'Data 7',  'Data 8',  'Data 9',  'Data 10'],
            datasets: [
              {
                label: '',
                data: ph, suhuair,
                backgroundColor: [
                  'transparent'
                ],
                borderColor: [
                  'blue',
                ],
                borderWidth: 4,
              },
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
        <div>
        <div className='container'>
            <br></br>
          
            <div className="card h-100 w" id="card">
                  <div className="card-body">
                    <h5 className="card-title">Suhu Air</h5>
                </div>
            </div>
        </div>
        <Line
          data={{
            labels: [' Data 1', 'Data 2', 'Data 3',  'Data 4',  'Data 5',  'Data 6',  'Data 7',  'Data 8',  'Data 9',  'Data 10'],
            datasets: [
              {
                label: '',
                data: suhuair,
                backgroundColor: [
                  'transparent'
                ],
                borderColor: [
                  'red',
                ],
                borderWidth: 4,
              },
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
          <table className="table table-light table-hover mt-4">
              <thead>
                  <tr>
                      <th>No</th>
                      <th>ph Air</th>
                      <th>Suhu Air</th>
                      <th>Tanggal</th>
                      <th>Keterangan</th>
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
                  </tr>

                  )) }
                  
              </tbody>
          </table>
      </div>

      </div>
  )
}


export default Sistem;
