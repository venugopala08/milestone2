import React, { useState } from 'react';
import Navbar from './navbar';
import { CChart } from '@coreui/react-chartjs';
import { Button, Modal, Form } from 'react-bootstrap';
import './leave.css';

export default function Leave() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    
  }

  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar />
      <div className="leave-container">
        <div className="title">Leave Management</div>
        <div className="chart-container">
          <CChart
            type="doughnut"
            data={{
              labels: ['TOTAL TAKEN', 'TOTAL REMAINING', 'SICK LEAVE', 'CASUAL', 'FESTIVALS'],
              datasets: [
                {
                  backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#E7E9ED'],
                  data: [30, 20, 20, 10, 15],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: 'black',
                  },
                },
              },
            }}
          />
          <Button className="center-button" variant="info" onClick={handleShow}>
            Apply for LEAVE
          </Button>
        </div>
        <div className="leave-details">
          <h3>Leave Breakdown</h3>
          <ul>
            <li>Total Leave Taken: 30 days</li>
            <li>Total Leave Remaining: 20 days</li>
            <li>Sick Leave: 20 days</li>
            <li>Casual Leave: 10 days</li>
            <li>Festival Leave: 15 days</li>
          </ul>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="leaveType">
              <Form.Label>Leave Type</Form.Label>
              <Form.Control as="select">
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Festival Leave</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="reason">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}