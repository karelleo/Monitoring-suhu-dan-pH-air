import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Line, defaults } from 'react-chartjs-2'
import 'bootstrap/dist/css/bootstrap.min.css';


defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'


const BarChart = () => {

    const [dht11, setDht] = useState([]);

    useEffect(() => { 
        getDht();
    }, []);

    const getDht = async () => {
        const response = await axios.get('http://localhost:5000/dht11');
        setDht(response.data);
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

    
  return (
    <div>
    <div>
      <div className='container'>
        <p>Sensor pH Air </p>
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
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={600}
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
        <p>sensor suhu air </p>
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
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={600}
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
        <p>Sensor Kelembapan </p>
      </div>
      <Line
        data={{
          labels: [' Data 1', 'Data 2', 'Data 3',  'Data 4',  'Data 5',  'Data 6',  'Data 7',  'Data 8',  'Data 9',  'Data 10'],
          datasets: [
            {
              label: '',
              data: hum,
              backgroundColor: [
                'transparent'
              ],
              borderColor: [
                'black',
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
        height={200}
        width={600}
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
        <p>Sensor suhu ruangan </p>
      </div>
      <Line
        data={{
          labels: [' Data 1', 'Data 2', 'Data 3',  'Data 4',  'Data 5',  'Data 6',  'Data 7',  'Data 8',  'Data 9',  'Data 10'],
          datasets: [
            {
              label: '',
              data: tempe,
              backgroundColor: [
                'transparent'
              ],
              borderColor: [
                'green',
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
        height={200}
        width={600}
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
    </div>
  )
}

export default BarChart
