import React, { useState } from 'react';
import Navbar from './navbar';
import { CChart } from '@coreui/react-chartjs';
import './home.css'; // Assuming you have a Home.css file for styling

export default function Home() {
  const [showRadarChart, setShowRadarChart] = useState(true);

  const toggleChart = () => {
    setShowRadarChart(!showRadarChart);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">Employee Salary Statement</div>
        <button className="toggle-button" onClick={toggleChart}>
          {showRadarChart ? 'Show Bar Chart' : 'Show Radar Chart'}
        </button>
        {showRadarChart ? (
          <div className="chart-container">
            <CChart
              type="radar"
              data={{
                labels: [
                  'HR',
                  'Software Engineer',
                  'Salesman',
                  'Technician',
                  'Manager',
                  'Security'
                ],
                datasets: [
                  {
                    label: 'Salaries in Thousands',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(54, 162, 235, 1)',
                    data: [65, 59, 55, 45, 81, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: 'blue',
                    },
                  },
                },
                scales: {
                  r: {
                    grid: {
                      color: 'black',
                    },
                    ticks: {
                      color: 'black',
                    },
                  },
                },
              }}
            />
          </div>
        ) : (
          <div className="chart-container">
            <CChart
              type="bar"
              data={{
                labels: [
                  'HR',
                  'Software Engineer',
                  'Salesman',
                  'Technician',
                  'Manager',
                  'Security'
                ],
                datasets: [
                  {
                    label: 'Headcount',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    data: [10, 25, 15, 20, 5, 8],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: 'blue',
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: 'gray',
                    },
                    ticks: {
                      color: 'black',
                    },
                  },
                  y: {
                    grid: {
                      color: 'gray',
                    },
                    ticks: {
                      color: 'black',
                    },
                  },
                },
              }}
            />
          </div>
        )}
        <div className="profile-container">
          <div className="profile-title">Employee Profile</div>
          <div className="profile-info">
            <h3>Name: Tarun G</h3>
            <h3>Id: 4672</h3>
            {/* Additional profile details can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}