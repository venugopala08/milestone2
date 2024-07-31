import React, { useState } from 'react';
import Navbar from './navbar';
import { CChart } from '@coreui/react-chartjs';
import { Button } from 'react-bootstrap';
import { message } from 'antd';

export default function Attendance() {
  const [attendanceData, setAttendanceData] = useState([25, 26, 30, 28, 31, 30, 23, 0, 0, 0, 0, 0]);
  const [disabled,setdisabled]=useState(0);
  const updateTodayAttendance = () => {
    if (!disabled)
    {  const today = new Date();
      const currentMonth = today.getMonth();
      const updatedData = [...attendanceData];
      updatedData[currentMonth] += 1; 
      setAttendanceData(updatedData);
      setdisabled(1);
      message.info("Updated attendance");
    }
    else
    {
      message.warning("Already updated")
    }
   
  };

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Attendance Statistics</h2>
        <div style={{ width: '60%', height: '400px', margin: '20px 0' }}>
          <CChart
            type="bar"
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [
                {
                  label: 'Attendance Stats',
                  backgroundColor: '#f87979',
                  data: attendanceData,
                },
              ],
            }}
            labels="months"
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: 'black',
                  }
                }
              },
              scales: {
                x: {
                  grid: {
                    color: "white",
                  },
                  ticks: {
                    color: "black",
                  },
                },
                y: {
                  grid: {
                    color: 'black',
                  },
                  ticks: {
                    color: "black",
                  },
                },
              },
            }}
          />
        </div>
        <Button 
          variant="outline-dark" 
          style={{ marginTop: '20px' }} 
          onClick={updateTodayAttendance}
        >
          Update Today's Attendance
        </Button>
      </div>
    </>
  );
}